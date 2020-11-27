/**
 * 全局组件引用方式
 **/
import nav from './nav.vue'
import input from './input.vue'
import form from './form.vue'

//创建在Vue 根实例中
let InstallAll = {
  install (Vue) {
    Vue.component(nav.name, nav); // 导航
    Vue.component(input.name, input); // 输入框
    Vue.component(form.name, form); // form表单
  }
}

// 导出
export {
  InstallAll
}
