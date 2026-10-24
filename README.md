# timeline

时间线项目仓库：每个主题一个独立目录，统一放在 `topics/` 下，互不依赖、可单独打开。

## 目录结构

```
timeline/
├── README.md            本说明
└── topics/              所有时间线主题，一个主题一个子目录
    ├── bio-course/      生物演化思想时间线
    │   ├── README.md    该主题说明（可选）
    │   ├── pages/timeline.html
    │   └── assets/images/…
    └── ai-decode-life/  AI 解码生命时间线
        ├── timeline.html
        ├── timeline-data.js
        └── img/…
```

## 新增主题的规则

1. 在 `topics/` 下新建目录，命名为 `kebab-case` 英文短名（如 `topics/chem-history/`）。
2. 主题目录必须**自包含**：HTML、数据 JS、图片等所有依赖放在本主题目录内，只用相对路径引用，不跨主题引用。
3. 入口 HTML 建议统一命名为 `timeline.html`（放在主题目录根部或 `pages/` 下均可）。
4. 数据与页面分离的，数据文件放在入口 HTML 同目录（如 `timeline-data.js`）。
5. 图片统一放本主题的 `img/`（或 `assets/images/`）目录。
6. 在本 README 的「主题清单」表里登记一行。
7. `git add topics/<name> && git commit`。

## 主题清单

| 主题目录 | 名称 | 入口 | 说明 |
|---|---|---|---|
| `topics/bio-course` | 生物演化思想时间线 | `topics/bio-course/pages/timeline.html` | 演化理论发展史，图片在 `assets/images/` |
| `topics/ai-decode-life` | AI 解码生命时间线 | `topics/ai-decode-life/timeline.html` | 依赖同目录 `timeline-data.js`，图片在 `img/` |
