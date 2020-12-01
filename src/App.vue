<template>
  <wb-nav v-if="store.state.isLogin">
    <template #logo>
      <div class="logo">
        <img :src="logo" alt="" />
        <span>折叶</span>
      </div>
    </template>
    <template #user>
      <div class="user">
        <label>{{ userName }}</label>
        <i
          class="iconfont"
          :class="showTogo ? 'active' : ''"
          @click="togoClickFn"
          >&#xe600;</i
        >
        <ul class="togo" v-show="showTogo">
          <li
            v-for="item in userOptions"
            :key="item.id"
            @click="optionsClickFn(item.name)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </template>
  </wb-nav>
  <router-view />
</template>

<script>
import { computed, reactive, toRefs } from "vue";
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: "APP",
  setup() {
    const store = useStore()
    const router = useRouter()
    const data = reactive({
      showNav: true,
      logo: require('@/assets/img/logo.png'), // logo
      showTogo: false,  // 我的下拉菜单
      userName: computed(()=> store.state.userName ),
      userOptions: [
        {id: 1, name: '退出'},
      ],
      togoClickFn(){
        data.showTogo = !data.showTogo
      },
      optionsClickFn(val) {
        console.log(val)
        switch(val){
          case '退出':{
            store.commit('setLoginFn',0)
            router.push('/')
          }
            break;
          default:
        }
        data.showTogo = !data.showTogo
      }
    });
    return{
      ...toRefs(data),
      store
    }
  },
};
</script>

<style scoped>
.logo{
  display: flex;
  align-items: center;
}
  .logo img{
    width: 40px;
  }
  .logo span {
    line-height: 50px;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
  }
  .user{
    position: relative;
    color: #fff;
    cursor: pointer;
  }
  .user i{
    display: inline-block;
    margin-left: 10px;
    transition: all .3s;
    transform: rotate(0deg);
    
  }
  .user i.active{
    transition: transform .3s;
    transform: rotate(180deg);
  }
</style>