<template>
  <section class="tourItem">
    <el-col :span="8" class="tour_item">
      <div class="tour_img">
        <img :src="imgs" alt="" />
        <h3>{{ tourItemData.tour_title }}</h3>
      </div>
    </el-col>
  </section>
</template>

<script>
export default {
  name: "tourItem",
  props: {
    tourItemData: {
      type: Object,
    },
  },
  data() {
    return {
      imgs: require("@/assets/img/Home/tour/" +
        this.tourItemData.tour_img +
        ".jpg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.el-col {
  position: relative;
  height: 300px;
  padding-right: 15px;
  padding-left: 15px;
  .tour_img {
    img {
      width: 100%;
      height: 100%;
    }

    h3 {
      margin-top: -50px;
      margin-left: 20px;
      color: #fff;
      font-size: 18px;
      font-weight: 300;
    }
  }
}
</style>