<template>
  <section class="home">
    <!-- 轮播图开始 -->
    <Swiper :imgs="imgs" :height="imgHeight" />

    <!-- 优势介绍 -->
    <HomeAdv />

    <!-- 热门景点 -->
    <HomeTour :tourData="Tourlist" />

    <!-- 我们的服务开始 -->
    <HomeServer />

    <!-- 热门游记开始 -->
    <HomeBlog :BlogData="Bloglist" />

    <!-- 购票服务 -->
    <HomeTicket :TicketData="Packlist" />

    <!-- 联系我们开始 -->
    <HomeConnect />
  </section>
</template>

<script>
// 导入接口API
import { getTour, getBlog, getPack } from "@/api/getData.js";

// 导入公共组件模块
import Swiper from "components/Swiper";

// 导入子组件
import HomeAdv from "../Home/components/HomeAdv";
import HomeTour from "../Home/components/HomeTour/HomeTour";
import HomeServer from "../Home/components/HomeServer";
import HomeBlog from "../Home/components/HomeBlog/HomeBlog";
import HomeTicket from "../Home/components/HomeTicket/HomeTicket";
import HomeConnect from "../Home/components/HomeConnect";

export default {
  name: "Home",
  components: {
    // 公共组件
    Swiper,

    // 子组件
    HomeAdv,
    HomeTour,
    HomeServer,
    HomeBlog,
    HomeTicket,
    HomeConnect,
  },
  data() {
    return {
      imgs: [
        // 轮播图片地址
        require("assets/img/Swiper/swiper01.png"),
        require("assets/img/Swiper/swiper02.png"),
        require("assets/img/Swiper/swiper03.png"),
        require("assets/img/Swiper/swiper04.png"),
        require("assets/img/Swiper/swiper05.png"),
      ],
      imgHeight: "500px", // 轮播图高度
      Tourlist: [], // 热门景点数据
      Bloglist: [], // 精选游记数据
      Packlist: [], // 购票服务数据
    };
  },
  computed: {},
  created() {},
  mounted() {
    //当页面渲染完成时调用方法获取数据
    this.getTourData();
    this.getBlogData();
    this.getPackData();
  },
  methods: {
    // 异步调用 getIndex 接口
    // 获取首页数据
    async getTourData() {
      // 捕获异常
      try {
        // 等待异步方法执行完成
        const result = await getTour();
        console.log("首页 Tour 数据", result.data.data);
        this.Tourlist = result.data.data;
      } catch (err) {
        console.log("err", err);
      }
    },

    async getBlogData() {
      // 捕获异常
      try {
        // 等待异步方法执行完成
        const result = await getBlog();
        console.log("首页 Blog 数据", result.data.data);
        this.Bloglist = result.data.data;
      } catch (err) {
        console.log("err", err);
      }
    },

    async getPackData() {
      // 捕获异常
      try {
        // 等待异步方法执行完成
        const result = await getPack();
        console.log("首页 Pack 数据", result.data.data);
        this.Packlist = result.data.data;
      } catch (err) {
        console.log("err", err);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
</style>