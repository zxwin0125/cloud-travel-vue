<template>
  <div class="des_xsbn">
    <Destinationtop />
    <!-- 热门目的地 -->
    <Destinationveiw />
    <!-- 图片风景分割线 -->
    <Destinationdev />
    <!-- 丽江风情 -->
    <Destinationplace :placeInfo="xsbn_Info"/>
  </div>
</template>

<script>
import Destinationtop from "../common/Destinationtop";
import Destinationveiw from "../common/Destinationveiw";
import Destinationdev from "../common/Destinationdev";
import Destinationplace from "../common/Destinationplace";

import { getDes_xsbn } from "@/api/getData.js";

export default {
  name: "des_xsbn",
  components: {
    Destinationtop,
    Destinationveiw,
    Destinationdev,
    Destinationplace,
  },
  data() {
    return {
      xsbn_Info: [],
    };
  },
  create() {},
  mounted() {
    this.xsbnInfo();
  },
  methods: {
    async xsbnInfo() {
      // 捕获异常
      try {
        // 等待异步方法执行完成
        const result = await getDes_xsbn();
        console.log("目的地 xsbn 数据", result.data.data);
        this.xsbn_Info = result.data.data;
      } catch (err) {
        console.log("err", err);
      }
    },
  },
};
</script>
<style scoped>
</style>