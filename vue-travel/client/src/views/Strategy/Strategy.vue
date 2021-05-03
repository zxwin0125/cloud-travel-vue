<template>
  <section class="strategy">
    <div class="gonglve-nav" data-cs-t="攻略导航">
      <div
        class="nav-item"
        data-cs-p="海外冬季目的地精选"
        @mouseenter="showSelect"
        @mouseleave="hideSelect"
      >
        <div class="nav-title">
          <h3>海外冬季目的地精选</h3>
          <b class="gn-arrow"></b>
        </div>
        <div class="nav-panel rank-panel" v-if="isShowSelect">
          <ol>
            <li class="top3">
              <em class="rank-num">1</em
              ><strong
                ><a href="/gonglve/mdd-10746.html" target="_blank"
                  >北海道</a
                ></strong
              ><a href="/gonglve/mdd-10746.html" target="_blank"
                >在皑皑白雪中泡温泉</a
              >
            </li>
            <li class="top3">
              <em class="rank-num">2</em
              ><strong
                ><a href="/gonglve/mdd-10549.html" target="_blank"
                  >冰岛</a
                ></strong
              ><a href="/gonglve/mdd-10549.html" target="_blank"
                >亲近极北之地的莫测极光</a
              >
            </li>
            <li class="top3">
              <em class="rank-num">3</em
              ><strong
                ><a href="/gonglve/mdd-10202.html" target="_blank"
                  >澳大利亚</a
                ></strong
              ><a href="/gonglve/mdd-10202.html" target="_blank"
                >在南半球过个暖洋洋的圣诞节</a
              >
            </li>
            <li>
              <em class="rank-num">4</em
              ><strong
                ><a href="/gonglve/mdd-10926.html" target="_blank"
                  >洛杉矶</a
                ></strong
              ><a href="/gonglve/mdd-10926.html" target="_blank"
                >阳光加州，避寒圣地</a
              >
            </li>
            <li>
              <em class="rank-num">5</em
              ><strong
                ><a href="/gonglve/mdd-10754.html" target="_blank"
                  >新加坡</a
                ></strong
              ><a href="/gonglve/mdd-10754.html" target="_blank"
                >活力四射的花园之城</a
              >
            </li>
            <li>
              <em class="rank-num">6</em
              ><strong
                ><a href="/gonglve/mdd-11058.html" target="_blank"
                  >斯里兰卡</a
                ></strong
              ><a href="/gonglve/mdd-11058.html" target="_blank"
                >便利签证，异域风情</a
              >
            </li>
            <li>
              <em class="rank-num">7</em
              ><strong
                ><a href="/gonglve/mdd-15911.html" target="_blank"
                  >帕劳</a
                ></strong
              ><a href="/gonglve/mdd-15911.html" target="_blank"
                >潜水者的朝圣地</a
              >
            </li>
            <li>
              <em class="rank-num">8</em
              ><strong
                ><a href="/gonglve/mdd-10179.html" target="_blank"
                  >缅甸</a
                ></strong
              ><a href="/gonglve/mdd-10179.html" target="_blank"
                >踏上佛国净化之旅</a
              >
            </li>
            <li>
              <em class="rank-num">9</em
              ><strong
                ><a href="/gonglve/mdd-10067.html" target="_blank"
                  >菲律宾</a
                ></strong
              ><a href="/gonglve/mdd-10067.html" target="_blank"
                >徜徉海岛间，潜入深海中</a
              >
            </li>
            <li>
              <em class="rank-num">10</em
              ><strong
                ><a href="/gonglve/mdd-11214.html" target="_blank"
                  >迪拜</a
                ></strong
              ><a href="/gonglve/mdd-11214.html" target="_blank"
                >沙漠中的奇迹之城</a
              >
            </li>
          </ol>
          <!-- <span
            class="nav-banner"
            style="
              background: url(http://file31.mafengwo.net/M00/DB/72/wKgBs1dfpuaATGRlAAAVhrE4pLc75.jpeg)
                no-repeat;
            "
            ><a
              href="/gonglve/mdd-10122.html"
              hidefocus="ture"
              target="_blank"
            ></a
          ></span> -->
        </div>
      </div>
      <div
        class="nav-item"
        data-cs-p="国内冬季目的地推荐"
        @mouseenter="showRecommend"
        @mouseleave="hideRecommend"
      >
        <div class="nav-title">
          <h3>国内冬季目的地推荐</h3>
          <b class="gn-arrow"></b>
        </div>
        <div class="nav-panel rank-panel" v-if="isShowRecommend">
          <ol>
            <li class="top3">
              <em class="rank-num">1</em
              ><strong
                ><a href="/gonglve/mdd-10427.html" target="_blank"
                  >漠河</a
                ></strong
              ><a href="/gonglve/mdd-10427.html" target="_blank"
                >至寒圣地的极光约会</a
              >
            </li>
            <li class="top3">
              <em class="rank-num">2</em
              ><strong
                ><a href="/gonglve/mdd-10440.html" target="_blank"
                  >黄山</a
                ></strong
              ><a href="/gonglve/mdd-10440.html" target="_blank"
                >银装素裹秒杀菲林季</a
              >
            </li>
            <li class="top3">
              <em class="rank-num">3</em
              ><strong
                ><a href="/gonglve/mdd-11327.html" target="_blank"
                  >海螺沟</a
                ></strong
              ><a href="/gonglve/mdd-11327.html" target="_blank"
                >冰川温泉的童话世界</a
              >
            </li>
            <li>
              <em class="rank-num">4</em
              ><strong
                ><a href="/gonglve/mdd-10087.html" target="_blank"
                  >壶口瀑布</a
                ></strong
              ><a href="/gonglve/mdd-10087.html" target="_blank"
                >绝美的冰瀑玉壶奇观</a
              >
            </li>
            <li>
              <em class="rank-num">5</em
              ><strong
                ><a href="/gonglve/mdd-18084.html" target="_blank"
                  >西岭雪山</a
                ></strong
              ><a href="/gonglve/mdd-18084.html" target="_blank"
                >成都周边最大滑雪场</a
              >
            </li>
            <li>
              <em class="rank-num">6</em
              ><strong
                ><a href="/gonglve/mdd-10809.html" target="_blank"
                  >西双版纳</a
                ></strong
              ><a href="/gonglve/mdd-10809.html" target="_blank"
                >聆听欣赏原生态歌舞</a
              >
            </li>
            <li>
              <em class="rank-num">7</em
              ><strong
                ><a href="/gonglve/mdd-12491.html" target="_blank"
                  >霞浦</a
                ></strong
              ><a href="/gonglve/mdd-12491.html" target="_blank"
                >红枫白荻的交相辉映</a
              >
            </li>
            <li>
              <em class="rank-num">8</em
              ><strong
                ><a href="/gonglve/mdd-10088.html" target="_blank"
                  >广州</a
                ></strong
              ><a href="/gonglve/mdd-10088.html" target="_blank"
                >相约一起喝粤式早茶</a
              >
            </li>
            <li>
              <em class="rank-num">9</em
              ><strong
                ><a href="/gonglve/mdd-11065.html" target="_blank"
                  >高雄</a
                ></strong
              ><a href="/gonglve/mdd-11065.html" target="_blank"
                >暖冬初阳遇最美台湾</a
              >
            </li>
            <li>
              <em class="rank-num">10</em
              ><strong
                ><a href="/gonglve/mdd-10030.html" target="_blank"
                  >三亚</a
                ></strong
              ><a href="/gonglve/mdd-10030.html" target="_blank"
                >去热带海滩逃离寒冬</a
              >
            </li>
          </ol>
          <span
            class="nav-banner"
            style="
              background: url(http://file31.mafengwo.net/M00/DB/72/wKgBs1dfpuaATGRlAAAVhrE4pLc75.jpeg)
                no-repeat;
            "
            ><a
              href="/gonglve/mdd-12491.html"
              hidefocus="ture"
              target="_blank"
            ></a
          ></span>
        </div>
      </div>
      <div
        class="nav-item"
        data-cs-p="奔向海岛"
        @mouseenter="showIsland"
        @mouseleave="hideIsland"
      >
        <div class="nav-title">
          <h3>奔向海岛</h3>
          <b class="gn-arrow"></b>
        </div>
        <div class="nav-panel rank-panel" v-if="isShowIsland">
          <ol>
            <li class="top3">
              <em class="rank-num">1</em
              ><strong
                ><a href="/gonglve/mdd-16209.html" target="_blank"
                  >象岛</a
                ></strong
              ><a href="/gonglve/mdd-16209.html" target="_blank"
                >腻了普吉，来象岛玩个深度</a
              >
            </li>
            <li class="top3">
              <em class="rank-num">2</em
              ><strong
                ><a href="/gonglve/mdd-10460.html" target="_blank"
                  >巴厘岛</a
                ></strong
              ><a href="/gonglve/mdd-10460.html" target="_blank"
                >巴厘岛免签啦</a
              >
            </li>
            <li class="top3">
              <em class="rank-num">3</em
              ><strong
                ><a href="/gonglve/mdd-11761.html" target="_blank"
                  >毛里求斯</a
                ></strong
              ><a href="/gonglve/mdd-11761.html" target="_blank"
                >印度洋上的海上明珠</a
              >
            </li>
            <li>
              <em class="rank-num">4</em
              ><strong
                ><a href="/gonglve/mdd-10077.html" target="_blank"
                  >塞班岛</a
                ></strong
              ><a href="/gonglve/mdd-10077.html" target="_blank"
                >错“季”出行，也有惊喜</a
              >
            </li>
            <li>
              <em class="rank-num">5</em
              ><strong
                ><a href="/gonglve/mdd-10737.html" target="_blank"
                  >长滩岛</a
                ></strong
              ><a href="/gonglve/mdd-10737.html" target="_blank"
                >潜水与蜜月的天堂</a
              >
            </li>
            <li>
              <em class="rank-num">6</em
              ><strong
                ><a href="/gonglve/mdd-16095.html" target="_blank"
                  >圣托里尼</a
                ></strong
              ><a href="/gonglve/mdd-16095.html" target="_blank"
                >蓝白之城映衬着海风吹拂</a
              >
            </li>
            <li>
              <em class="rank-num">7</em
              ><strong
                ><a href="/gonglve/mdd-15289.html" target="_blank"
                  >沙美岛</a
                ></strong
              ><a href="/gonglve/mdd-15289.html" target="_blank"
                >如果你厌倦了芭提雅</a
              >
            </li>
            <li>
              <em class="rank-num">8</em
              ><strong
                ><a href="/gonglve/mdd-29500.html" target="_blank"
                  >杜马盖地</a
                ></strong
              ><a href="/gonglve/mdd-29500.html" target="_blank"
                >找小丑鱼做客去！</a
              >
            </li>
            <li>
              <em class="rank-num">9</em
              ><strong
                ><a href="/gonglve/mdd-11051.html" target="_blank"
                  >兰卡威</a
                ></strong
              ><a href="/gonglve/mdd-11051.html" target="_blank"
                >海钓、潜水，看蓝天</a
              >
            </li>
            <li>
              <em class="rank-num">10</em
              ><strong
                ><a href="/gonglve/mdd-10760.html" target="_blank"
                  >沙巴</a
                ></strong
              ><a href="/gonglve/mdd-10760.html" target="_blank"
                >这里有世界上最美的落日</a
              >
            </li>
          </ol>
          <span
            class="nav-banner"
            style="
              background: url(http://file31.mafengwo.net/M00/DB/72/wKgBs1dfpuaATGRlAAAVhrE4pLc75.jpeg)
                no-repeat;
            "
            ><a
              href="/gonglve/mdd-10760.html"
              hidefocus="ture"
              target="_blank"
            ></a
          ></span>
        </div>
      </div>
      <div class="nav-item" data-cs-p="主题推荐">
        <div class="nav-title">
          <h3>主题推荐</h3>
          <b class="gn-arrow"></b>
        </div>
        <div class="nav-panel category-panel">
          <dl class="clearfix">
            <dt>骑行</dt>
            <dd>
              <a title="海南" href="/gonglve/zt-359.html" target="_blank"
                >海南</a
              >
            </dd>
            <dd>
              <a title="青海湖" href="/gonglve/zt-381.html" target="_blank"
                >青海湖</a
              >
            </dd>
            <dd>
              <a title="敦煌" href="/gonglve/mdd-10240.html" target="_blank"
                >敦煌</a
              >
            </dd>
            <dd>
              <a title="漠河" href="/gonglve/mdd-10427.html" target="_blank"
                >漠河</a
              >
            </dd>
            <dd>
              <a title="台湾" href="/gonglve/mdd-12684.html" target="_blank"
                >台湾</a
              >
            </dd>
            <dd>
              <a title="北京" href="/gonglve/zt-425.html" target="_blank"
                >北京</a
              >
            </dd>
            <dd>
              <a title="杭州" href="/gonglve/mdd-10156.html" target="_blank"
                >杭州</a
              >
            </dd>
            <dd>
              <a title="双廊" href="/gonglve/mdd-15950.html" target="_blank"
                >双廊</a
              >
            </dd>
            <dd>
              <a title="婺源" href="/gonglve/mdd-10045.html" target="_blank"
                >婺源</a
              >
            </dd>
            <dd>
              <a title="阿尔山" href="/gonglve/mdd-10390.html" target="_blank"
                >阿尔山</a
              >
            </dd>
            <dd>
              <a title="法国" href="/gonglve/mdd-10171.html" target="_blank"
                >法国</a
              >
            </dd>
            <dd>
              <a title="厦门" href="/gonglve/mdd-10132.html" target="_blank"
                >厦门</a
              >
            </dd>
            <dd>
              <a title="阳朔" href="/gonglve/mdd-10027.html" target="_blank"
                >阳朔</a
              >
            </dd>
            <dd>
              <a title="香格里拉" href="/gonglve/mdd-10482.html" target="_blank"
                >香格里拉</a
              >
            </dd>
            <dd>
              <a title="太湖" href="/gonglve/mdd-10140.html" target="_blank"
                >太湖</a
              >
            </dd>
            <dd>
              <a title="西藏" href="/gonglve/mdd-12700.html" target="_blank"
                >西藏</a
              >
            </dd>
            <dd>
              <a title="大理" href="/gonglve/mdd-10487.html" target="_blank"
                >大理</a
              >
            </dd>
            <dd>
              <a title="成都" href="/gonglve/mdd-10035.html" target="_blank"
                >成都</a
              >
            </dd>
            <dd>
              <a title="乌鲁木齐" href="/gonglve/mdd-10218.html" target="_blank"
                >乌鲁木齐</a
              >
            </dd>
          </dl>
          <dl class="clearfix">
            <dt>潜水</dt>
            <dd>
              <a title="沙巴" href="/gonglve/mdd-10760.html" target="_blank"
                >沙巴</a
              >
            </dd>
            <dd>
              <a title="三亚" href="/gonglve/mdd-10030.html" target="_blank"
                >三亚</a
              >
            </dd>
            <dd>
              <a title="斐济" href="/gonglve/mdd-11044.html" target="_blank"
                >斐济</a
              >
            </dd>
            <dd>
              <a title="巴厘岛" href="/gonglve/mdd-10460.html" target="_blank"
                >巴厘岛</a
              >
            </dd>
            <dd>
              <a title="长滩岛" href="/gonglve/mdd-10737.html" target="_blank"
                >长滩岛</a
              >
            </dd>
            <dd>
              <a title="马尔代夫" href="/gonglve/mdd-10101.html" target="_blank"
                >马尔代夫</a
              >
            </dd>
            <dd>
              <a title="苏梅岛" href="/gonglve/mdd-14210.html" target="_blank"
                >苏梅岛</a
              >
            </dd>
            <dd>
              <a title="普吉岛" href="/gonglve/mdd-11047.html" target="_blank"
                >普吉岛</a
              >
            </dd>
            <dd>
              <a title="夏威夷" href="/gonglve/mdd-10927.html" target="_blank"
                >夏威夷</a
              >
            </dd>
            <dd>
              <a title="巴拉望" href="/gonglve/mdd-16116.html" target="_blank"
                >巴拉望</a
              >
            </dd>
            <dd>
              <a title="马来西亚" href="/gonglve/mdd-10097.html" target="_blank"
                >马来西亚</a
              >
            </dd>
            <dd>
              <a title="兰卡威" href="/gonglve/mdd-11051.html" target="_blank"
                >兰卡威</a
              >
            </dd>
            <dd>
              <a title="埃及" href="/gonglve/mdd-10178.html" target="_blank"
                >埃及</a
              >
            </dd>
            <dd>
              <a
                title="印度尼西亚"
                href="/gonglve/mdd-10181.html"
                target="_blank"
                >印度尼西亚</a
              >
            </dd>
            <dd>
              <a title="泰国" href="/gonglve/mdd-10083.html" target="_blank"
                >泰国</a
              >
            </dd>
          </dl>
          <dl class="clearfix">
            <dt>徒步</dt>
            <dd>
              <a title="尼泊尔" href="/gonglve/zt-329.html" target="_blank"
                >尼泊尔</a
              >
            </dd>
            <dd>
              <a title="虎跳峡" href="/gonglve/zt-398.html" target="_blank"
                >虎跳峡</a
              >
            </dd>
            <dd>
              <a title="喀纳斯" href="/gonglve/mdd-10732.html" target="_blank"
                >喀纳斯</a
              >
            </dd>
            <dd>
              <a title="墨脱" href="/gonglve/mdd-10079.html" target="_blank"
                >墨脱</a
              >
            </dd>
            <dd>
              <a title="小五台" href="/gonglve/mdd-10230.html" target="_blank"
                >小五台</a
              >
            </dd>
            <dd>
              <a title="贡嘎雪山" href="/gonglve/mdd-10347.html" target="_blank"
                >贡嘎雪山</a
              >
            </dd>
            <dd>
              <a title="海陀山" href="/gonglve/mdd-10713.html" target="_blank"
                >海陀山</a
              >
            </dd>
            <dd>
              <a title="海螺沟" href="/gonglve/mdd-11327.html" target="_blank"
                >海螺沟</a
              >
            </dd>
            <dd>
              <a title="雨崩" href="/gonglve/mdd-12141.html" target="_blank"
                >雨崩</a
              >
            </dd>
            <dd>
              <a title="三峡" href="/gonglve/mdd-10705.html" target="_blank"
                >三峡</a
              >
            </dd>
            <dd>
              <a title="阳朔" href="/gonglve/mdd-10027.html" target="_blank"
                >阳朔</a
              >
            </dd>
            <dd>
              <a title="新都桥" href="/gonglve/mdd-14727.html" target="_blank"
                >新都桥</a
              >
            </dd>
            <dd>
              <a title="楠溪江" href="/gonglve/mdd-10090.html" target="_blank"
                >楠溪江</a
              >
            </dd>
            <dd>
              <a title="梅里雪山" href="/gonglve/mdd-10806.html" target="_blank"
                >梅里雪山</a
              >
            </dd>
            <dd>
              <a title="野三坡" href="/gonglve/mdd-11262.html" target="_blank"
                >野三坡</a
              >
            </dd>
            <dd>
              <a title="西双版纳" href="/gonglve/mdd-10809.html" target="_blank"
                >西双版纳</a
              >
            </dd>
          </dl>
          <dl class="clearfix">
            <dt>登山</dt>
            <dd>
              <a
                title="珠穆朗玛峰"
                href="/gonglve/mdd-10811.html"
                target="_blank"
                >珠穆朗玛峰</a
              >
            </dd>
            <dd>
              <a title="乞力马扎罗" href="/gonglve/zt-321.html" target="_blank"
                >乞力马扎罗</a
              >
            </dd>
            <dd>
              <a title="牛背山" href="/gonglve/mdd-17315.html" target="_blank"
                >牛背山</a
              >
            </dd>
            <dd>
              <a title="太白山" href="/gonglve/mdd-10531.html" target="_blank"
                >太白山</a
              >
            </dd>
            <dd>
              <a title="四姑娘山" href="/gonglve/mdd-10134.html" target="_blank"
                >四姑娘山</a
              >
            </dd>
            <dd>
              <a title="雁荡山" href="/gonglve/mdd-11746.html" target="_blank"
                >雁荡山</a
              >
            </dd>
            <dd>
              <a title="云台山" href="/gonglve/mdd-11527.html" target="_blank"
                >云台山</a
              >
            </dd>
            <dd>
              <a title="三清山" href="/gonglve/mdd-11465.html" target="_blank"
                >三清山</a
              >
            </dd>
            <dd>
              <a title="普陀山" href="/gonglve/mdd-11534.html" target="_blank"
                >普陀山</a
              >
            </dd>
            <dd>
              <a title="庐山" href="/gonglve/mdd-10244.html" target="_blank"
                >庐山</a
              >
            </dd>
            <dd>
              <a title="海陀山" href="/gonglve/mdd-10713.html" target="_blank"
                >海陀山</a
              >
            </dd>
            <dd>
              <a title="小五台" href="/gonglve/mdd-10230.html" target="_blank"
                >小五台</a
              >
            </dd>
            <dd>
              <a title="华山" href="/gonglve/mdd-10577.html" target="_blank"
                >华山</a
              >
            </dd>
            <dd>
              <a title="泰山" href="/gonglve/mdd-10284.html" target="_blank"
                >泰山</a
              >
            </dd>
            <dd>
              <a title="黄山 " href="/gonglve/mdd-10440.html" target="_blank"
                >黄山
              </a>
            </dd>
            <dd>
              <a title="武功山" href="/gonglve/mdd-12702.html" target="_blank"
                >武功山</a
              >
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <!-- <Swiper :imgs="imgs" /> -->

    <!-- 攻略导航 -->
    <!-- <StrategyNav /> -->
    <!-- 发布攻略按钮1 md以下 -->
    <!-- <StrategyPuba /> -->
    <!-- 攻略首页内容 -->
  </section>
</template>
<script>
// 导入接口API
// import { getMainStrategy, getHotStrategy } from "@/api/getData.js";

import Swiper from "../../components/Swiper";
import StrategyNav from "./components/StrategyNav";
// import StrategyPuba from "../Strategy/components/StrategyPuba";
export default {
  name: "Strategy",
  components: {
    Swiper,
    StrategyNav,
    // StrategyPuba,
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

      isShowSelect: false,
      isShowRecommend: false,
      isShowIsland: false,
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
    // this.getMainData();
    // this.getHotData();
  },
  methods: {
    showSelect() {
      this.isShowSelect = true;
    },
    hideSelect() {
      this.isShowSelect = false;
    },
    showRecommend() {
      this.isShowRecommend = true;
    },
    hideRecommend() {
      this.isShowRecommend = false;
    },
    showIsland() {
      this.isShowIsland = true;
    },
    hideIsland() {
      this.isShowIsland = false;
    },
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
  },
};
</script>

<style>
.gonglve-nav {
  width: 260px;
  border: 1px solid #ddd;
  border-bottom: 0;
  box-shadow: 0 0.5px 2px rgb(0 0 0 / 10%);
  position: relative;
  z-index: 10;
}

.gonglve-nav .nav-title {
  height: 40px;
  padding: 0 15px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  line-height: 40px;
  font-size: 14px;
  color: #666;
  cursor: default;
  position: relative;
  z-index: 2;
}

.gonglve-nav .nav-title .gn-arrow {
  position: absolute;
  right: 15px;
  top: 15px;
  width: 6px;
  height: 10px;
  background: url(../../assets/img/icon/new-gl-icon6@2x.png) no-repeat -20px -40px;
  overflow: hidden;
}

.gonglve-nav .nav-title .gn-arrow {
  background-image: url(../../assets/img/icon/new-gl-icon6@2x.png);
  background-size: 60px auto;
}

.gonglve-nav .nav-panel {
  position: absolute;
  left: 258px;
  top: -1px;
  width: 350px;
  height: 338px;
  border: 1px solid #ddd;
  background-color: #fff;
  /* display: none; */
  box-shadow: 0 3px 2px rgb(0 0 0 / 10%);
}

.gonglve-nav .rank-panel ol {
  position: absolute;
  z-index: 2;
  padding: 15px 10px;
  width: 260px;
  line-height: 30px;
}

.gonglve-nav .rank-panel li {
  height: 30px;
  overflow: hidden;
}

.gonglve-nav .rank-panel .top3 .rank-num,
.gonglve-nav .rank-panel .top3 strong a {
  color: #ffa800;
}

.gonglve-nav .rank-panel .rank-num {
  float: left;
  width: 30px;
  font-size: 20px;
  font-family: Letter Gothic Std, Verdana, Geneva, sans-serif;
  text-align: right;
  color: #aaa;
  font-weight: bold;
}

.gonglve-nav .rank-panel strong {
  padding: 0 15px;
  font-size: 14px;
  font-weight: normal;
  color: #666;
}

.gonglve-nav .nav-panel a {
  color: #999;
}

.gonglve-nav .nav-banner {
  position: absolute;
  _top: 1px;
  z-index: 1;
  width: 506px;
  height: 345px;
  background-repeat: no-repeat;
  background-position: right bottom;
  /* display: none; */
}
</style>
