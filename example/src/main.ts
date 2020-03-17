import Vue from 'vue';
import App from './App.vue';
import { install as buriedpoint } from '../../src/index';
import BuriedpointDemo from './buriedpoint/buriedpointDemo';
import VueRouter from 'vue-router'

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Foo',
      component: () => import('./components/foo.vue')
    },
    {
      path: '/bar',
      name: 'Bar',
      component: () => import('./components/bar.vue')
    }
  ]
})

Vue.use(VueRouter)

export const Mapped = {
  ...BuriedpointDemo
}

Vue.use(buriedpoint, {
  Mapped,
  router
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
