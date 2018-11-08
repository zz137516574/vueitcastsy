import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass:'mui-active', //改变路由激活时的class名称
  linkExactActiveClass:'mui-active',
  mode:'history',  //去掉地址中的 #
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: '首页'
      },
      component: (resolve) => require(['@/components/Home.vue'], resolve),
      redirect:'/home', //路由重定向
    },
    {
      path: '/Home',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: (resolve) => require(['@/components/Home.vue'], resolve),
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      meta: {
        title: '购物车'
      },
      component: (resolve) => require(['@/components/shopcar/car.vue'], resolve)
    }
  ]
})
