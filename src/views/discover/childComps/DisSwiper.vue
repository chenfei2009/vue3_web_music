<template>
    <swiper :autoplay="swiperOptions.autoplay"
      :loop="swiperOptions.loop"
      :speed="swiperOptions.speed"
      :pagination="swiperOptions.pagination">
      <swiper-slide
        v-for="(item, index) in banners"
        :key="index">
        <img class="slide-img" :src="item.imageUrl" alt="">
      </swiper-slide>
    </swiper>
</template>

<script>
import { reactive } from 'vue'

// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

export default {
  name: 'DisSwiper',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    banners: Array
  },
  setup () {
    // const onSwiper = (swiper) => console.log(swiper)
    // const onSlideChange = () => console.log('slide change')
    // return {
    //   onSwiper,
    //   onSlideChange,
    //   modules: [Navigation, Pagination, Scrollbar, A11y]
    // }
    // swiper 相关配置属性放在 swiperOptions 里
    const swiperOptions = reactive({
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      loop: true,
      speed: 500,
      pagination: {
        clickable: true
      }
    })
    // 将 swiperOptions 返回给模板中的 swiper 组件使用
    return {
      swiperOptions
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-slide {
  width: 100%;
  // height: 10rem;
  background-color: #ccc;
  // border-radius: 0.3rem;
  // overflow: hidden;
}
.slide-img {
  width: 100%;
  border-radius: 0.3rem;
  overflow: hidden;
}
</style>
