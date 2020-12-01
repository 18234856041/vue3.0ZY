import { createStore } from 'vuex'

// 引入Vuex 拆分文件
import state from "./state/state";
import mutations from "./mutations/mutations";
import actions from "./actions/actions";
import getters from "./getters/getters";

let store = {
  state,
  mutations,
  actions,
  getters
}

/**
 * 全局监听，页面刷新的时候将store里state的值存到sessionStorage中，然后从sessionStorage中获取，再赋值给store。
 * 然后再把session里面存的删除即可，相当于中间件的作用。
 */
//在页面刷新时将vuex里的信息保存到sessionStorage里
window.addEventListener("beforeunload", () => {
  // console.log('刷新前')
  sessionStorage.setItem("store",JSON.stringify(store.state))
});
//在页面加载时读取sessionStorage里的状态信息
if (sessionStorage.getItem("store")) {
  // console.log('刷新后')
  store.state = JSON.parse(sessionStorage.getItem("store"))
  sessionStorage.removeItem("store")
}

// 导出
export default createStore(store)
