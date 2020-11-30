<template>
  <form v-bind="$attrs">
    <slot></slot>
  </form>
</template>

<script>
import { onUnmounted, reactive, toRefs } from 'vue'
import mitt from 'mitt'  // 事件监听插件 npm i mitt
 // 实例化事件监听
export const emitter = mitt()
export default {
  name: 'wb-form',
  inheritAttrs: false,
  setup() {
     
    // 创建监听
    var ArrFn = [] // 验证数组
    var ArrClear = [] // 清除数组
    emitter.on('*', (type,fn)=>{  // 监听全部
      // rulesItem 验证事件 clearItem // 清空input值
      switch(type) {
        case 'rulesItem':
            ArrFn.push(fn)
            break;
        case 'clearItem':
            ArrClear.push(fn)
            break;
        default:
            // 默认代码块
      } 
    })
    // emitter.on('rulesItem', function(rulesFn){ // 监听单个
    //   ArrFn.push(rulesFn)
    // })
    // 销毁后删除监听事件
    onUnmounted(()=>{
      emitter.all.clear()
      ArrFn = []
      ArrClear = []
    })
    

    const data = reactive({
      // 拿到验证是否通过
      validate(){
        // 循环执行数组 得到最后的验证结果
        const result = ArrFn.map(func => func()).every(result => result)
        return result
      },
      // 清除input值
      valiClear(){
        // 循环执行数组
        ArrClear.map(func => func())
      }
    })
   
    return{
      ...toRefs(data)
    }
  }
}
</script>

<style>

</style>