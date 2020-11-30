<template>
  <div class="wb-input">
     <div class="formitem">
        <label class="form-label">{{label}}:</label>
        <div class="itemContent">
          <input 
          :value="modelValue"  
          @input="updateValue" 
          @blur="iptBlurFn"
          v-bind="$attrs"
          />
          <p class="message" v-show="iserror">{{message}}</p>
        </div>
      </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import { emitter } from '@/components/form'
export default {
  name: 'wb-input',
  inheritAttrs: false,
  props: {
    // 字段名
    label: {
      type: String
    },
    // 绑定的值
    modelValue: {
      type: String
    },
    // 验证值
    rules:{
      type: Array
    }
  },
  setup(props,{ emit }){
    const data = reactive({
      iserror: false,
      message: '',
      // 失去焦点触发（校验）
      iptBlurFn() {
        let flang = true
        if(props.rules){
          let isrules = props.rules.every(item => {
            // 判断是否为空
            if(item.required){
              flang = (props.modelValue.trim() !== '')
              if(!flang){
                data.message = item.message
              }
            }
            // 判断正则是否通过
            if(item.pattern){
              console.log(1)
              flang = (item.pattern.test(props.modelValue))
              if(!flang){
                data.message = item.message
              }
            }
            // 自定义校验
             if(item.validator){
                item.validator(props.modelValue,function(errVal){
                  // 判断回调是否有值
                  flang = false
                  console.log(errVal)
                  if(errVal){
                    if(!flang){
                      data.message = errVal
                    }
                  }else{
                    console.error('回调请传入错误信息！')
                  }
               })
            }
            return flang
          })
          flang = isrules
          data.iserror = !isrules
        }
        return flang
      },
      // 清空input值（重置）
      iptClearFn() {
        emit('update:modelValue','')
      },
      // 值发生改变的时候触发（双向绑定）
      updateValue (e) {
        emit('update:modelValue',e.target.value)
      }
    })
    // 加载时
    onMounted(()=>{
      // 发射给事件监听
      emitter.emit('rulesItem',data.iptBlurFn);
      emitter.emit('clearItem',data.iptClearFn);
    })
    return{
      ...toRefs(data)
    }
  }
}
</script>

<style scoped>
  label{
    width: 80px;
    padding: 0 10px;
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    box-sizing: border-box;
  }
  .formitem{
    margin-bottom: 20px;
  }
  .itemContent{
    position: relative;
    line-height: 40px;
    position: relative;
    font-size: 14px;
    margin-left: 80px;
  }
  .message{
    position: absolute;
    top: 100%;
    left: 0;
    color: #f56c6c;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
  }
</style>