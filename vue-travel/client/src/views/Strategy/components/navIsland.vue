<template>
  <section
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
            ><a href="/gonglve/mdd-16209.html" target="_blank">象岛</a></strong
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
          ><a href="/gonglve/mdd-10460.html" target="_blank">巴厘岛免签啦</a>
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
            ><a href="/gonglve/mdd-10760.html" target="_blank">沙巴</a></strong
          ><a href="/gonglve/mdd-10760.html" target="_blank"
            >这里有世界上最美的落日</a
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
      isShowIsland: false,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    showIsland() {
      this.isShowIsland = true;
    },
    hideIsland() {
      this.isShowIsland = false;
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
