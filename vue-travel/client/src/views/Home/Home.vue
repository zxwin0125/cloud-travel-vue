<template>
  <section class="home">
    <!-- 轮播图开始 -->
    <Swiper :imgs="imgs" :height="imgHeight" />
  </section>
</template>

<script>
  // 导入组件模块
  import Swiper from "../../components/Swiper"
  export default {
    name: 'Home',
    components: {
      Swiper
    },
    data() {
      return {
        // 图片地址数组
        imgs: [
          require('../../assets/img/Swiper/swiper01.png'),
          require('../../assets/img/Swiper/swiper02.png'),
          require('../../assets/img/Swiper/swiper03.png'),
          require('../../assets/img/Swiper/swiper04.png'),
          require('../../assets/img/Swiper/swiper05.png')
        ],
        imgHeight: '410px',
      }
    }
  }
</script>