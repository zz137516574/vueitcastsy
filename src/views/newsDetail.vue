<template>
  <div id="tmpl">
    <div class="title">
      <h4>{{newsDate.title}}</h4>
      <p>
        <!--日期格式化-->
        发布时间：{{addTime | datefmt('YYYY-MM-DD HH:mm:ss')}}
        <span>3次浏览</span>
      </p>
    </div>
    <div class="content">
      {{newsDate.body}}
      <img src="../../static/imgs/n1.jpg" alt="我是图片，啦啦啦~">
    </div>
  </div>
</template>

<script>
  import common from '../kits/common.js';
  export default {
    data() {
      return {
        newsId:0,
        newsDate:{},
        addTime:0
      }
    },
    mounted(){
      this.newsId = this.$route.query.newsId;
      this.getDetail();
      setInterval(this.getAddTime,1000);
    },
    components: {},
    methods: {
      //获取详情信息
      getDetail(){
        let url = common.apidomain+"/posts/1";

        let that = this;
        this.axios.get(url).then(function (response) {
          console.log(response);
          if(response.data != "" || response.data != "undefined"){
            that.newsDate = response.data;
          }else{
            Toast('暂无数据');
            return;
          }
        }).catch(function (error) {
          console.log(error);
        });
      },

      //获取本地时间
      getAddTime(){
        this.addTime = new Date();
      },
    }
  }
</script>

<style scoped="scoped">
  .title,.content{
    padding: 10px;
    text-align: left;
  }
  .title h4{
    color: #0094ff;
    line-height: 30px;
    font-size: 20px;
  }
  .title p{
    color: rgba(0,0,0,.5);
    margin-bottom: 0;
  }
  .title p span{
    padding-left: 20px;
  }
  .content{
    font-size: 18px;
    line-height: 30px;
  }
  .content img{
    margin-top: 20px;
    width: 100%;
  }
</style>
