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
        if(props.rules){
          let isrules = props.rules.every(item => {
            let flang = true
            if(item.required){
              flang = (props.modelValue.trim() !== '')
              if(!flang){
                data.message = item.message
              }
            }
            return flang
          })
          console.log(isrules)
          data.iserror = !isrules
        }
      },
      // 值发生改变的时候触发（双向绑定）
      updateValue (e) {
        emit('update:modelValue',e.target.value)
      }
    })
    // 加载时
    onMounted(()=>{
      
    })
    return{
      ...toRefs(data)
    }
  }
}
</script>

<style scoped>
  
  input{
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }
  input:focus{
    border-color: #409eff;
  }
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