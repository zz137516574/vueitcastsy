import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: (resolve) => require(['@/components/login.vue'], resolve),
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: (resolve) => require(['@/components/login.vue'], resolve),
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        title: '注册'
      },
      component: (resolve) => require(['@/components/register.vue'], resolve)
    }
  ]
})
