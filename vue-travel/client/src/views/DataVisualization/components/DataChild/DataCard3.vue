<template>
  <!-- <section id="DataCard1"> -->
  <el-col :span="8">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Total Sales</h4>
        <div
          id="campaign-v3"
          class="mt-2 c3 chartNum3"
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
  name: "DataCard3",
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("campaign-v3"));

      // (1)准备数据
      var data = {
        year: [
          [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
          [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
        ],
      };

      // 2. 指定配置和数据
      var option = {
        color: ["#0184d5", "#00d887"],
        tooltip: {
          // 通过坐标轴来触发
          trigger: "axis",
        },
        legend: {
          // 距离容器10%
          right: "10%",
          // 修饰图例文字的颜色
          textStyle: {
            color: "#4c9bfd",
          },
          // 如果series 里面设置了name，此时图例组件的data可以省略
          // data: ["邮件营销", "联盟广告"]
        },
        grid: {
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          show: true,
          borderColor: "rgba(122,115,116,.6)",
          containLabel: true,
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          // 去除刻度
          axisTick: {
            show: false,
          },
          // 修饰刻度标签的颜色
          axisLabel: {
            color: "rgba(69, 183, 135, .6)",
          },
          // 去除x坐标轴的颜色
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          // 去除刻度
          axisTick: {
            show: false,
          },
          // 修饰刻度标签的颜色
          axisLabel: {
            color: "rgba(69, 183, 135, .6)",
          },
          // 修改y轴分割线的颜色
          splitLine: {
            lineStyle: {
              color: "rgba(122,115,116,.6)",
            },
          },
        },
        series: [
          {
            name: "新增粉丝",
            type: "line",
            stack: "总量",
            // 是否让线条圆滑显示
            smooth: true,
            data: data.year[0],
          },
          {
            name: "新增游客",
            type: "line",
            stack: "总量",
            smooth: true,
            data: data.year[1],
          },
        ],
      };
      // 3. 把配置和数据给实例对象
      myChart.setOption(option);

      // 重新把配置好的新数据给实例对象
      myChart.setOption(option);
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