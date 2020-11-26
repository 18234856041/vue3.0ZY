<template>
  <div class="container">
    <div class="row">
      <div class="col-3" v-for="item in list" :key="item.id">
        <div class="card text-center">
          <img :src="item.src" class="w-50 m-auto" alt="" />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text text-left">
              {{ item.content }}
            </p>
            <button class="btn btn-primary">进入专栏</button>
          </div>
        </div>
      </div>
    </div>
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

<style>
</style>