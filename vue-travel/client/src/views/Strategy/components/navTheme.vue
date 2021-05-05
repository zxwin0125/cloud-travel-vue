<template>
  <section
    class="nav-item"
    data-cs-p="主题推荐"
    @mouseenter="showTheme"
    @mouseleave="hideTheme"
  >
    <div class="nav-title">
      <h3>主题推荐</h3>
      <b class="gn-arrow"></b>
    </div>
    <div class="nav-panel category-panel" v-if="isShowTheme">
      <dl class="clearfix">
        <dt>骑行</dt>
        <dd>
          <a title="海南" href="/gonglve/zt-359.html" target="_blank">海南</a>
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
          <a title="北京" href="/gonglve/zt-425.html" target="_blank">北京</a>
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
          <a title="印度尼西亚" href="/gonglve/mdd-10181.html" target="_blank"
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
          <a title="珠穆朗玛峰" href="/gonglve/mdd-10811.html" target="_blank"
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
  </section>
</template>
<script>
export default {
  name: "navTheme",
  components: {},
  data() {
    return {
      isShowTheme: false,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    showTheme() {
      this.isShowTheme = true;
    },
    hideTheme() {
      this.isShowTheme = false;
    },
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
  background: url(../../../assets/img/icon/new-gl-icon6@2x.png) no-repeat -20px -40px;
  overflow: hidden;
}

.gonglve-nav .nav-title .gn-arrow {
  background-image: url(../../../assets/img/icon/new-gl-icon6@2x.png);
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

.gonglve-nav .category-panel {
  width: 490px;
  padding: 10px 0;
  height: 318px;
}

.gonglve-nav .category-panel .nav-panel {
  position: absolute;
  left: 258px;
  top: -1px;
  width: 350px;
  height: 338px;
  border: 1px solid #ddd;
  background-color: #fff;
  display: none;
  box-shadow: 0 3px 2px rgb(0 0 0 / 10%);
}

.category-panel dl {
  margin: 0 0 0 20px;
  padding-left: 60px;
  border: 0;
  font-size: 12px;
  width: auto;
  height: auto;
  line-height: 20px;
}

.category-panel dt {
  float: left;
  display: inline;
  width: 60px;
  height: 20px;
  background: none;
  margin: 5px 0 5px -60px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  line-height: 20px;
  font-size: 12px;
  cursor: default;
  color: #666;
  font-weight: bold;
}

.category-panel dd {
  display: inline;
  position: static;
  border: 0;
  width: auto;
  padding: 0;
  float: left;
  margin: 5px 15px 5px 0;
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
  line-height: 20px;
}

</style>
