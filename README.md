# 项目介绍

基于 React 应用开发的天气 APP，目前固定展示杭州余杭地区的实时天气，支持离线缓存。依赖三方天气 [API](https://dev.qweather.com/docs/api/)

## 目录结构

```
.
├── build
├── config
├── node_modules
├── public
├── scripts
└── src
    ├── api           // 请求接口合集
    ├── assets        // 静态资源，包括图片和样式
    │   ├── imgs
    │   └── styles
    ├── hooks         // 通用 hook 函数
    ├── router        // 路由配置
    ├── utils         // 通用工具函数
    └── views         // 页面
        ├── detail
        └── home
```
## 常用指令

### `npm start`

本地开发

### `npm build`

打包构建

