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
      <div class="swiper-pagination pagination-home px-3" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons mt-4 bg-white pt-4 text-center">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of icons -->
    <div class="card mt-4 bg-white px-4">
      <div class="card-head d-flex py-4 ">
        <i class="iconfont icon-menu-1"></i>
        <div class="fs-xl flex-1 px-2">新闻资讯</div>
        <i class="iconfont icon-menu"></i>
      </div>
      <div class="card-body">
        <div class="nav jc-between fs-lg">
          <div class="nav-item active">热门</div>
          <div class="nav-item">新闻</div>
          <div class="nav-item">公告</div>
          <div class="nav-item">活动</div>
          <div class="nav-item">赛事</div>
        </div>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
        <p>sss</p>
      </div>
    </div>
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
@import "../style/variable";
.pagination-home {
  text-align: right;
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background-color: map-get($map: $colors, $key: 'white');

    &.swiper-pagination-bullet-active {
      background-color: map-get($map: $colors, $key: 'bar');
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border: none;
    }
  }
}
</style>