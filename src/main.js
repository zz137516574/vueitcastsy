// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入全部组件
import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'
Vue.use(Mint);

// 注册mui的css样式
import '../static/mui/css/mui.min.css'
import '../static/mui/fonts/mui.ttf'


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
