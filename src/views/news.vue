<template>
  <div id="tmpl">
    <v-newsItem :newsData="newsList" @getnewsDetail="getnewsDetail"></v-newsItem>
  </div>
</template>

<script>
  import newsItem from '../components/news/newsItem.vue';
  export default {
    data() {
      return {
        newsList:''
      }
    },
    created(){
      this.getnewslist();
    },
    components: {
      'v-newsItem':newsItem
    },
    methods: {
      getnewslist(){
        let url="http://jsonplaceholder.typicode.com/photos";

        // vue-resource请求数据
//        this.$http.get(url).then(function (response) {
//          if(response.data.data != "" || response.data.data != "undefined"){
//            this.newsList = response.data;
//            console.log(response.data);
//          }else{
//            Toast('暂无数据');
//            return;
//          }
//        });

        // axios请求数据
        let that = this;
        this.axios.get(url).then(function (response) {
          console.log(response);
          if( response.data.data != "" || response.data.data != "undefined"){
            that.newsList = response.data;
          }else{
            Toast('暂无数据');
            return;
          }
        }).catch(function (error) {
          console.log(error);
        });
      },
      // 进详情页
      getnewsDetail(newItem){
        this.$router.push({
          path:'newsDetail',
          query:{
            newsID:newsItem
          }
        })
      }
    }
  }
</script>

<style>
</style>
