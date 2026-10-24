# [Bug]: macOS 通知守护进程变慢时整个 UI 对点击无响应 —— 主线程定时器中同步调用 `deliveredNotifications` 所致

> 复制以下内容到 GitHub issue 提交。标题用上面这行。相关联:同批提交的《[Bug]: 项目库损坏(SQLite code 11)后无自救路径》 issue,开头互相引用。

### 提交前检查

- [x] 我已搜索现有 Issue,确认没有相同问题(搜索过 `deliveredNotifications`、`usernoted`、`malformed`、通知卡死 等关键词)
- [x] 我已从截图、日志和配置中移除 API Key、Token、密码及私钥等敏感信息

### Wisp 版本

1.20.0

### 安装方式

GitHub Releases 安装包

### 操作系统

macOS

### 系统版本与架构

macOS 27.0.1 (26A434) / arm64 (Apple Silicon)

### 执行环境

本机

### 出问题的功能或工具

应用主进程事件循环 / macOS 通知中心(UNUserNotificationCenter)调用

### 模型服务商 / 模型名称 / 模型连接配置

不相关(纯客户端问题,未涉及任何模型调用)

### 问题描述

应用连续运行数小时后,点击**发送**按钮完全无反应:不创建 run、不显示任何报错、进程也不崩溃。输入框仍然可以打字(输入由 WebContent 子进程处理),但所有需要主进程参与的 UI 操作全部失效,只能强退重启应用才能恢复。

对 `wisp-tauri` 执行 `sample` 采样后发现:**主线程永久阻塞在同步 API `-[UNUserNotificationCenter deliveredNotifications]` 内部**,而该调用来自一个循环执行的 NSTimer。此 API 会向 `usernoted` 守护进程发起同步 XPC 往返;一旦守护进程响应变慢,主线程的 run loop 再也无法回到事件处理,WebView 发来的 IPC 请求(如"发送"按钮)永远得不到处理。

此外应用对该接口的轮询频率过高:应用运行期间 `usernoted` 持续占用约 35% CPU;应用一退出,CPU 立刻降到 0.0%。

### 复现步骤

无法确定性复现——需要 `usernoted` 变慢/无响应(本例中守护进程已连续运行 17 天)。但问题代码路径是架构性的,只需延迟守护进程应答即可复现:

1. 应用长时间运行(本例约 13 小时),期间 `usernoted` 因故变慢(观察到 ~35% CPU 空转)
2. 点击"发送"及其他依赖主进程的 UI → 静默失效
3. 不生成崩溃报告,进程保持存活,用户侧看不到任何错误提示

### 实际表现

- UI 对点击无响应,静默失败,无任何错误提示
- `sample` 显示主线程阻塞(见下方证据)

### 期望表现

- 通知守护进程变慢/无响应时,不应冻结应用整个 UI
- 后端请求失败时,应向用户展示错误,而不是静默失败

### 证据

`sample <wisp-tauri 的 pid> 3` —— 主线程,1330 个采样点中 1322 个阻塞在此:

```
Thread_... DispatchQueue_1: com.apple.main-thread (serial)
  __CFRunLoopRun
    __CFRunLoopDoTimers → __NSFireTimer
      -[_NSConcreteUserNotificationCenter deliveredNotifications] + 52
        -[_NSConcreteUserNotificationCenter _sendSyncMessage:result:] + 280
          _dispatch_semaphore_wait_slow
            _dispatch_sema4_timedwait
              semaphore_timedwait_trap        ← 阻塞(向 usernoted 的同步 XPC 调用)
```

退出应用前后 `usernoted` 的 CPU 对比:

```
应用运行中:  usernoted  35.7% CPU(state R)   ← 正在应答应用的轮询
应用被杀掉:  usernoted   0.0% CPU(state S)   ← 立即空闲
```

注意:仅重启 `usernoted` **无法**恢复应用——已发出的同步消息失去应答方,主线程会永久阻塞(已通过再次采样确认)。

### 分析 / 修复建议

主线程上的循环定时器调用了**同步**的 `deliveredNotifications` API。修复建议,按优先级排列:

1. 停止轮询已送达通知;如确需该状态,改用 `UNUserNotificationCenterDelegate` 回调(事件驱动)
2. 若轮询是有意为之:改用异步的 `getDeliveredNotificationsWithCompletionHandler:` 并放到后台队列,同时降低轮询频率(当前频率已把 `usernoted` 顶到 ~35% CPU)
3. 无论采用哪种方案:不要在主线程上做同步 XPC/系统调用,让"守护进程卡死"只降级某个功能,而不是冻结整个应用

如果该调用来自 `tauri-plugin-notification` 而非 Wisp 自身代码,建议同步向上游反馈。

同类主线程 hang 此前已被认真修复过(#1250 保存面板自锁、#1265 Windows IME 死锁、#1179 WebView 卡死),本例可视为 macOS 侧的第三个来源。

### 受影响用户的临时解决方法

```sh
killall usernoted          # launchd 会自动重新拉起
# 然后强退并重新打开应用
```
