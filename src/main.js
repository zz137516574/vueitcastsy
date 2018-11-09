// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './axios'

// 2.0 引入mint-ui的全部组件
import 'mint-ui/lib/style.min.css'
// 导入mint-ui组件对象
import Mint from 'mint-ui'
// 在vue中全局使用mintui
Vue.use(Mint);

// 3.0 注册mui的css样式
import '../static/mui/css/mui.min.css'
import '../static/mui/fonts/mui.ttf'

// 4.0 导入一个当前系统的基本样式
import '../static/css/site.css'

// 5.0 将vue-resource在vue中绑定，自动在vue对象实例上注入一个$http对象就可以使用ajax方法
import VueResource from 'vue-resource'
Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
});
