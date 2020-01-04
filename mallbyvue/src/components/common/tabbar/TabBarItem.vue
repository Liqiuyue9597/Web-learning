<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot  name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text" ></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    // 从实例处获取传入的数据
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      // indexOf--String和Array对象的方法
      // 返回某个指定的字符串值在字符串中首次出现的位置，未含有则返回数字 -1
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
    this.$router.replace(this.path)
   } 
  }
}
</script>

<style>
.tab-bar-item {
  height: 49px;
  flex: 1;
  text-align: center; 
}
.tab-bar-item img{
  width: 20px;
  height: 20px;
  vertical-align: middle;
  padding: 3px 0;
}
</style>