<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="index" v-for="(banner,index) in banners">
        <a :href="banner.link"><img :src="banner.image" :style="{height:'200px',width:'100%'}"></a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
 
<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
  export default {
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperSlide
    },
    data () {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: true,
          loop: true
        }
      }
    }
  }
</script> 
<style lang="css">
  /* .swiper-slide a img {
    
  } */
</style>