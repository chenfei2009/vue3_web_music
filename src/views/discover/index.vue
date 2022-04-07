<template>
  <div class="discover-container">
    <!-- 轮播图模块 -->
    <DisSwiper :banners="banners"/>
    <!-- /轮播图模块 -->
    <!-- 导航模块 -->
    <DisNav />
  </div>
</template>

<script>
import DisSwiper from './childComps/DisSwiper.vue'
import DisNav from './childComps/DisNav.vue'

import {
  _getBanner
} from '@/network/discover.js'

export default {
  name: 'DiscoverIndex',
  components: {
    DisSwiper,
    DisNav
  },
  data () {
    return {
      banners: []
    }
  },
  mounted () {
    _getBanner().then(res => {
      this.banners = res.data.banners
    }).catch(err => console.log(err))
  },
  setup () {
    return {}
  }
}
</script>
