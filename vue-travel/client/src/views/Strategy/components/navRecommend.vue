<template>
  <section
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
            ><a href="/gonglve/mdd-10427.html" target="_blank">漠河</a></strong
          ><a href="/gonglve/mdd-10427.html" target="_blank"
            >至寒圣地的极光约会</a
          >
        </li>
        <li class="top3">
          <em class="rank-num">2</em
          ><strong
            ><a href="/gonglve/mdd-10440.html" target="_blank">黄山</a></strong
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
            ><a href="/gonglve/mdd-12491.html" target="_blank">霞浦</a></strong
          ><a href="/gonglve/mdd-12491.html" target="_blank"
            >红枫白荻的交相辉映</a
          >
        </li>
        <li>
          <em class="rank-num">8</em
          ><strong
            ><a href="/gonglve/mdd-10088.html" target="_blank">广州</a></strong
          ><a href="/gonglve/mdd-10088.html" target="_blank"
            >相约一起喝粤式早茶</a
          >
        </li>
        <li>
          <em class="rank-num">9</em
          ><strong
            ><a href="/gonglve/mdd-11065.html" target="_blank">高雄</a></strong
          ><a href="/gonglve/mdd-11065.html" target="_blank"
            >暖冬初阳遇最美台湾</a
          >
        </li>
        <li>
          <em class="rank-num">10</em
          ><strong
            ><a href="/gonglve/mdd-10030.html" target="_blank">三亚</a></strong
          ><a href="/gonglve/mdd-10030.html" target="_blank"
            >去热带海滩逃离寒冬</a
          >
        </li>
      </ol>
    </div>
  </section>
</template>
<script>
export default {
  name: "navSelect",
  components: {},
  data() {
    return {
      isShowRecommend: false,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    showRecommend() {
      this.isShowRecommend = true;
    },
    hideRecommend() {
      this.isShowRecommend = false;
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
