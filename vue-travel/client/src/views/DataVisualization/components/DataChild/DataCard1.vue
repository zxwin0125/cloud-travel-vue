<template>
  <!-- <section id="DataCard1"> -->
  <el-col :span="8">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Total Sales</h4>
        <div
          id="campaign-v1"
          class="mt-2 c3 chartNum1"
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
  name: "DataCard1",
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("campaign-v1"));

      // 指定图表的配置项和数据
      var option = {
        color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },

        legend: {
          bottom: "0%",
          // 修改小图标的大小
          itemWidth: 10,
          itemHeight: 10,
          // 修改图例组件的文字为 12px
          textStyle: {
            color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
            fontSize: "12",
          },
        },
        series: [
          {
            name: "年龄分布",
            type: "pie",
            // 这个radius可以修改饼形图的大小
            // radius 第一个值是内圆的半径 第二个值是外圆的半径
            radius: ["40%", "60%"],
            center: ["50%", "45%"],
            avoidLabelOverlap: false,
            // 图形上的文字
            label: {
              show: false,
              position: "center",
            },
            // 链接文字和图形的线是否显示
            labelLine: {
              show: false,
            },
            data: [
              { value: 1, name: "10岁以下" },
              { value: 4, name: "20-29岁" },
              { value: 2, name: "30-39岁" },
              { value: 2, name: "40-49岁" },
              { value: 1, name: "50岁以上" },
            ],
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