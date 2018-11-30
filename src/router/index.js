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
      component: (resolve) => require(['@/views/Home.vue'], resolve),
      redirect:'/home', //路由重定向
    },
    {
      path: '/Home',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: (resolve) => require(['@/views/Home.vue'], resolve),
    },
    {
      path: '/news',
      name: 'news',
      meta: {
        title: '新闻资讯'
      },
      component: (resolve) => require(['@/views/news.vue'], resolve)
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      meta: {
        title: '新闻资讯详情页'
      },
      component: (resolve) => require(['@/views/newsDetail.vue'], resolve)
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      meta: {
        title: '购物车'
      },
      component: (resolve) => require(['@/components/shopcar/car.vue'], resolve)
    },
    {
      path: '/callme',
      name: 'callme',
      meta: {
        title: '联系我们'
      },
      component: (resolve) => require(['@/views/callme.vue'], resolve)
    },
    {
      path: '/vuexDemo',
      name: 'vuexDemo',
      meta: {
        title: 'vuexDemo'
      },
      component: (resolve) => require(['@/views/vuexDemo.vue'], resolve)
    }
  ]
})
