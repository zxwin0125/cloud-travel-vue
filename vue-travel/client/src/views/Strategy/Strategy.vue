<template>
  <section class="strategy">
    <section class="strategy_top">
      <div class="mdd_nav">
        <div class="gonglve-nav" data-cs-t="攻略导航">
          <navSelect />
          <navRecommend />
          <navIsland />
          <navTheme />
        </div>
        <div class="input_like">
          <div>
            <span></span>
            <input
              id="search_word"
              type="text"
              placeholder="请输入想去的地方，如:香港"
            />
            <div class="clear"></div>
          </div>
          <div class="search_resu" id="search_result"></div>
        </div>
      </div>

      <div class="slide">
        <Swiper :imgs="imgs" :width="imgWidth" :height="imgHeight" />
      </div>
    </section>
    <section class="strategy_bottom">
      <div class="gonglve_wrap">
        <div class="sidebar">
          <div class="side-hd">旅游攻略导航</div>
          <div class="nav-drop">
            <div class="drop-item" @click="showDomestic">
              <div class="trigger" :class="{ dropOpen: isDomestic }">
                <i></i>国内
              </div>
              <div class="drop-pop" v-if="isDomestic">
                <div class="inner">
                  <ul>
                    <li>
                      <a href="/gonglve/mdd-bj-0-0-1.html#list" target="_blank"
                        >北京(30)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-sc-0-0-1.html#list" target="_blank"
                        >四川(27)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-yn-0-0-1.html#list" target="_blank"
                        >云南(27)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-js-0-0-1.html#list" target="_blank"
                        >江苏(26)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-zj-0-0-1.html#list" target="_blank"
                        >浙江(21)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-gd-0-0-1.html#list" target="_blank"
                        >广东(19)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-heb-0-0-1.html#list" target="_blank"
                        >河北(16)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-tw-0-0-1.html#list" target="_blank"
                        >台湾(16)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-gz-0-0-1.html#list" target="_blank"
                        >贵州(15)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-sd-0-0-1.html#list" target="_blank"
                        >山东(15)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-nm-0-0-1.html#list" target="_blank"
                        >内蒙古(14)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-xz-0-0-1.html#list" target="_blank"
                        >西藏(13)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-gx-0-0-1.html#list" target="_blank"
                        >广西(12)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-jx-0-0-1.html#list" target="_blank"
                        >江西(12)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-qh-0-0-1.html#list" target="_blank"
                        >青海(11)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-hn-0-0-1.html#list" target="_blank"
                        >河南(10)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-hlj-0-0-1.html#list" target="_blank"
                        >黑龙江(10)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-xj-0-0-1.html#list" target="_blank"
                        >新疆(10)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-ah-0-0-1.html#list" target="_blank"
                        >安徽(9)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-fj-0-0-1.html#list" target="_blank"
                        >福建(9)</a
                      >
                    </li>
                    <li>
                      <a
                        href="/gonglve/mdd-hainan-0-0-1.html#list"
                        target="_blank"
                        >海南(9)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-hub-0-0-1.html#list" target="_blank"
                        >湖北(9)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-jl-0-0-1.html#list" target="_blank"
                        >吉林(9)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-gs-0-0-1.html#list" target="_blank"
                        >甘肃(8)</a
                      >
                    </li>
                    <li>
                      <a
                        href="/gonglve/mdd-hunan-0-0-1.html#list"
                        target="_blank"
                        >湖南(8)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-s1x-0-0-1.html#list" target="_blank"
                        >山西(8)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-s3x-0-0-1.html#list" target="_blank"
                        >陕西(8)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-ln-0-0-1.html#list" target="_blank"
                        >辽宁(6)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-mc-0-0-1.html#list" target="_blank"
                        >澳门(5)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-hk-0-0-1.html#list" target="_blank"
                        >香港(4)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-cq-0-0-1.html#list" target="_blank"
                        >重庆(4)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-sh-0-0-1.html#list" target="_blank"
                        >上海(3)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-nx-0-0-1.html#list" target="_blank"
                        >宁夏(2)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-tj-0-0-1.html#list" target="_blank"
                        >天津(2)</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="drop-item" @click="showForeign">
              <div class="trigger" :class="{ dropOpen: isForeign }">
                <i></i>国外
              </div>
              <div class="drop-pop" v-if="isForeign">
                <div class="inner">
                  <ul>
                    <li>
                      <a href="/gonglve/mdd-oz-0-0-1.html#list" target="_blank"
                        >欧洲(102)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-dny-0-0-1.html#list" target="_blank"
                        >东南亚(73)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-bmz-0-0-1.html#list" target="_blank"
                        >北美洲(41)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-dy-0-0-1.html#list" target="_blank"
                        >东亚(27)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-dyz-0-0-1.html#list" target="_blank"
                        >大洋洲(23)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-ny-0-0-1.html#list" target="_blank"
                        >南亚(20)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-fz-0-0-1.html#list" target="_blank"
                        >非洲(17)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-xy-0-0-1.html#list" target="_blank"
                        >西亚(7)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-nmz-0-0-1.html#list" target="_blank"
                        >南美洲(3)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/mdd-njz-0-0-1.html#list" target="_blank"
                        >南极洲(1)</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="drop-item" @click="showTheme">
              <div class="trigger" :class="{ dropOpen: isTheme }">
                <i></i>主题
              </div>
              <div class="drop-pop" v-if="isTheme">
                <div class="inner">
                  <ul>
                    <li>
                      <a href="/gonglve/zt-1051-1-0-0.html#list" target="_blank"
                        >数据报告(47)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1049-0-0-0.html#list" target="_blank"
                        >休闲(27)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1037-0-0-0.html#list" target="_blank"
                        >户外(18)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1022-0-0-0.html#list" target="_blank"
                        >文化(17)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1046-0-0-0.html#list" target="_blank"
                        >特别策划(15)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1006-0-0-0.html#list" target="_blank"
                        >美食(14)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1027-0-0-0.html#list" target="_blank"
                        >购物(12)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1017-0-0-0.html#list" target="_blank"
                        >自驾(11)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1044-0-0-0.html#list" target="_blank"
                        >节庆(11)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1023-0-0-0.html#list" target="_blank"
                        >必备(9)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1026-0-0-0.html#list" target="_blank"
                        >观赏(9)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1014-0-0-0.html#list" target="_blank"
                        >周边(8)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1016-0-0-0.html#list" target="_blank"
                        >摄影(7)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1050-0-0-0.html#list" target="_blank"
                        >旅行主义(7)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1047-0-0-0.html#list" target="_blank"
                        >建筑(5)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1033-0-0-0.html#list" target="_blank"
                        >家庭(4)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1045-0-0-0.html#list" target="_blank"
                        >星旅行(3)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1003-0-0-0.html#list" target="_blank"
                        >滑雪(1)</a
                      >
                    </li>
                    <li>
                      <a href="/gonglve/zt-1028-0-0-0.html#list" target="_blank"
                        >登山(1)</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="rank">
            <ul>
              <li class="gl_list">
                <a href="/gonglve/mdd-10035.html" title="成都" target="_blank">
                  <img
                    src="http://b1-q.mafengwo.net/s9/M00/6F/96/wKgBs1au-wuAcJRRAAli-UGtV0E29.jpeg?imageMogr2%2Fthumbnail%2F%21130x184r%2Fgravity%2FCenter%2Fcrop%2F%21130x184%2Fquality%2F90"
                    alt="成都"
                  />
                </a>
                <p class="time">更新日期:2016-02-01</p>
                <div class="down_cout">
                  <span></span>
                  <p>5047210人下载</p>
                </div>
              </li>
              <li>
                <span class="num">2</span>
                <a href="/gonglve/mdd-10208.html" title="重庆" target="_blank"
                  >重庆</a
                >
              </li>
              <li>
                <span class="num">3</span>
                <a href="/gonglve/mdd-10195.html" title="西安" target="_blank"
                  >西安</a
                >
              </li>
              <li>
                <span class="num">4</span>
                <a href="/gonglve/mdd-10156.html" title="杭州" target="_blank"
                  >杭州</a
                >
              </li>
              <li>
                <span class="num">5</span>
                <a href="/gonglve/mdd-10466.html" title="长沙" target="_blank"
                  >长沙</a
                >
              </li>
              <li>
                <span class="num">6</span>
                <a href="/gonglve/mdd-10207.html" title="苏州" target="_blank"
                  >苏州</a
                >
              </li>
              <li>
                <span class="num">7</span>
                <a href="/gonglve/mdd-10088.html" title="广州" target="_blank"
                  >广州</a
                >
              </li>
              <li>
                <span class="num">8</span>
                <a href="/gonglve/mdd-10684.html" title="南京" target="_blank"
                  >南京</a
                >
              </li>
              <li>
                <span class="num">9</span>
                <a href="/gonglve/mdd-10132.html" title="厦门" target="_blank"
                  >厦门</a
                >
              </li>
              <li>
                <span class="num">10</span>
                <a href="/gonglve/mdd-10128.html" title="扬州" target="_blank"
                  >扬州</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="cont-main _j_feed_list">
          <div class="hd">
            <h3>推荐攻略</h3>
          </div>
          <div class="gl-post">
            <div
              data-cs-t="gonglve_feed"
              class="_j_feed_data"
              data-feed='[{"fid":"381117","type":"3"},{"fid":"292353","type":"1"},{"fid":"419509","type":"3"},{"fid":"305517","type":"1"},{"fid":"130182","type":"3"},{"fid":"249946","type":"1"},{"fid":"154674","type":"1"},{"fid":"441859","type":"1"},{"fid":"30262","type":"3"},{"fid":"187326","type":"3"}]'
            >
              <div
                class="feed-item _j_feed_item"
                data-fid="381117"
                data-type="3"
                data-cs-p="位置_1"
              >
                <div class="bar">
                  <span class="stat"
                    ><span class="num">0</span> 蜂蜂体验过<i
                      class="icon-cart"
                    ></i
                  ></span>
                  <span class="type"
                    ><i class="icon-sales"></i>来自
                    <strong>自由行攻略</strong></span
                  >
                </div>
                <div class="title">
                  拥有12项世界纪录！广东周边游！快去清远古龙峡消暑！
                </div>
                <div class="txt">
                  <div class="info"></div>
                </div>
                <div class="imgs">
                  <ul class="">
                    <li>
                      <img
                        src="http://n1-q.mafengwo.net/s16/M00/C8/C5/CoUBUl8EFZ2AImzwAAKCA3Ag7go82.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                      />
                    </li>
                    <li>
                      <img
                        src="http://n1-q.mafengwo.net/s16/M00/C6/E8/CoUBUl8EFIeACdSgAATXKD3MaMA98.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                      />
                    </li>
                    <li>
                      <img
                        src="http://p1-q.mafengwo.net/s16/M00/C6/E8/CoUBUl8EFIiAIILzAASIrHg4NPs76.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                      />
                    </li>
                    <li class="ext-r">26607浏览</li>
                  </ul>
                </div>
              </div>
              <StrategyDetailItem
                v-for="item in resultPage"
                :key="item.strategy_id"
                :StrategyDetailItemData="item"
              />
            </div>
          </div>
        </div>
      </div>
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
              :total="strategyList.length"
            >
            </el-pagination>
          </div>
        </el-col>
      </el-row>
    </section>
  </section>
</template>
<script>
// 导入接口API
import { getMainStrategy, getHotStrategy } from "@/api/getData.js";
import navSelect from "../Strategy/components/navSelect";
import navRecommend from "../Strategy/components/navRecommend";
import navIsland from "../Strategy/components/navIsland";
import navTheme from "../Strategy/components/navTheme";
import Swiper from "../../components/Swiper";
import StrategyDetailItem from "../Strategy/common/StrategyDetailItem";

export default {
  name: "Strategy",
  components: {
    navSelect,
    navRecommend,
    navIsland,
    navTheme,
    Swiper,
    StrategyDetailItem,
  },
  data() {
    return {
      strategyList: [],
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
      imgWidth: "960px",
      imgHeight: "340px",

      isDomestic: false,
      isForeign: false,
      isTheme: false,

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
        page.push(this.strategyList[i]);
      }
      return page;
    },
  },
  created() {},
  mounted() {
    //当页面渲染完成时调用方法获取数据
    this.getMainData();
    this.getHotData();

    // 首次加载时,需要调用一次
    this.screenWidth = window.innerWidth;
    this.setSize();
    // 窗口大小发生改变时,调用一次
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
      this.setSize();
    };
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
        this.strategyList = result.data.data;
        this.allTableData = result.data.data;
        // 设置分页数据
        // this.setPaginations();
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

    showDomestic() {
      this.isDomestic = !this.isDomestic;
      this.isForeign = false;
      this.isTheme = false;
    },

    showForeign() {
      this.isForeign = !this.isForeign;
      this.isDomestic = false;
      this.isTheme = false;
    },

    showTheme() {
      this.isTheme = !this.isTheme;
      this.isDomestic = false;
      this.isForeign = false;
    },

    handleSizeChange(val) {
      this.allPage = val; // 每页
    },

    handleCurrentChange(val) {
      this.currentPage = val; // 当前页
    },

    setSize() {
      // 通过浏览器宽度(图片宽度)计算高度
      this.bannerHeight = (400 / 1920) * this.screenWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
.strategy_top {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10px;
  padding: 15px 100px 0;
}

.strategy_bottom {
  margin-bottom: 10px;
  padding: 15px 100px 0;
  .gonglve_wrap {
    margin-top: 15px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    .sidebar {
      width: 160px;
      margin-right: 50px;
      .side-hd {
        height: 50px;
        font-size: 16px;
        color: #333;
        border-bottom: 1px solid #eee;
        line-height: 48px;
      }
      .nav-drop {
        margin-bottom: 10px;
        height: 45px;
        line-height: 25px;
        color: #333;
        border-bottom: 1px solid #eee;
        .drop-item {
          float: left;
          width: 40px;
          font-size: 14px;
          .trigger {
            padding: 10px 0;
            height: 22px;
            cursor: pointer;
            i {
              float: right;
              margin-top: 10px;
              border-top: 4px solid #999;
              border-left: 4px dashed transparent;
              border-right: 4px dashed transparent;
              font-size: 0;
              overflow: hidden;
            }
          }
          .drop-pop {
            position: absolute;
            margin-top: 10px;
            width: 410px;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #e5e5e5;
            line-height: 30px;
            .inner {
              overflow: hidden;
              ul {
                margin-left: -15px;
                li {
                  float: left;
                  margin: 0 15px;
                  a {
                    color: #333;
                  }
                }
              }
            }
          }
          .dropOpen {
            color: #ff9d00;
            border-bottom: 3px solid #ff9d00;
          }
        }
        .drop-item + .drop-item {
          margin-left: 20px;
        }
        .drop-item + .drop-item:before {
          content: "";
          position: absolute;
          margin: 16px 0 0 -10px;
          width: 1px;
          height: 13px;
          background-color: #eee;
        }
      }
      .rank {
        li {
          padding: 15px 0;
        }
        li + li {
          border-top: 1px solid #f7f7f7;
          line-height: 24px;
        }
        .gl_list {
          width: 130px;
          margin-right: 40px;
          a {
            display: block;
            height: 184px;
            width: 130px;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .time {
            margin: 5px 0;
            text-align: center;
            font-size: 12px;
            color: #999;
          }
          .down_cout {
            height: 24px;
            width: 130px;
            background: #ebebeb;
            border-radius: 30px;
            margin-top: 5px;
            position: relative;
            span {
              display: block;
              position: absolute;
              top: 0px;
              left: 0px;
              height: 24px;
              width: 24px;
              background: url(../../assets/img/icon/new-gl-icon6@2x.png) -20px -90px
                no-repeat;
              background-size: 60px auto;
            }
            p {
              line-height: 24px;
              color: #666;
              padding-left: 30px;
              font-size: 12px;
            }
          }
        }
        .num {
          float: left;
          margin-right: 10px;
          font-size: 18px;
          color: #ff9d00;
        }
        a {
          color: #333;
          font-size: 14px;
        }
      }
    }
    .cont-main {
      width: 790px;
      margin-bottom: 20px;
      .hd {
        height: 50px;
        border-bottom: 1px solid #eee;
        line-height: 48px;
        h3 {
          float: left;
          font-weight: normal;
          font-size: 20px;
          color: #333;
        }
      }
      .feed-item {
        padding: 20px 0;
        font-size: 14px;
        line-height: 24px;
        .stat {
          float: right;
          padding: 0 15px;
          line-height: 30px;
          border: 1px solid #ff9d00;
          border-radius: 15px;
          font-size: 14px;
          background-color: #fff;
          color: #666;
        }
        .icon-cart {
          display: inline-block;
          margin-left: 10px;
          width: 15px;
          height: 15px;
          background: url(../../assets/img/icon/new-gl-icon6@2x.png) no-repeat;
          background-size: 60px auto;
          background-position: -40px -40px;
          overflow: hidden;
          vertical-align: -2px;
          *vertical-align: middle;
        }
        .title {
          margin-top: 40px;
          margin-bottom: 15px;
          font-size: 20px;
          color: #333;
        }
        .imgs {
          li {
            float: left;
            width: 220px;
            display: inline;
            margin-right: 15px;
          }
          .ext-r {
            float: right;
            margin: 0;
            width: auto;
            line-height: 130px;
          }
        }
      }
    }
  }
}

.pagination {
  text-align: right;
  margin-top: 10px;
}

.mdd_nav {
  width: 260px;
}

.slide {
  width: 700px;
  height: 340px;
}

.gonglve-nav {
  width: 260px;
  border: 1px solid #ddd;
  border-bottom: 0;
  box-shadow: 0 0.5px 2px rgb(0 0 0 / 10%);
  position: relative;
  z-index: 10;
}

.input_like {
  border: 2px #ffa800 solid;
  height: 40px;
  margin-top: 10px;
  position: relative;
  z-index: 10;
}

.input_like span {
  float: left;
  height: 27px;
  width: 29px;
  background: url(../../assets/img/icon/new-gl-icon6@2x.png) -20px -60px
    no-repeat;
  margin-top: 7px;
  margin-left: 8px;
}

.input_like input {
  line-height: normal;
}

.input_like input {
  height: 30px;
  line-height: 30px;
  float: left;
  width: 206px;
  padding: 3px 0px;
  border: 0px;
  font-size: 12px;
  color: #888888;
  margin-left: 8px;
  margin-top: 2px;
  outline: none;
  font-family: "Microsoft Yahei", Tahoma, Arial, Helvetica, STHeiti;
}

.search_resu {
  border: 1px #ffa800 solid;
  width: 518px;
  position: absolute;
  z-index: 50;
  top: 41px;
  left: -2px;
  background: #fff;
  padding-bottom: 30px;
  display: none;
}

.feed-item a {
  display: flex;
  flex-direction: column;
}

.feed-item a .bar {
  height: 36px;
}

.feed-item a .art {
  display: flex;
}

.imgs ul {
  display: flex;
  flex-direction: row;
}

.feed-item a {
  display: block;
}

.cont-main .type {
  float: left;
  display: inline-block;
  line-height: 20px;
  font-size: 12px;
  color: #666;
}

.cont-main .type .icon-line {
  background-position: 0 -40px;
}

.cont-main .type i {
  float: left;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  background: url(../../assets/img/icon/new-gl-icon6@2x.png) no-repeat 0 0;
  overflow: hidden;
}

.cont-main .type strong {
  font-weight: normal;
  color: #ff9d00;
}

.feed-item .icon-hand,
.cont-main .type i,
.input_like span {
  background-image: url(../../assets/img/icon/new-gl-icon6@2x.png);
  background-size: 60px auto;
}
</style>
