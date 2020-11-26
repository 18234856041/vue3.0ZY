<template>
  <div class="login">
    <div class="loginBox">
      <p class="title">{{ title }}</p>
      <div class="w90">
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
      </div>
      <div class="btnBox">
        <button class="btn-primary">登 录</button>
      </div>
      
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
export default {
  name: "login",
  setup() {
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
          { required: true, message: "请输入账号！", trigger: "blur" }
        ],
        pass:[
          { required: true, message: "请输入密码！", trigger: "blur" }
        ],
      },
    });
    onMounted(function () {
      var arr = [
        { num: 1, val: "ceshi", flag: "aa" },
        { num: 2, val: "ceshi2", flag: "aa2" },
      ];

      let newArr = arr.filter((item) => {
        return item.num == 2;
      });
      console.log(newArr);
    });
    return {
      ...toRefs(data),
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