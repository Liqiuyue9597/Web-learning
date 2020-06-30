<template>
  <div class="tab-control">
    <div
      v-for="(title,index) in titles"
      :key="index"
      :class="{active: index === currentIndex}"
      @click="tabClick(index)"
    >
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
      // 将tabClick事件从内往外传用$emit()，从外往内传参数用props
      this.$emit('tabClick', index)
    }
  },
}
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  justify-content: space-around;
  height: 40px;
  line-height: 40px;
  background-color: #ffffff;
  font-size: 14px;
}
.tab-control span {
  padding: 4px 2px;
}
.active {
  color: var(---color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-tint);
}
</style>