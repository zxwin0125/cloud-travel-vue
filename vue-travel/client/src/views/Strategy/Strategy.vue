<template>
  <div class="strategy">
    <!-- 轮播图 -->
    <Swiper :imgs="imgs" />
    <el-row>
      <!-- 攻略导航 -->
      <StrategyNav />
    </el-row>
    <!-- 发布攻略按钮1 md以下 -->
    <StrategyPuba />
    <!-- 攻略首页内容 -->

  </div>
</template>
<script>
// 导入接口API
import { getMainStrategy, getHotStrategy } from "@/api/getData.js";

import Swiper from "../../components/Swiper";
import StrategyNav from "../Strategy/components/StrategyNav";
import StrategyPuba from "../Strategy/components/StrategyPuba";
export default {
  name: "Strategy",
  components: {
    Swiper,
    StrategyNav,
    StrategyPuba,
  },
  data() {
    return {
      arts: [],
      currentPage: 1,
      hots: [],
      // 图片地址数组
      imgs: [
        require("../../assets/img/Swiper/swiper01.png"),
        require("../../assets/img/Swiper/swiper02.png"),
        require("../../assets/img/Swiper/swiper03.png"),
        require("../../assets/img/Swiper/swiper04.png"),
        require("../../assets/img/Swiper/swiper05.png"),
      ],

      // 图片父容器高度
      bannerHeight: 1000,
      // 浏览器宽度
      screenWidth: 0,

      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,

      allPage: 4,
    };
  },
  computed: {
    resultPage() {
      const page = [];
      for (
        let i = (this.currentPage - 1) * this.allPage;
        i < this.currentPage * this.allPage;
        i++
      ) {
        page.push(this.arts[i]);
      }
      return page;
    },
  },
  created() {},
  mounted() {
    //当页面渲染完成时调用方法获取数据
    this.getMainData();
    this.getHotData();
  },
  methods: {
    // 异步调用 strategy 接口
    // 获取 main 数据
    async getMainData() {
      // // 捕获异常
      try {
        // 等待异步方法执行完成
        const result = await getMainStrategy();
        console.log("攻略 Main 数据", result);
        this.arts = result.data.data;
      } catch (err) {
        console.log("err", err);
      }
    },

    async getHotData() {
      // 捕获异常
      try {
        // 等待异步方法执行完成
        const result = await getHotStrategy();
        console.log("攻略 Hot 数据", result);
        // this.Tourlist = result.data.data;
      } catch (err) {
        console.log("err", err);
      }
    },




    // handleSizeChange(val) {
    //   this.allPage = val; // 每页
    // },
    // handleCurrentChange(val) {
    //   this.currentPage = val; // 当前页
    // },
    // setSize: function () {
    //   // 通过浏览器宽度(图片宽度)计算高度
    //   this.bannerHeight = (400 / 1920) * this.screenWidth;
    // },
    // publishStr() {
    //   this.$router.push("/strategy_add");
    // },
    // mounted() {
    //   // 首次加载时,需要调用一次
    //   this.screenWidth = window.innerWidth;
    //   this.setSize();
    //   // 窗口大小发生改变时,调用一次
    //   window.onresize = () => {
    //     this.screenWidth = window.innerWidth;
    //     this.setSize();
    //   };
    // },
    // details(index) {
    //   this.$router.push({
    //     name: "stdetails",
    //     params: { strategy_id: index },
    //   });
    //   console.log(index);
    // },
  }
};
</script>

<style scoped>
.strategy {
  background-image: url(../../assets/img/Strategy/str_bg.jpg);
  background-size: auto;
}

.container {
  margin: 50px;
  line-height: 1.5;
}

/* 面包屑 */

/* 轮播图 */
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

img {
  /*设置图片宽度和浏览器宽度一致*/
  width: 100%;
  height: inherit;
}

.wrapper_down {
  margin: 20px;
}

.router-link-active {
  text-decoration: none;
}

/* 攻略概览 */
.wrapper_down .cont_main {
  margin-top: 10px;
  background: #fff;
  transition: 0.3s all ease;
}

.wrapper_down .art_content:hover {
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
}

.wrapper_down .art_content {
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  width: 260px;
  height: 380px;
  float: right;
  box-shadow: 0 2px 5px -2px rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: 0.3s all ease;
  margin-bottom: 1.5rem !important;
  display: block !important;
  margin: 30px;
  /* margin-left: 50px; */
}

.wrapper_down .art_img {
  width: 260px;
  /* width: 30%; */

  height: 180px;
  overflow: hidden;
}

.wrapper_down .art_img img {
  height: 100%;
  width: 100%;
  transition: 4s linear;
}

.art_img img:hover {
  transform: scale(1.4);
  cursor: pointer;
}

.wrapper_down .art_list {
  padding: 10px 30px;
}

.wrapper_down .art_list h4 {
  font-weight: bolder;
  font-size: 20px;
  color: #5bc3cc;
}

.wrapper_down .art_list .info {
  /* text-indent: 2em; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.wrapper_down .art_list p {
  float: right;
}

/* 侧边栏 */
.wrapper_right {
  float: left;
  padding-right: 20px;
  margin-right: 50px;
}

.side-box {
  padding: 30px;
  background: #fff;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  /* width:80% ; */
}

.sidebar-upload {
  padding: 30px;
  background: #fff;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  text-align: center;
}

.side-box .heading,
.sidebar-upload .heading {
  font-size: 18px;
  margin-bottom: 30px;
  font-family: "Mukta Mahee", arial, sans-serif;
}

/* 热门攻略 */
.side-box .hot_strategy {
  height: 440px;
  overflow: hidden;
}

.post-list li {
  margin-bottom: 20px;
  height: 100px;
  border-bottom: 1px solid #dfdfdf;
}

.post-list .hot_img {
  width: 100px;
  height: 70px;
  float: left;
  margin-right: 15px;
  margin-top: 5px;
}

.post-list .hot_img img {
  width: 100%;
  height: 100%;
  background: #fff;
  border: 1px dotted #919191;
  vertical-align: middle;
}

.post-list p {
  /* text-indent: 2em; */
  display: -webkit-box;
  color: #000;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

.glyphicon-eye-open {
  color: #ccc;
  cursor: pointer;
}

.post-list li a > div {
  margin-top: -10px;
}

.post-list li a .meta {
  font-size: 16px;
  color: #adb5bd;
  float: right;
}

.post-list li a .image {
  width: 150px;
}

.post-list li a h3 {
  font-size: 16px;
  font-family: "Playfair+Display", times, serif;
  color: #5bc3cc;
  margin-top: 5px;
}

.post-list li:last-child {
  margin-bottom: 0;
}

.sidebar-upload .icon-search {
  position: absolute;
  top: 50%;
  left: 15px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.sidebar-upload .upload {
  border-color: #dee2e6;
  padding-left: 40px;
  border-radius: 0px;
}

.contact-section .contact-info p {
  color: white;
  font-family: "Playfair+Display", times, serif;
  font-size: 30px;
  margin-bottom: 30px;
}

.contact-section .contact-info p .d-block {
  font-size: 14px;
  letter-spacing: 0.2em;
  font-family: "Mukta Mahee", arial, sans-serif;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}

.post-categories li {
  display: block;
}

.post-categories li a {
  display: block;
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #e9ecef;
}

.post-categories li a .count {
  position: absolute;
  top: 0;
  right: 0;
  color: #6c757d;
}

.strategy {
  background-image: url(../../assets/img/Strategy/str_bg.jpg);
  background-size: auto;
}

.container {
  margin: 50px;
  line-height: 1.5;
}

/* 面包屑 */

/* 轮播图 */
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

img {
  /*设置图片宽度和浏览器宽度一致*/
  width: 100%;
  height: inherit;
}

.wrapper_down {
  margin: 20px;
}

/* 攻略概览 */
.wrapper_down .cont_main {
  margin-top: 10px;
  background: #fff;
  transition: 0.3s all ease;
}

.wrapper_down .art_content:hover {
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
}

.wrapper_down .art_content {
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  width: 260px;
  height: 380px;
  float: right;
  box-shadow: 0 2px 5px -2px rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: 0.3s all ease;
  margin-bottom: 1.5rem !important;
  display: block !important;
  margin: 30px;
  /* margin-left: 50px; */
}

.wrapper_down .art_img {
  width: 260px;
  /* width: 30%; */

  height: 180px;
  overflow: hidden;
}

.wrapper_down .art_img img {
  height: 100%;
  width: 100%;
  transition: 4s linear;
}

.art_img img:hover {
  transform: scale(1.4);
  cursor: pointer;
}

.wrapper_down .art_list {
  padding: 10px 30px;
}

.wrapper_down .art_list h4 {
  font-weight: bolder;
  font-size: 20px;
  color: #5bc3cc;
}

.wrapper_down .art_list .info {
  /* text-indent: 2em; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.wrapper_down .art_list p {
  float: right;
}

/* 侧边栏 */
.wrapper_right {
  float: left;
  padding-right: 20px;
  margin-right: 50px;
}

.side-box {
  padding: 30px;
  background: #fff;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  /* width:80% ; */
}

.sidebar-upload {
  padding: 30px;
  background: #fff;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  text-align: center;
}

.side-box .heading,
.sidebar-upload .heading {
  font-size: 18px;
  margin-bottom: 30px;
  font-family: "Mukta Mahee", arial, sans-serif;
}

/* 热门攻略 */
.side-box .hot_strategy {
  height: 440px;
  overflow: hidden;
}

.post-list li {
  margin-bottom: 20px;
  height: 100px;
  border-bottom: 1px solid #dfdfdf;
}

.post-list .hot_img {
  width: 100px;
  height: 70px;
  float: left;
  margin-right: 15px;
}

.post-list .hot_img img {
  width: 100%;
  height: 100%;
  background: #fff;
  border: 1px dotted #919191;
  vertical-align: middle;
}

.post-list p {
  /* text-indent: 2em; */
  display: -webkit-box;
  color: #000;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

.glyphicon-eye-open {
  color: #ccc;
  cursor: pointer;
}

.post-list li a > div {
  margin-top: -10px;
}

.post-list li a .meta {
  font-size: 16px;
  color: #adb5bd;
  float: right;
  margin-top: 30px;
}

.post-list li a .image {
  width: 150px;
}

.post-list li a h3 {
  font-size: 16px;
  font-family: "Playfair+Display", times, serif;
  color: #5bc3cc;
  /* float: right; */
}

.post-list li:last-child {
  margin-bottom: 0;
}

.sidebar-upload .icon-search {
  position: absolute;
  top: 50%;
  left: 15px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.sidebar-upload .upload {
  border-color: #dee2e6;
  padding-left: 40px;
  border-radius: 0px;
}

.contact-section .contact-info p {
  color: white;
  font-family: "Playfair+Display", times, serif;
  font-size: 30px;
  margin-bottom: 30px;
}

.contact-section .contact-info p .d-block {
  font-size: 14px;
  letter-spacing: 0.2em;
  font-family: "Mukta Mahee", arial, sans-serif;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}

.post-categories li {
  display: block;
}

.post-categories li a {
  display: block;
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #e9ecef;
}

.post-categories li a .count {
  position: absolute;
  top: 0;
  right: 0;
  color: #6c757d;
}

/* 页面左下翻页 */
.custom-pagination .page-item {
  text-align: center;
  border: none;
  background: none;
  border-radius: 50% !important;
  width: 50px;
  height: 50px;
  padding: 0;
  line-height: 50px;
  margin-right: 10px;
  margin-bottom: 10px;
}

li {
  display: inline-block;
}

.custom-pagination .page-item.active {
  background: #5cb3cc;
  -webkit-box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2);
}

/* 页面左下翻页 */
.custom-pagination .page-item {
  text-align: center;
  border: none;
  background: none;
  border-radius: 50% !important;
  width: 50px;
  height: 50px;
  padding: 0;
  line-height: 50px;
  margin-right: 10px;
  margin-bottom: 10px;
}

li {
  display: inline-block;
}

.custom-pagination .page-item.active {
  background: #5cb3cc;
  -webkit-box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2);
}
</style>