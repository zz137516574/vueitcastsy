<template>
  <div id="tmpl">
    <div class="imgs">
      <img src="/static/imgs/bg.png" alt="">
    </div>
    <div class="desc">
      <p class="tit">Vue测试系统：人生没有白走的路</p>
      <p>不要忘记最初时候人的本心，就是人之初那一颗与生俱来的善良、真诚、无邪、进取、宽容、博爱之心。多应用在各个方面，提醒人们去感恩...</p>
    </div>
    <ul class="advantage">
      <li>
        <p class="tit">易用</p>
        <p>已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！</p>
      </li>
      <li>
        <p class="tit">灵活</p>
        <p>不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩。</p>
      </li>
      <li>
        <p class="tit">高效</p>
        <p>20kB min+gzip 运行大小，超快虚拟DOM，最省心的优化。</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    components: {},
    methods: {}
  }
</script>

<style  scoped="scoped">
  .imgs img{
    width: 100%;
  }
  .desc{
    margin-top: -5px;
    padding: 20px 15px 15px;
    font-size: 12px;
    text-align: left;
    text-indent: 24px;
    line-height: 24px;
  }
  .desc p{
    color: #555555;
    margin-bottom: 0;
  }
  .desc .tit{
    margin-bottom: 10px;
    font-size: 14px;
    color: #16a2ff;
    font-weight: 600;
  }
  .advantage{
    margin: 0;
    padding: 0;
  }
  .advantage li{
    list-style: none;
    padding: 15px;
    text-align: left;
    text-indent: 24px;
  }
  .advantage li p{
    font-size: 12px;
    color: #555555;
    line-height: 24px;
    margin-bottom: 0;
  }
  .advantage li p.tit{
    margin-bottom: 5px;
    text-indent: 0;
    padding-left: 5px;
    border-left: 3px solid #16a2ff;
    font-size: 14px;
    color: #16a2ff;
  }
</style>
