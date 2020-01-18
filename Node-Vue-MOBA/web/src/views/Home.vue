<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/image/League Of Kings/bacf85a48333bb08c0e44c0ae4a8f6d3.jpeg"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/image/League Of Kings/8887023cd8137a968bc1b3ac23093573.jpeg"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/image/League Of Kings/51d934c4f56b17de4f0e4c9c5125d539.jpeg"
        />
      </swiper-slide>
      <div class="swiper-pagination pagination-home" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.pagination-home'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.pagination-home {
  text-align: right;
  .swiper-pagination-bullet {
    background-color: #fff;
  }
  &.swiper-pagination-bullet-active {
    background-color: #4b67af;
  }
}
</style>