import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
// 需要维护的状态
const store = new Vuex.Store({
  // 存放全局状态
  state:{
    count: 0
  },

  // 类似计算属性
  getters:{

  },

  // 改变全局状态(state不能直接修改，只能通过mutations来修改)
  mutations:{
    increment(state) {
      state.count ++
    },
    decrement(state) {
      state.count --
    }
  },

  // 业务逻辑
  actions:{
    myIncrease(context) {
      context.commit('increment')
    },
    myDecrease(context) {
      context.commit('decrement')
    },
  }
});
// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default store
