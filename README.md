# TrendHub

[中文](README.md) | [Español](README.es.md) | [English](README.en.md)

[![Download](https://img.shields.io/badge/Download-ZIP-brightgreen?style=for-the-badge&logo=github)](https://github.com/whj2006/trendhub/archive/refs/heads/main.zip)

TrendHub 是一个静态推荐网站，汇集音乐、游戏、剧集、动漫和电影的精选推荐。

## 功能特性

- 首页展示各分类推荐内容
- 按分类浏览：音乐 / 游戏 / 剧集 / 动漫 / 电影
- 搜索功能，按名称、作者、流派筛选
- 详情页展示单个推荐项信息
- 推荐页（Sugerencias）
- 支持西班牙语 / 英语一键切换

## 技术栈

- 纯 HTML5 / CSS3 / 原生 JavaScript
- 无框架、无构建工具，开箱即用
- 数据存储于 `js/datos.js` 中的 JS 对象数组
- i18n 多语言支持：`js/i18n.js`

## 项目结构

```
web/
├── html/           # 页面文件
│   ├── principal.html      # 首页
│   ├── musica.html         # 音乐分类
│   ├── juego.html          # 游戏分类
│   ├── videos.html         # 剧集/动漫/电影
│   ├── detalle.html        # 详情页
│   ├── buscador.html       # 搜索结果
│   └── surgerencias.html   # 推荐页
├── css/            # 样式文件
├── js/             # 脚本与数据
│   ├── i18n.js             # 多语言模块
│   ├── datos.js            # 推荐数据
│   ├── principal.js        # 首页逻辑
│   ├── buscador.js         # 搜索逻辑
│   └── ...
└── img/            # 图片资源
    ├── musica/
    ├── juegos/
    ├── series/
    ├── anime/
    └── pelis/
```

## 本地运行

直接用浏览器打开 `html/principal.html` 即可，或启动一个本地服务器：

```bash
cd web
python -m http.server 8000
# 访问 http://localhost:8000/html/principal.html
```

## 作者

**Hejun Wang** © 2026
