<template>
  <section class="homeConnect">
    <el-container>
      <el-row :span="24" class="ding">
        <div class="ding01">
          <el-col :span="4" class="connectHeading">
            <img src="@/assets/img/Home/contectIcon.png" alt="" />
          </el-col>
          <el-col :span="14" class="connectHeading">
            <h3>来一次说走就走的旅行吧!</h3>
            <p>旅行是一个自我发现的过程。真正的旅行让我们直面自我。</p>
          </el-col>
          <el-col :span="6" class="connectHeading">
            <el-col :span="20">
              <a href="#" class="btn">联系我们</a>
            </el-col>
          </el-col>
        </div>
      </el-row>
    </el-container>
  </section>
</template>
    
<script>
export default {
  name: "HomeConnect",
};
</script>
    
<style lang="scss" scoped>
.homeConnect {
  background-image: url("../../../assets/img/Home/service/bc.webp");
  padding: 2em 0;
  clear: both;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  .el-container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: 40px;
    margin-left: 40px;
    .el-row {
      width: 100%;
      margin-right: -15px;
      margin-left: -15px;
      display: flex;
      flex-direction: row;
      .ding {
        margin-top: 20px;
        .ding01 {
          border-radius: 5px;
          background: rgba(0, 0, 0, 0.5);
          .el-col {
            position: relative;
            min-height: 1px;
            padding-right: 15px;
            padding-left: 15px;
          }
          .connectHeading {
            margin-left: 0px;
            margin-bottom: 2em;
            img {
              width: 100%;
              border-radius: 5px;
            }
            h3 {
              color: #fff;
              font-size: 24px;
              margin-top: 20px;
              margin-bottom: 10px;
              font-family: inherit;
              font-weight: 500;
              line-height: 1.1;
            }
            p {
              font-size: 18px;
              line-height: 1.5;
              color: rgba(255, 255, 255, 0.5);
              margin-bottom: 20px;
            }
            .btn {
              font-family: 微软雅黑;
              font-size: 16px;
              font-weight: 400;
              margin-right: 4px;
              margin-bottom: 4px;
              padding: 7px 5px;
              border: none !important;
              border-radius: 5px;
              background: cadetblue;
              color: #fff;
              display: block;
              text-align: center;
              width: 90px;
            }
          }
        }
      }
    }
  }
}

// .ding div:nth-child(2) {
//   margin-top: 25px;
// }

// .ding div:last-child {
//   margin-top: 25px !important;
// }
</style>
    