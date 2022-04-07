<template>
  <ul class="dis-nav-list">
    <li v-for="(item, index) in navList"
      :key="index"
      class="nav-item">
      <i class="iconfont" :class="item.icon"></i>
      <span>{{item.text}}</span>
    </li>
  </ul>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'DisNav',
  props: {},
  data () {
    return {
      navList: [
        { icon: 'icon-Calendar', text: '每日推荐' },
        { icon: 'icon-radio', text: '私人FM' },
        { icon: 'icon-radio', text: '歌单' },
        { icon: 'icon-paixingbang', text: '排行榜' }
      ]
    }
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
.dis-nav-list {
  display: flex;
  padding: 10px 0;
  .nav-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
