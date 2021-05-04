<template>
  <!-- 热门目的地 -->
  <div id="destinationveiw">
      <section class="gallery" id="gallery">
          <el-row>
              <el-col :span="1">
                  <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="22">
                  <div class="grid-content bg-purple-light" id="container">
                      <div class="gallery-details">
                          <div class="gallery-header center01">
                              <h2>热门景点</h2>
                              <p>出去走走吧，外面的世界真的很精彩！</p>
                          </div>
                          <div class="gallery-box">
                              <div class="gallery-content">
                                  <div class="filtr-container">
                                      <el-row>
                                          <el-col :span="12">
                                              <div class="filtr-item">
                                                  <img src="@/assets/img/Destination/destinationveiw/g1.jpg" alt="" />
                                                  <div class="item-title">
                                                      <a href="#">丽江</a>
                                                      <p>
                                                          <span>放松心灵</span>
                                                          <span>享受生活</span>
                                                      </p>
                                                  </div>
                                              </div>
                                          </el-col>
                                          <el-col :span="12">
                                              <div class="filtr-item">
                                                  <img src="@/assets/img/Destination/destinationveiw/g2.jpg" alt="" />
                                                  <div class="item-title">
                                                      <a href="#">大理</a>
                                                      <p>
                                                          <span>风花雪月</span>
                                                          <span>自然安逸</span>
                                                      </p>
                                                  </div>
                                              </div>
                                          </el-col>
                                      </el-row>
                                      <el-row>
                                          <el-col :span="8">
                                              <div class="filtr-item">
                                                  <img src="@/assets/img/Destination/destinationveiw/g3.jpg" alt="" />
                                                  <div class="item-title">
                                                      <a href="#">昆明</a>
                                                      <p>
                                                          <span>和煦阳光</span>
                                                          <span>历史古城</span>
                                                      </p>
                                                  </div>
                                              </div>
                                          </el-col>
                                          <el-col :span="8">
                                              <div class="filtr-item">
                                                  <img src="@/assets/img/Destination/destinationveiw/g4.jpg" alt="" />
                                                  <div class="item-title">
                                                      <a href="#">玉溪</a>
                                                      <p>
                                                          <span>云烟之乡</span>
                                                          <span>极致风光</span>
                                                      </p>
                                                  </div>
                                              </div>
                                          </el-col>
                                          <el-col :span="8">
                                              <div class="filtr-item">
                                                  <img src="@/assets/img/Destination/destinationveiw/g5.jpg" alt="" />
                                                  <div class="item-title">
                                                      <a href="#">普洱</a>
                                                      <p>
                                                          <span>茶香茶色</span>
                                                          <span>品尝人生</span>
                                                      </p>
                                                  </div>
                                              </div>
                                          </el-col>
                                          <!-- </el-row>
                   <el-row> -->
                                          <el-col :span="16">
                                              <div class="filtr-item">
                                                  <img src="@/assets/img/Destination/destinationveiw/g6.jpg" alt="" />
                                                  <div class="item-title">
                                                      <a href="#">曲靖</a>
                                                      <p>
                                                          <span>生态园林</span>
                                                          <span>自然氧吧</span>
                                                      </p>
                                                  </div>
                                              </div>
                                          </el-col>
                                      </el-row>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </el-col>
              <el-col :span="1">
                  <div class="grid-content bg-purple"></div>
              </el-col>
          </el-row>
      </section>
  </div>
  </template>
  
  <script>
  export default {
      name: "Destinationveiw",
      data() {
          return {};
      },
  };
  </script>
  
  <style scoped>
  /* =========================热门目的地========================== */
  .grid-content {
      min-height: 36px;
  }
  
  .filtr-container .el-col {
      padding-right: 15px;
      padding-left: 15px;
  }
  
  .gallery {
      background: #f9f9f9;
  }
  
  .gallery-details {
      margin-top: 85px;
      margin-bottom: 80px;
  }
  
  .gallery-header h2 {
      position: relative;
      color: #565a5c;
      font-size: 30px;
      font-weight: 500;
      text-transform: capitalize;
      font-family: "Poppins", sans-serif;
      padding-bottom: 14px;
      margin: 0;
  }
  
  .gallery-header p {
      position: relative;
      color: #aaa;
      font-size: 16px;
      font-family: "Poppins", sans-serif;
      margin: 0;
      margin-top: 17px;
  }
  
  .item-title p {
      width: 200px;
  }
  
  .gallery-content {
      margin-top: 62px;
  }
  
  .conter01 p {
      width: 100%;
  }
  
  .filtr-container .filtr-item {
      width: 100%;
      height: 100%;
      overflow: hidden;
      float: left;
      position: relative;
      margin-bottom: 30px;
      overflow: hidden;
  }
  
  .filtr-container .filtr-item img {
      width: 100%;
      height: 100%;
      transition: 0.5s;
      border-radius: 5px;
  
  }
  
  .item-title {
      position: absolute;
      background: transparent;
      width: 170px;
      height: 60px;
      margin-bottom: -36px;
      transition: all 0.6s linear;
  }
  
  @media screen and (max-width: 1199px) {
      .item-title {
          bottom: 6%;
          left: 15px;
      }
  }
  
  @media screen and (min-width: 1199px) {
      .item-title {
          bottom: 20%;
          left: 60px;
      }
  }
  
  .item-title a {
      text-decoration: none;
      padding: 0;
      margin: 0;
      color: #fff;
      font-size: 24px;
      text-transform: capitalize;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      margin-bottom: 3px;
      transition: all 0.6s linear;
      display: inline-block;
  }
  
  .item-title p {
      color: #fff;
      font-size: 16px;
      text-transform: capitalize;
      font-family: "Poppins", sans-serif;
      margin: 0;
      transition: all 0.6s linear;
  }
  
  .item-title p span {
      padding-right: 20px;
  }
  
  .center01 {
      text-align: center;
  }
  </style>
  