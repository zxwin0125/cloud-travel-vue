<template>
  <div class="des_xgll">
    <Destinationtop />
    <!-- 热门目的地 -->
    <Destinationveiw />
    <!-- 图片风景分割线 -->
    <Destinationdev />
    <!-- 丽江风情 -->
    <Destinationplace :placeInfo="xgll_Info" />
  </div>
</template>

<script>
import Destinationtop from "../common/Destinationtop";
import Destinationveiw from "../common/Destinationveiw";
import Destinationdev from "../common/Destinationdev";
import Destinationplace from "../common/Destinationplace";

import { getDes_xgll } from "@/api/getData.js";

export default {
  name: "des_xgll",
  components: {
    Destinationtop,
    Destinationveiw,
    Destinationdev,
    Destinationplace,
  },
  data() {
    return {
      xgll_Info: [],
    };
  },
  create() {},
  mounted() {
    this.xgllInfo();
  },
  methods: {
    async xgllInfo() {
      // 捕获异常
      try {
        // 等待异步方法执行完成
        const result = await getDes_xgll();
        console.log("目的地 xgll 数据", result.data.data);
        this.xgll_Info = result.data.data;
      } catch (err) {
        console.log("err", err);
      }
    },
  },
};
</script>
<style scoped>
</style>