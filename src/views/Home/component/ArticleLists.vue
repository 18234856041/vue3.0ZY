<template>
  <div class="ArticleLists">
    <ul>
      <li  v-for="item in list" :key="item.id">
        <img :src="item.src" class="w-50 m-auto" alt="" />
          <div class="card-body">
            <h4 class="card-title">{{ item.title }}</h4>
            <p class="card-text text-left">
              {{ item.content }}
            </p>
            <button class="btn btn-primary">进入专栏</button>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "ArticleLists",
  props: {
    sonData: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const list = computed(()=>{
      return props.sonData.map((item)=>{
        if(!item.src){
          item.src = require('@/assets/img/moren.png')
        }
        return item
      })
    })
    return{
      list
    }
  }
};
</script>

<style scoped>
.ArticleLists{
  width: 100%;
  margin-top: 50px;
}
.ArticleLists ul{
  width: 100%;
  display: flex;
  justify-content: space-between;;
}
.ArticleLists li{
  width: 23%;
  box-shadow: 0 0 12px #ccc;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
}
.ArticleLists li h4{
  line-height: 40px;
}
.ArticleLists li p{
  line-height: 25px;
}
.ArticleLists li .btn{
  display: block;
  margin: 0 auto;
  margin-top: 20px;
}
.ArticleLists li img{
  width: 100%;
}
</style>