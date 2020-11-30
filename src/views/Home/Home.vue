<template>
  <div class="home">
    <wb-nav>
      <template #logo>
        <div class="logo">
          <img :src="logo" alt="" >
          <span>折叶</span>
        </div>
      </template>
       <template #user>
        <div class="user">
          <label>我的</label>
          <i class="iconfont" :class="showTogo?'active':''" @click="togoClickFn">&#xe600;</i>
          <ul class="togo" v-show="showTogo">
            <li v-for="item in userOptions" :key="item.id"  @click="optionsClickFn(item.name)">{{item.name}}</li>
          </ul>
        </div>
      </template>
    </wb-nav>
    <ArticleLists :sonData='list'></ArticleLists>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import ArticleLists from "./component/ArticleLists";
export default {
  name: "Home",
  components: {
    ArticleLists,
  },
  setup() {
    const data = reactive({
      logo: require('@/assets/img/logo.png'),
      showTogo: false,
      userOptions: [
        {id: 0, name: '我的'},
        {id: 1, name: '退出'},
      ],
      list: [
        {
          id: 1,
          src: require('@/assets/img/logo.png'),
          title: "test1的专栏",
          content: "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
        },
        {
          id: 2,
          src: require('@/assets/img/logo.png'),
          title: "test2的专栏",
          content: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧", 
        },
        {
          id: 3,
          src: require('@/assets/img/logo.png'),
          title: "test3的专栏",
          content: "这是的test3专栏，有一段非常有意思的简介，可以更新一下欧", 
        },
         {
          id: 3,
          src: '',
          title: "test4的专栏",
          content: "这是的test4专栏，有一段非常有意思的简介，可以更新一下欧", 
        },
      ],
      togoClickFn(){
        data.showTogo = !data.showTogo
      },
      optionsClickFn(val) {
        console.log(val)
        data.showTogo = !data.showTogo
      }
    });

    return{
      ...toRefs(data)
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
