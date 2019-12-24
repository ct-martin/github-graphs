<template>
  <div v-swiper:mySwiper="swiperOptions">
    <div class="swiper-wrapper">
      <div v-for="banner in banners" :key="banner" class="swiper-slide">
        <img :src="banner" >
      </div>
    </div>
    <div slot="button-prev" class="swiper-button-prev"/>
    <div slot="button-next" class="swiper-button-next"/>
    <div class="swiper-pagination swiper-pagination-bullets"/>
  </div>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array,
      default: () => { return [] }
    }
  },
  data () {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
          disableOnIntegration: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>
