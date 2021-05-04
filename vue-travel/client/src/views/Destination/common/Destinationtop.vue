<template>
  <!-- 顶部大图 -->
  <div id="destinationtop">
      <el-row>
          <el-col :span="24">
              <div class="jumbotron ">
                  <section class="container">
                      <h1 class="animate__animated animate__bounce">Hello, Yunnan!</h1>
                      <p>
                          <a class="btn btn-primary btn-lg" href="../destination/destination_des" role="button">了解更多...</a>
  
                      </p>
                  </section>
              </div>
              <!-- <router-link to="/destination_des" exact>目的地详情</router-link> -->
              <!-- <router-view></router-view> -->
          </el-col>
      </el-row>
  </div>
  </template>
  
  <script>
  export default {
      name: "Destinationtop",
      components: {},
      data() {
          return {};
      },
  };
  </script>
  
  <style scoped>
  a {
      display: block;
      width: 80px;
      background-color: #5cb3cc;
      color: #fff;
      border-radius: 5px;
      text-align: center;
      line-height: 30px;
      margin-top: 20px;
      margin-left: 140px;
      padding: 5px;
  
  }
  
  .jumbotron {
      background: url("../../../assets/img/Destination/blog01.jpg") no-repeat;
      background-size: 100% auto;
      width: 100%;
      height: 580px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
  }
  
  .jumbotron .container {
      position: relative;
      top: 140px;
      margin-left: 100px;
  }
  
  .jumbotron .container h1 {
      font-weight: 500;
      font-size: 63px;
      font-family: "Alegreya Sans";
  
  }
  
  @media screen and (max-width: 512px) {
      .jumbotron .container {
          width: 300px;
          position: relative;
          top: 100px;
          left: 20px;
      }
  }
  </style>
  