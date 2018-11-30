<template>
  <div>
    <div id="postcomment">
      <h3>提交评论</h3>
      <p></p>
      <textarea name="" id="" cols="30" rows="3" placeholder="请输入您要评论的内容"></textarea>
      <mt-button type="primary" size="large">提交</mt-button>
    </div>
  </div>
</template>

<script>
  import common from '../../kits/common.js';
  export default {
    props:{
      commData:{
        required: true
      }
    },
    data() {
        return {}
    },
    components: {},
    methods: {

    }
  }
</script>

<style scoped="scoped">
  #postcomment{
    padding: 10px;
    text-align: left;
  }
  #postcomment h3{
    padding-bottom: 10px;
  }
  #postcomment p{
    height: 1px;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,.2);
  }
  #postcomment textarea{
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 14px;
  }
</style>
