import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)


/**
 * 引入全局样式
 */
// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/base.css'

/**
 * 引入全局组件
 * */
import { InstallAll } from './components'
app.use(InstallAll)



app.use(store).use(router).mount('#app')
