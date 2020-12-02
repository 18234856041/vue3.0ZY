export default{
   // 设置名称
   setNameFn(state, value) {
    state.userName = value
  },
  // 设置登录状态
  setLoginFn(state, value){
    if(value == 1){
      state.isLogin = true
    }else{
      state.isLogin = false
    }
  },
  // 设置用户类型
  setUserTypeFn(state, value){
    state.userType = value
  },
  // 设置loading
  setLoadingFn (state, value){
    state.showLoading = value
  }
}