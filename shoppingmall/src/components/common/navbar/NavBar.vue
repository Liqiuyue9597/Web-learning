<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

}
</script>

<style>
.nav-bar{
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
  box-shadow: 0 3px 3px rgba(0, 0, 0, .3)
}
.left, .right{
  width: 60px;
}
.center{
  flex: 1;
  /* background-color: #000; */
}
</style>