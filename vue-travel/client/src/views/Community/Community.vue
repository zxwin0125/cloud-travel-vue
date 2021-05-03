<template>
  <div class="community">
    <!--顶部搜索-->
    <!-- <Communitysearch /> -->
    <h2>社区</h2>
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="20">
        <el-row>
          <!-- 主要内容的左边 -->
          <!-- <Commityleft /> -->
          <!-- 主要内容的右边 -->
          <!-- <Commityright /> -->
          <el-col :span="2">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <Footer />
  </div>
</template>

<script>
// import Communitysearch from "../Community/components/Commitysearch";
// import Commityleft from "../Community/components/Commityleft";
// import Commityright from "../Community/components/Commityright";
export default {
  name: "Community",
  components: {
    // Communitysearch,
    // Commityleft,
    // Commityright,
  },
};
</script>

<style lang="scss" scoped>
.grid-content {
  min-height: 36px;
}
</style>