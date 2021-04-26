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
    <div class="container" type="flex" justify="center">
      <el-row :gutter="30">
        <el-col :xs="24" :sm="18" :md="18" :lg="16">
          <div class="grid-content bg-purple-dark wrapper_down">
            <div class="art_content" v-for="art in resultPage" :key="art.strategy_id">
              <div class="art_img">
                <img :src="'http://localhost:3000/upload/' + art.strategy_path" alt="" />
              </div>
              <div class="art_list">
                <ul>
                  <li @click.prevent="details(art.strategy_id)">
                    <h4>{{art.strategy_title}}</h4>
                  </li>
                </ul>
                <p class="info">
                  {{art.strategy_content}}
                </p>
                <span>{{art.user_name}}</span> <br />
                <p class="el-icon-view viewCount">{{art.strategy_view}}</p>
              </div>
            </div>
          </div>
        </el-col>
        <!-- 侧边栏 -->
        <el-col class="hidden-sm-and-down" :md="6" :lg="8">
          <div class="grid-content bg-purple-dark">
            <div class="wrapper_right">
              <form action="#" class="sidebar-upload">
                <div style="display: inline">
                  <el-button type="success" icon="el-icon-edit" round @click.prevent="publishStr">发布攻略</el-button>
                </div>
              </form>
              <el-row>
                <el-col :span="24" class="hidden-md-and-down">
                  <div class="side-box">
                    <h2 class="heading">热门攻略</h2>
                    <ul class="post-list list-unstyled" id="hot_strategy" v-for="hot in hots" :key="hot.strategy_id">
                      <li @click.prevent="details(hot.strategy_id)">
                        <el-link :underline="false">
                          <div class="hot_img">
                            <img :src="'/api/upload/' + hot.strategy_img" alt="Image placeholder" class="img-fluid" />
                          </div>
                          <div>
                            <h3>
                              {{hot.strategy_title}}

                              <p class="art">
                                {{hot.strategy_content}}
                              </p>
                              <span class="meta el-icon-view viewCount">{{hot.strategy_views}}</span>
                            </h3>
                          </div>
                        </el-link>
                      </li>
                    </ul>
                  </div>
                </el-col>
              </el-row>

              <div class="side-box">
                <h2 class="heading">地点分类</h2>
                <ul class="post-categories list-unstyled">
                  <li>
                    <router-link :to="'/Strategy_collect'">丽江 <span class="count">(12)</span></router-link>
                  </li>
                  <li>
                    <el-link href="#">大理<span class="count">(4)</span></el-link>
                  </li>
                  <li>
                    <el-link href="#">昆明<span class="count">(23)</span></el-link>
                  </li>
                  <li>
                    <el-link href="#">西双版纳<span class="count">(8)</span></el-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="12">
          <div>
            <el-pagination 
              @size-change="handleSizeChange" 
              @current-change="handleCurrentChange"
              :current-page="currentPage1" 
              :page-sizes="[4, 8, 12]" 
              :page-size="4"
              layout="total, sizes, prev, pager, next, jumper" 
              :total="arts.length">
            </el-pagination>
          </div>
        </el-col>
      </el-row>
    </div>
    <Footer />
    
  </div>
</template>
<script>
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
        currentPage:1,
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

        allPage: 4

      };
    },
    computed: {
      resultPage(){
        const page = []
        for(let i = (this.currentPage-1)*this.allPage; i < (this.currentPage)*this.allPage; i++){
          page.push(this.arts[i])
        }
        return page
      }
    },
    created() {
      this.$axios
        .get("/api/strategy/")
        .then((res) => {
          console.log("resArt:", res);
          this.arts = res.data.data;
        })
        .catch((err) => {
          console.log("err:", err);
        });
      this.$axios
        .get("/api/strategy/hotstrategy")
        .then((res) => {
          console.log("resHot:", res);
          this.hots = res.data.data;
        })
        .catch((err) => {
          console.log("err:", err);
        });
    },
    methods: {
      handleSizeChange(val) {
        this.allPage = val // 每页
      },
      handleCurrentChange(val) {
        this.currentPage = val; // 当前页
      },
      setSize: function () {
        // 通过浏览器宽度(图片宽度)计算高度
        this.bannerHeight = (400 / 1920) * this.screenWidth;
      },
      publishStr() {
        this.$router.push("/strategy_add");
      },
      mounted() {
        // 首次加载时,需要调用一次
        this.screenWidth = window.innerWidth;
        this.setSize();
        // 窗口大小发生改变时,调用一次
        window.onresize = () => {
          this.screenWidth = window.innerWidth;
          this.setSize();
        };
      },
      details(index) {
        this.$router.push({
          name: 'stdetails', params: { strategy_id: index }
        }
        );
        console.log(index)
      },

    },

    mounted() {
      console.log('所有数据',hots);
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

  .post-list li a>div {
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

  .post-list li a>div {
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