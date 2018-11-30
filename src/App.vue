<template>
  <div id="app">
    <!--1.0 利用mint-ui中的header组件实现-->
    <mt-header fixed title="Vue测试系统"></mt-header>
    <!--<div style="margin-top: 40px;margin-bottom: 20px">{{count}}</div>-->

    <!--2.0 利用vue-router的<router-view>进行站位-->
    <router-view></router-view>
    <!--3.0 利用mui中的tabbar组件实现系统的底部-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/vuexDemo">
        <span class="mui-icon mui-icon-starhalf"></span>
        <span class="mui-tab-label">Vuex</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-pengyouquan"><span class="mui-badge">0</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/callme">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">联系我们</span>
      </router-link>
    </nav>

  </div>
</template>

<script>
//  import {mapState} from "vuex";
  export default {
    name: 'App',
    data() {
      return {}
    },
//    computed:{
//      // ...解构赋值
//      ...mapState(["count"])
//    },
    methods: {
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
