<template>
  <!-- 风景分割线 -->
  <div id="destinationdev">
      <el-row>
          <el-col :span="22" id="feng" class="col-lg-12"> </el-col>
      </el-row>
  </div>
  </template>
  
  <script>
  export default {
      name: "Destinationdev",
      components: {},
      data() {
          return {};
      },
  };
  </script>
  
  <style scoped>
  #feng {
      width: 100%;
      height: 200px;
      margin-bottom: 80px;
      font-family: "Alegreya Sans";
      background-position: center center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
      background-image: url("../../../assets/img/Destination/back01.webp");
  }
  
  #feng::before {
      content: "";
      position: absolute;
      background-color: rgba(91, 95, 204, 0.6);
      width: 100%;
      height: 200px;
      left: 0;
  }
  
  #feng::after {
      content: "来一场说走就走的旅行~";
      font-size: 40px;
      color: #fff;
      position: absolute;
      width: 100%;
      height: 200px;
      text-align: center;
      line-height: 200px;
      left: 0;
  }
  
  @media screen and (max-width: 568px) {
      #feng::after {
          font-size: 28px;
      }
  }
  </style>
  