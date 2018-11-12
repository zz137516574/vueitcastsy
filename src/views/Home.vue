<template>
  <div id="tmpl">
    <!-- 1.0 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in swiperList"  :key ="index">
        <img :src="item.images.medium" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 2.0 9宫格 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item,index) in menuList" :key="index">
          <router-link :to="item.url">
            <span class="mui-icon" :class="item.iconName"></span>
            <div class="mui-media-body">{{item.name}}</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="addtime">
      <!--日期格式化-->
      发表时间：{{addTime | datefmt('YYYY-MM-DD HH:mm:ss')}}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperList:[
//          {
//            url: 'http://www.itcast.cn/subject/phoneweb/index.html',
//            img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg'
//          }
        ],
        menuList:[
          {
            iconName:'mui-icon-search',
            name:'视频专区',
            url:'/video'
          },
          {
            iconName:'mui-icon-home',
            name:'新闻资讯',
            url:'/news'
          },
          {
            iconName:'mui-icon-email',
            name:'图片分享',
            url:'/photo/photolist'
          },
          {
            iconName:'mui-icon-location',
            name:'留言反馈',
            url:'/feedback'
          },
          {
            iconName:'mui-icon-chatbubble',
            name:'商品购买',
            url:'/goods'
          },
          {
            iconName:'mui-icon-info',
            name:'联系我们',
            url:'callme'
          }
        ],
        addTime:'0'
      }
    },
    created(){
      // 当页面中的data和methods对象创建完毕后，就会自动调用created
      this.getimgs();
//      this.getAddTime();
      setInterval(this.getAddTime,1000);
    },
    components: {},
    methods: {
      //实现轮播组件中的数据请求
      getimgs(){
        // 1.0 确定url(vue受同源策略影响，把get请求换成jsonp请求)
        let url = 'https://api.douban.com//v2/movie/top250';
//        let url = 'https://www.apishop.net/#/api/detail/?productID=122';
        // 2.0 调用$http.get
        this.$http.jsonp(url).then(function (response) {
          let data = response.body;
//          console.log(data);
          if(data.count != 0 || data.count != undefined){
            this.swiperList = data.subjects;
          }else{
            Toast('暂无数据');
            return;
          }
        })
      },
      //获取本地时间
      getAddTime(){
        this.addTime = new Date();
      },
    }
  }
</script>

<style scoped="scoped">
  .mint-swipe{
    height: 350px;
  }
  .mint-swipe-item{
    background-color: red;
    width: 100%;
    height: 350px;
  }
  .mint-swipe-item img{
    width: 100%;
    /*height: 100%;*/
  }
  .mui-content,.mui-grid-view.mui-grid-9{
    background-color: #ffffff;
  }
  .mui-content>.mui-table-view:first-child{
    margin-top: 0;
  }
  .mui-grid-view.mui-grid-9{
    border-top: none;
    border-left: none;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border-right: none;
    border-bottom: none;
  }
  .mui-icon-home:before,.mui-icon-email:before,.mui-icon-chatbubble:before,.mui-icon-location:before,.mui-icon-search:before,.mui-icon-info:before{
    content: '';
    width: 40px;
    height: 40px;
    display: block;
    background-repeat: round;
  }
  .mui-icon-home:before{
    background-image: url("../../static/imgs/1.png");
  }
  .mui-icon-email:before{
    background-image: url("../../static/imgs/2.png");
  }
  .mui-icon-chatbubble:before{
    background-image: url("../../static/imgs/3.png");
  }
  .mui-icon-location:before{
    background-image: url("../../static/imgs/4.png");
  }
  .mui-icon-search:before{
    background-image: url("../../static/imgs/5.png");
  }
  .mui-icon-info:before{
    background-image: url("../../static/imgs/6.png");
  }
  .addtime{
    padding: 15px 0 15px 30px;
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    text-align: left;
    font-size: 14px;
  }
</style>

