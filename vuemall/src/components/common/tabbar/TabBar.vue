<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
}
</script>

<style>
.tab-bar{
  display: flex;
  background-color: #ebebeb;
  /* 将tab-bar固定到底部 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
}
</style>