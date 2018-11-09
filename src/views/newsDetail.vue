<template>
  <div id="tmpl">
    newsDetail
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newsId:0
      }
    },
    mounted(){
      this.newsId = this.$route.query.newsId;
    },
    components: {},
    methods: {
      getDetail(){
        console.log("this.newsId-------"+this.newsId);
      }
    }
  }
</script>

<style>
</style>
