<template>
  <div class="des_km">
    <Destinationtop />
    <!-- 热门目的地 -->
    <Destinationveiw />
    <!-- 图片风景分割线 -->
    <Destinationdev />
    <!-- 丽江风情 -->
    <Destinationplace :placeInfo="km_Info" />
  </div>
</template>

<script>
import Destinationtop from "../common/Destinationtop";
import Destinationveiw from "../common/Destinationveiw";
import Destinationdev from "../common/Destinationdev";
import Destinationplace from "../common/Destinationplace";

import { getDes_km } from "@/api/getData.js";

export default {
  name: "des_km",
  components: {
    Destinationtop,
    Destinationveiw,
    Destinationdev,
    Destinationplace,
  },
  data() {
    return {
      km_Info: [],
    };
  },
  create() {},
  mounted() {
    this.kmInfo();
  },
  methods: {
    async kmInfo() {
      // 捕获异常
      try {
        // 等待异步方法执行完成
        const result = await getDes_km();
        console.log("目的地 km 数据", result.data.data);
        this.km_Info = result.data.data;
      } catch (err) {
        console.log("err", err);
      }
    },
  },
};
</script>
<style scoped>
</style>