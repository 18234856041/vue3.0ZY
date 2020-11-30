<template>
  <div class="login">
    <div class="loginBox">
      <p class="title">{{ title }}</p>
      
      <div class="w90">
        <wb-form ref="ruleForm">
          <wb-input
          label="账号"
          v-model="fromDta.user"
          :rules="rules.user"
          type="text"
          placeholder="请输入账号"
          ></wb-input>
          <wb-input
            label="密码"
            v-model="fromDta.pass"
            :rules="rules.pass"
            type="password"
            placeholder="请输入密码"
          ></wb-input>
        </wb-form>
      </div>
      <div class="btnBox">
        <button class="btn-primary" @click="submitFn('ruleForm')">登 录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from "vue"

export default {
  name: "login",
  setup() {
    // 密码自定义验证
    const passTest = function(value,errcallback){
            let pass = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
            if(!pass.test(value)){
              errcallback('密码错误！')
            }
          }
    const userRef = ref('ruleForm')
    // 响应式数据
    const data = reactive({
      title: "折叶",
      // 表单数据
      fromDta:{
        user:'',
        pass: ''
      },
      // 表单验证
      rules: {
        user:[
          {required: true, message: "请输入账号！", trigger: "blur" },
          {pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号！'}
        ],
        pass:[
          {required: true, message: "请输入密码！", trigger: "blur" },
          {validator: passTest, trigger: "blur" },
        ],
      },
      // 表单提交
      submitFn () {
        console.log(this)
        // 通过$refs 获取form表单方法
        let rules = this.$refs['ruleForm'].validate()
        if(rules){
          console.log('验证成功！')
          // 请求后台
          this.$ajax({
            url: "login.json",
          }).then((res) => {
            console.log(res)
            this.$router.push({name: 'Home'})
          });
        }
      },
      // 重置
      clearFn(){
        this.$refs['ruleForm'].valiClear()
      }
    });
    onMounted(()=>{
      // console.log(app)
    })
    return {
      ...toRefs(data),
      userRef
    };
  },
};
</script>

<style>
.login {
  width: 100%;
  height: 100vh;
  background: url("../../assets/img/bg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginBox {
  width: 500px;
  background: #ffffff;
  box-shadow: 0 0 15px #ccc;
  border-radius: 5px;
  padding: 20px;
}
.loginBox .title {
  font-size: 40px;
  font-weight: bold;
  color: #fe9530;
  text-align: center;
  margin: 20px 0;
}
.btnBox{
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
button{
  width: 60%;
}
</style>