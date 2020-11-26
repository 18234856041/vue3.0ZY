<template>
  <div class="navbox">
    <div class="left">
      <slot name="logo"></slot>
    </div>
    <div class="right">
      <slot name="user"></slot>
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