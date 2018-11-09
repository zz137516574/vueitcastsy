<template>
  <div id="tmpl">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item,index) in newsData" :key="index" @click="getnewsDetail(item)">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="item.url">
          <div class="mui-media-body">
            {{item.title}}
            <p class='mui-ellipsis'>{{item.title}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        props:{
          newsData:{
            required: true
          }
        },
        data() {
            return {}
        },
        components: {},
        methods: {
          getnewsDetail(itemId){
            this.$emit('getnewsDetail',itemId)
          }
        }
    }
</script>

<style scoped="scoped">
  .mui-media-body{
    text-align: left;
  }
</style>
