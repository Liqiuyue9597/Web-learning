<template>
  <div class="recommend">
    <div v-for="(recommend,index) in recommends" :key="index" class="recommendItem">
      <a :href="recommend.link">
        <img :src="recommend.image">
        <div class="recommendTitle">{{recommend.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      defalut() {
        return []
      }
    }
  }
}
</script>

<style>
  .recommend {
    display: flex;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 8px solid #eeeeee;
  }
  .recommend .recommendItem {
    flex: 1;
  }
  .recommend .recommendItem img{
    width: 65px;
    height: 65px;
    margin: 5px 0;
  }
  .recommend .recommendItem .recommendTitle {
    font-size: 12px;
  }
</style>
