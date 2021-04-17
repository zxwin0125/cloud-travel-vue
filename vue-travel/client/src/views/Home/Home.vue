<template>
  <section class="home">
    <!-- 轮播图开始 -->
    <Swiper :imgs="imgs" :height="imgHeight" />

    <!-- 优势介绍 -->
    <HomeAdv />




  </section>
</template>

<script>
  // 导入公共组件模块
  import Swiper from "components/Swiper"


  // 导入子组件
  import HomeAdv from "../Home/components/HomeAdv"

  export default {
    name: 'Home',
    components: {
      // 公共组件
      Swiper,


      // 子组件
      HomeAdv
    },
    data() {
      return {
        // 图片地址数组
        imgs: [
          require('assets/img/Swiper/swiper01.png'),
          require('assets/img/Swiper/swiper02.png'),
          require('assets/img/Swiper/swiper03.png'),
          require('assets/img/Swiper/swiper04.png'),
          require('assets/img/Swiper/swiper05.png')
        ],
        imgHeight: "600px"
      }
    },
    computed: {
      
    }
  }
</script>
<style>

</style>