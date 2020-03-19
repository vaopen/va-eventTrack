# eventTrack-vue

[中文](https://github.com/vaopen/va-eventTrack/blob/master/README-ZH.md)

eventTrack for vue plugins

record time for each page to stay

record the time of each event tracking

## Install

Run the command below in your terminal to install `va-event-track` first

```js
npm install va-event-track --save
```

## Usage

```js
import { install as eventTrack } from 'va-event-track';

/**
 * Please refer to Demo
 * 
 * {...} Has four parameters
 * Mapped: event track mark
 * router: Vue Router
 * params: {}  Custom parameters
 * saveEventTrack: Promise interface
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
