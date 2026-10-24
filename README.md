# timeline

时间线网站仓库：每个主题一个**结构完全一致**的自包含目录，全站由根 `index.html` 门户页导航。

## 目录结构（每个主题统一模板）

```
timeline/
├── index.html            全站门户（主题导航）
├── README.md             本说明
└── topics/<主题名>/       一个主题 = 一个自包含目录
    ├── timeline.html     入口页面（名字、位置固定）
    ├── data.js           时间线数据（数据与页面分离；纯静态页可省略）
    ├── img/              该主题全部图片
    └── README.md         主题说明（可选）
```

## 新增主题流程

1. `mkdir topics/<kebab-case英文名>`
2. 放入 `timeline.html`（入口）、`data.js`（数据，如有）、`img/`（图片）
3. 主题内只用相对路径引用（`img/xxx.jpg`、`data.js`），**不跨主题引用、不用 `../` 跳出本主题**
4. 在根 `index.html` 的卡片列表里加一个 `<a class="card">`
5. 在下面主题清单表里登记一行，然后 git commit

## 主题清单

| 主题目录 | 名称 | 入口 | 数据 |
|---|---|---|---|
| `topics/bio-course` | 生物演化思想时间线 | `timeline.html` | 内嵌于 HTML |
| `topics/ai-decode-life` | AI 解码生命时间线 | `timeline.html` | `data.js` |
