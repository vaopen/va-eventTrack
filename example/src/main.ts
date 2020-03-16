import Vue from 'vue';
import App from './App.vue';
import { install as buriedpoint } from '../../src/index';
import BuriedpointDemo from './buriedpoint/buriedpointDemo';

Vue.config.productionTip = false;

export const Mapped = {
  ...BuriedpointDemo
}

Vue.use(buriedpoint, {Mapped});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
