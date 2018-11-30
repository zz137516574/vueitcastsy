<template>
  <div id="tmpl">
    <div style="margin-top: 60px;margin-bottom: 20px">{{count}}</div>
    <button @click="increase">增加</button>
    <button @click="decrease">减少</button>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  import {mapMutations} from "vuex";
  import {mapActions} from "vuex";
  export default {
    data() {
      return {}
    },
    computed:{
      // ...解构赋值
      ...mapState(["count"])
    },
    components: {},
    methods: {
      // ...解构
      ...mapMutations(['increment','decrement']),
      ...mapActions(['myIncrease','myDecrease']),
      increase() {
//        this.$store.commit('increment')
//        this.increment()
        this.myIncrease()
      },
      decrease() {
//        this.$store.commit('decrement')
//        this.decrement()
        this.myDecrease();
      }
    }
  }
</script>

<style>
</style>
