<template>
  <div class="navbox bg-primary">
    <div class="nav">
      <div class="left">
        <slot name="logo"></slot>
      </div>
      <div class="right">
        <slot name="user"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wbNav",
};
</script>

<style scoped>
.navbox {
  width: 100%;
}
.nav{
  width: 80%;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
</style>