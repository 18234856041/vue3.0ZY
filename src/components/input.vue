<template>
  <div class="wb-input">
     <div>
         <label class="form-label">{{sonData.label}}：</label>
        <div>
          <input 
          :value="modelValue" 
          :type="sonData.type" 
          @input="updateValue" 
          @blur="iptBlurFn"
          v-bind="$attrs"
          />
        </div>
        <p v-show="iserror">{{message}}</p>
      </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'wb-input',
  inheritAttrs: false,
  props: {
    // 值
    sonData: {
      type: Object
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
    return{
      ...toRefs(data)
    }
  }
}
</script>

<style>
  p{
    color: red;
  }
</style>