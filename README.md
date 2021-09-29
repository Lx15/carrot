# carrot

架构：React+Antd; 直接clone本仓库，可直接开发Chrome插件

> 说明，基础仓库 from https://github.com/Yuezi32/react-crx  增加devtools 等功能

基本功能：
- 独立popup、content、background、devtools目录
- 按照Chrome Extension最终生成目录要求配置webpack
- 封装axios，可以将API请求委托给background script执行，从而实现跨域请求
- 设置.env.development环境变量，便于在开发环境下禁止委托background script发起请求


## 安装

```
yarn
```
## 开发调试

执行：
```
yarn start
```
即可在开发环境预览调试popup页面
如果需要在开发环境预览调试content script， 引入content script 即可：
```
    import './popup.scss'
+   import '@/content'
```

## build项目

执行：
```
yarn build
```
即可生成最终Chrome Extension文件。

## 精简最终build文件

build生成的最终文件，可删除以下文件：
```
    ├─ /images
    ├─ /static
    |  ├─ /css
    |  |  ├─ content.css
    |  |  ├─ main.css
    |  ├─ /js
    |  |  ├─ background.js
-   |  |  ├─ background.js.LICENSE.txt
    |  |  ├─ content.js
-   |  |  ├─ content.js.LICENSE.txt
    |  |  ├─ main.js
-   |  |  ├─ main.js.LICENSE.txt
    |  ├─ /media
-   ├─ asset-manifest.json
    ├─ favicon.ico
    ├─ index.html
    ├─ insert.js
    ├─ manifest.json
-   ├─ precache-manifest.xxxxxxx.js
-   ├─ service-worker.js
    |- ...
```

## 安装

chrome Extensions 直接Load unpacked build目录即可