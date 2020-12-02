<template>
  <div class="messages" :class="type">
    <i :class="['iconfont',type]">{{type=='error'?'&#xe635;':type=='success'?'&#xe668;':''}}</i>
    <span>{{text}}</span>
  </div>
</template>

<script>
  export default {
  name: 'wb-message',
  props:{
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'info'
    }
  }
}
</script>

<style>
  .messages{
    width: 380px;
    padding: 5px 10px;
    box-sizing: border-box;
    position: fixed;
    top: 50px;
    left: calc(50% - 190px);
    z-index: 11111;
    line-height: 25px;
    vertical-align: middle;
    background: #edf2fc;
    border: 1px solid #e1f3d8;
    color: #777;
  }
  .messages i{
    margin-right: 10px;
  }
  .messages.success{
    background: #f0f9eb;
    border: 1px solid #ebeef5;
  }
  .messages.success i, .messages.success span{
    color: #67c23a;
  }
  .messages.error{
    background: #fef0f0;;
    border: 1px solid #fde2e2;
  }
  .messages.error i, .messages.error span{
    color: #f56c6c;
  }
  
</style>