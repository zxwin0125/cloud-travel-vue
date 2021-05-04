<template>
  <div class="des_lj">
    <Destinationtop />
    <!-- 热门目的地 -->
    <Destinationveiw />
    <!-- 图片风景分割线 -->
    <Destinationdev />
    <!-- 丽江风情 -->
    <Destinationplace />
  </div>
</template>

<script>
import Destinationtop from "../common/Destinationtop";
import Destinationveiw from "../common/Destinationveiw";
import Destinationdev from "../common/Destinationdev";
import Destinationplace from "../common/Destinationplace";

import { getDes_lj } from "@/api/getData.js";

export default {
  name: "des_lj",
  components: {
    Destinationtop,
    Destinationveiw,
    Destinationdev,
    Destinationplace,
  },
  data() {
    return {
      lj_Info: {},
    };
  },
  create() {},
  mounted() {
    this.ljInfo();
  },
  methods: {
    async ljInfo() {
      // 捕获异常
      try {
        // 等待异步方法执行完成
        const result = await getDes_lj();
        console.log("目的地 lj 数据", result.data.data);
        this.lj_Info = result.data.data;
      } catch (err) {
        console.log("err", err);
      }
    },
  },
};
</script>
<style scoped>
</style>