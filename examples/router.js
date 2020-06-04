import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "form" */ './views/TypicalForm.vue')
    },
    {
      path: '/inline',
      name: 'inline',
      component: () => import(/* webpackChunkName: "form" */ './views/InlineForm.vue')
    },
    {
      path: '/validation',
      name: 'validation',
      component: () => import(/* webpackChunkName: "form" */ './views/ValidationForm.vue')
    }
  ]
})
