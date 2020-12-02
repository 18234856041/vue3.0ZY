<template>
  <teleport to="#loading">
    <div class="loading" :style="style || 'background: rgba(255, 255, 255, 0.8)'">
      <div class="content">
        <i class="iconfont">&#xe699;</i>
        <p>{{text || '加载中…'}}</p>
      </div>
    </div>
  </teleport>
</template>

<script>
import { onUnmounted, reactive, toRefs } from 'vue'
export default {
  name: 'wb-loading',
  props:{
    style: {
      type: String
    },
    text: {
      type: String
    }
  },
  setup(){
    // 创建一个loading瞬移节点
    const loadingEl = document.createElement('div')
    loadingEl.id = 'loading'
    console.log(loadingEl)
    document.body.appendChild(loadingEl)
    const data = reactive({
    })
    onUnmounted(()=>{
      document.body.removeChild(loadingEl)
    })
    return{
      ...toRefs(data)
    }
  }
}
</script>

<style>
  .loading{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
  }
  .loading .content{
    position:absolute;
    top: 50%;
    left: 0;
    right:0;
    bottom:0;
    margin: auto;
    text-align: center;
    color: #409eff;
  }
  .loading .content i{
    font-size: 30px;
    display: block;
    animation:rotating  1.5s linear infinite;
  }
  .loading .content p{
    margin-top: 10px;
  }
</style>