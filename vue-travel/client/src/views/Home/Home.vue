<template>
  <section class="home">
    <!-- 轮播图开始 -->
    <Swiper :imgs="imgs" :height="imgHeight" />

    <!-- 优势介绍 -->
    <HomeAdv />

    <!-- 热门景点 -->
    <HomeSpots :SpotsData="Spots" />




  </section>
</template>

<script>
  // 导入公共组件模块
  import Swiper from "components/Swiper"


  // 导入子组件
  import HomeAdv from "../Home/components/HomeAdv"
  import HomeSpots from "../Home/components/HomeSpots/HomeSpots"

  export default {
    name: 'Home',
    components: {
      // 公共组件
      Swiper,


      // 子组件
      HomeAdv,
      HomeSpots,
    },
    data() {
      return {
        imgs: [ // 轮播图片地址
          require('assets/img/Swiper/swiper01.png'),
          require('assets/img/Swiper/swiper02.png'),
          require('assets/img/Swiper/swiper03.png'),
          require('assets/img/Swiper/swiper04.png'),
          require('assets/img/Swiper/swiper05.png')
        ],
        imgHeight: "600px", // 轮播图高度
        Spots: [], // 热门景点数据
      }
    },
    computed: {
      
    },
    create() {
      // 初始化方法
      this.initData()
    },
    methods: {
      initData() {
        
      }
    }
  }
</script>
<style>

</style>