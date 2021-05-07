<template>
  <div class="ticketsTitle">
    <!-- 热门推荐标题 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content text-center">
          <h2 class="sets_h2">热门推荐</h2>
          <p>Where do you wanna go? How much you wanna explore?</p>
        </div>
      </el-col>
    </el-row>
    <!-- 热门推荐标题结束 -->
  </div>
</template>

<script>
export default {
  name: "TicketsTitle",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.ticketsTitle {
  padding-top: 40px;

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    .sets_h2 {
      color: #565a5c;
      font-size: 30px;
      font-weight: 500;
      text-transform: capitalize;
      padding-bottom: 14px;
      margin-top: 20px;
      @extend %text;
    }
  }

  %text {
    text-align: center;
    font-family: "Poppins", sans-serif;
  }

  .text-center p {
    color: #aaa;
    font-size: 16px;
    margin-bottom: 12px;
    @extend %text;
  }
}
</style>