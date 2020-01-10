import Vue from 'vue'
import Router from 'vue-router'
import summary from '@/views/summary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'summary',
      component: summary
    }
  ]
})
