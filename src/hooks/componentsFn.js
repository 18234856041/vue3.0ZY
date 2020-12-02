import { createApp } from 'vue'
import Vmessage from '@/components/message.vue'


/**
 * message 函数组件
 */
export function message (text,type,time = 2000){
  // 创建到实例上
  const messageInstate = createApp(Vmessage,{
    text,
    type
  })
  // 创建一个放置组件的元素
  const el = document.createElement('div')
  document.body.appendChild(el)
  // 挂载到节点上
  messageInstate.mount(el)
  // 销毁节点
  setTimeout(function(){
    messageInstate.unmount(el)
    document.body.removeChild(el)
  },time)

}