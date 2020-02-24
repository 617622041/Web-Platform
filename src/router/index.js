import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bim',
      component: () => import('@/views//mainForm')
    }
  ]
})
