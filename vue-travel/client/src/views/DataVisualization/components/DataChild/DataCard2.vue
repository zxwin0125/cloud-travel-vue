<template>
  <!-- <section id="DataCard2"> -->
  <el-col :span="8">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">
          Total Sales
          <a href="javascript:;" @click="change1"> 2019 </a>
          <a href="javascript:;" @click="change2"> 2020</a>
        </h4>
        <div
          id="campaign-v2"
          class="mt-2 c3"
          style="
            height: 283px;
            width: 100%;
            max-height: 283px;
            position: relative;
          "
        ></div>
      </div>
    </div>
  </el-col>
  <!-- </section> -->
</template>

<script>
export default {
  name: "DataCard2",
  data() {
    return {
      yearData: [200, 300, 300, 900, 1500, 1200, 600],
      // year2020: [300, 400, 350, 800, 1800, 1400, 700]
    };
  },
  methods: {
    change1() {
      this.yearData = [200, 300, 300, 900, 1500, 1200, 600];
    },

    change2() {
      this.yearData = [300, 400, 350, 800, 1800, 1400, 700];
    },
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("campaign-v2"));

      // 2. 指定配置项和数据
      var option = {
        color: ["#ed5a65"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        // 修改图表的大小
        grid: {
          left: "0%",
          top: "10px",
          right: "0%",
          bottom: "4%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["旅游", "教育", "游戏", "医疗", "电商", "社交", "金融"],
            axisTick: {
              alignWithLabel: true,
            },
            // 修改刻度标签 相关样式
            axisLabel: {
              color: "rgba(237,90,101,.6)",
              fontSize: "12",
            },
            // 不显示x坐标轴的样式
            axisLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            // 修改刻度标签 相关样式
            axisLabel: {
              color: "rgba(237,90,101,.6)",
              fontSize: 12,
            },
            // y轴的线条改为了 2像素
            axisLine: {
              lineStyle: {
                color: "rgba(122,115,116,.6)",
              },
            },
            // y轴分割线的颜色
            splitLine: {
              lineStyle: {
                color: "rgba(122,115,116,.6)",
              },
            },
          },
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "35%",
            data: this.yearData,
            itemStyle: {
              // 修改柱子圆角
              barBorderRadius: 5,
            },
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);

      // 4. 让图表跟随屏幕自动的去适应
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
  mounted() {
    this.myEcharts();
  },
};
</script>

<style lang="scss" scoped>
.el-col {
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  .card {
    margin-bottom: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    width: 100%;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid #e9ecef;
    border-radius: 0.25rem;
    box-shadow: 0 3px 9px 0 rgba(169, 184, 200, 0.15);
    .card-body {
      flex: 1 1 auto;
      padding: 25px;
      .card-title {
        position: relative;
        font-weight: 500;
        margin-bottom: 10px;
        color: #212529;
        font-size: 18px;
        margin-top: 10px;
        line-height: 1.1;
      }
    }
  }
}
</style>