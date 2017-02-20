import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Home from 'components/home'
import Per from 'components/per'
import Car from 'components/car'
import Mine from 'components/mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/per',
      component: Per
    },
    {
      path: '/car',
      component: Car
    },
    {
      path: '/mine',
      component: Mine
    }
  ]
})
