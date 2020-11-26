<template>
  <div class="home">
    <wb-nav>
      <template #logo>
        
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
    });

    return{
      ...toRefs(data)
    }
  },
};
</script>
