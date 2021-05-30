<template>
  <div id="destinationDesRecom">
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple-light">
          <div class="scenic02">
            <img src="../../../assets/img/Destination/14.webp" alt="" />
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <div class="scenic02">
            <img src="../../../assets/img/Destination/c.jpg" alt="" />
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple-light">
          <div class="scenic02">
            <img src="../../../assets/img/Destination/e.jpg" alt="" />
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <div class="scenic02">
            <img src="../../../assets/img/Destination/LI_18.jpg" alt="" />
          </div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "DestinationDesRecom",
  };
</script>
<style lang="scss" scoped>
  .grid-content {
    min-height: 36px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .scenic02 {
    height: 200px;
    width: 100%;
    background-image: url(/img/13.92451653.webp);
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: #cccccc;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    margin-left: 27px;
    border-radius: 5px;
  }

  .scenic02 img {
    border-radius: 5px;
  }
</style>