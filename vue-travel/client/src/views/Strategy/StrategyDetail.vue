<template>
  <section class="strategyDetail">
    <h2>攻略详情</h2>
  </section>
</template>
<script>
// 导入接口API
// import { getDetailStrategy } from "@/api/getData.js";

export default {
  name: "StrategyDetail",
  components: {
  },
  data() {
    return {
    };
  },
  computed: {
  },
  created() {
      
  },
  mounted() {
    //当页面渲染完成时调用方法获取数据
    // this.getStrategyDetailData()
  },
  methods: {
    // 异步调用 StrategyDetail 接口
    async getStrategyDetailData() {
      alert(888)
      // // 捕获异常
      try {
        // 等待异步方法执行完成
        const result = await getDetailStrategy();
        console.log("攻略 Main 数据", result);
        // this.arts = result.data.data;
      } catch (err) {
        console.log("err", err);
      }
    }
  },
};
</script>

<style>
</style>
