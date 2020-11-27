<template>
  <div class="navbox">
    <div class="left">
      <slot name="logo">111</slot>
    </div>
    <div class="right">
      <slot name="user">222</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wbNav',
}
</script>

<style scoped>
  .navbox{
    display: inline-block;
  }
</style>