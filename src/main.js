import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)


/**
 * 引入全局样式
 */
import './assets/css/iconfont.css'
import './assets/css/base.css'

/**
 * 引入全局组件
 * */
import { InstallAll } from './components'
app.use(InstallAll)


/**
 * 引入公共方法
 */
import { ajax } from '@/hooks'
app.config.globalProperties.$ajax = ajax // 请求

// console.log(app)
app.use(store)
app.use(router)
app.mount('#app')
