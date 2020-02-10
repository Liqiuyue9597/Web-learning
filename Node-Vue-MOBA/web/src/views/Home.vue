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
    <div class="nav-icons mt-4 bg-white pt-5 text-center">
      <div class="d-flex flex-wrap fs-lg">
        <div class="nav-item mb-5" v-for="n in 10" :key="n">
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
    <m-list-card icon="menu-1" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <div class="py-2" v-for="(news,i) in category.newsList" :key="i">
          <span>[{{news.categoryName}}]</span>
          <span>|</span>
          <span>{{news.title}}</span>
          <span>{{news.date}}</span>
        </div>
      </template>
    </m-list-card>

    <m-card icon="menu-1" title="英雄列表"></m-card>
    <m-card icon="menu-1" title="英雄列表"></m-card>
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
      },

      newsCats: [
        {
          name: "热门",
          // eslint-disable-next-line no-unused-vars
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: '公告',
            title: '夏日版本“稷下星之队”即将6月上线',
            date: '06/02'
          }))
        },
        {
          name: "新闻",
          // eslint-disable-next-line no-unused-vars
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: '公告',
            title: '夏日版本“稷下星之队”即将6月上线',
            date: '06/02'
          }))
        },
        {
          name: "活动",
          // eslint-disable-next-line no-unused-vars
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: '公告',
            title: '夏日版本“稷下星之队”即将6月上线',
            date: '06/02'
          }))
        },
        {
          name: "新闻",
          // eslint-disable-next-line no-unused-vars
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: '公告',
            title: '夏日版本“稷下星之队”即将6月上线',
            date: '06/02'
          }))
        },
        {
          name: "新闻",
          // eslint-disable-next-line no-unused-vars
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: '公告',
            title: '夏日版本“稷下星之队”即将6月上线',
            date: '06/02'
          }))
        }
      ]
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
    background-color: map-get($map: $colors, $key: "white");

    &.swiper-pagination-bullet-active {
      background-color: map-get($map: $colors, $key: "bar");
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