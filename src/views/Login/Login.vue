<template>
  <div class="login">
    <div class="loginBox">
      <wb-input
        :sonData="sonData"
        v-model="sonData.value"
        :rules="rules"
        placeholder="请输入账号"
      ></wb-input>
      <div>{{ sonData.value }}</div>
      <button>登录</button>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
export default {
  name: "login",
  setup() {
    const data = reactive({
      sonData: {
        type: "text",
        label: "账号",
        value: "11",
      },
      rules: [{ required: true, message: "请输入账号！", trigger: "blur" }],
    });
    onMounted(function () {
      var arr = [
        { num: 1, val: "ceshi", flag: "aa" },
        { num: 2, val: "ceshi2", flag: "aa2" },
      ];

      let newArr =arr.filter(item=>{
        return item.num == 2
      })
      console.log(newArr)
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginBox {
  border: 1px solid #cccccc;
  padding: 10px;
}
</style>