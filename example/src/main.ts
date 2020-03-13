import Vue from 'vue';
import App from './App.vue';
import { install as buriedpoint } from '../../src/index';

Vue.config.productionTip = false;
Vue.use(buriedpoint, {Mapped: []});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
