import Vue from 'vue';
import App from './App.vue';
import { install as buriedpoint } from '../../src/index';
import BuriedpointDemo from './buriedpoint/buriedpointDemo';
import VueRouter from 'vue-router'
import qs from 'qs'

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

const saveBuriedpoint = (params: any) => {
  return fetch('http://192.168.10.49:8888/buriedpoint', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    body: qs.stringify(params)
  }).then((response) => response.json())
}

Vue.use(buriedpoint, {
  Mapped,
  router,
  params: {
    applicationUid: 'buriedpointTest'
  },
  saveBuriedpoint
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
