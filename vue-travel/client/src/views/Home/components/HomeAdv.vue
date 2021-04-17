<template>
  <section class="homeAdv">
    <el-container>
      <el-row>
        <el-col :span="8">
          <div class="single-service-box">
            <div class="service-img">
              <img src="@/assets/img/Home/adv/s1.png" alt="" />
            </div>
            <div class="service-content">
              <h2>
                <a href="#">选择你的的旅游目的地</a>
              </h2>
              <p>选择靠谱有趣的旅伴，拒绝平庸的指南!</p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single-service-box">
            <div class="service-img">
              <img src="@/assets/img/Home/adv/s2.png" alt="" />
            </div>
            <div class="service-content">
              <h2>
                <a href="#">选择精美民宿酒店</a>
              </h2>
              <p>让异地旅途可以多一种可能!</p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single-service-box">
            <div class="service-img">
              <img src="@/assets/img/Home/adv/s3.png" alt="" />
            </div>
            <div class="service-content">
              <h2>
                <a href="#">选择出行交通</a>
              </h2>
              <p>让出门旅行更快速，更优惠!</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-container>
  </section>
</template>

<script>
export default {
  name: "HomeAdv",
  components: {},
  data() {
    return {};
  },
};
</script>



<style lang="scss" scoped>
.homeAdv {
  position: relative;
  padding: 80px 0 54px;
  background-color: #f8f9fa;

  .el-container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: 35px;
    margin-left: 35px;

    .el-row {
      width: 100%;

      .el-col {
        position: relative;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;

        .single-service-box {
          display: flex;
          justify-content: space-evenly;

          .service-img img {
            border: none;
            max-width: 100%;
            height: auto;
          }

          .service-content {
            max-width: 268px;
            margin-left: 7px;
            margin-top: 6px;
            margin: 6px 0 30px 7px;
            text-align: center;

            h2 {
              margin: 0;
              color: #222222;
              text-transform: capitalize;

              a {
                color: #565a5c;
                font-size: 16px;
                text-transform: capitalize;
                font-family: "Poppins", sans-serif;
                font-weight: 500;
              }
            }

            p {
              color: #aaa;
              font-size: 14px;
              text-transform: inherit;
              font-family: "Poppins", sans-serif;
              margin: 0;
              margin-top: 17px;
            }
          }
        }
      }
    }
  }
}
</style>