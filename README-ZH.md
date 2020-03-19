# eventTrack-vue

一个Vue的埋点插件

记录路由-每个页面的停留时间

记录埋点-每个埋点存在时间

## 安装

```js
npm install va-event-track --save
```

## 使用

```js
import { install as eventTrack } from 'va-event-track';

/**
 * 具体使用信息可看DEMO
 * 
 * {...} 目前有四个参数
 * Mapped: 埋点的信息
 * router: 路由源信息
 * params: {}  公共的参数
 * saveEventTrack: 一个异步的接口
 */
Vue.ues(eventTrack, {...})
```

## Demo

[example](https://github.com/vaopen/va-eventTrack/tree/master/example)

[server](https://github.com/vaopen/va-eventTrack/tree/master/server)

## Development

```js
npm install
```
