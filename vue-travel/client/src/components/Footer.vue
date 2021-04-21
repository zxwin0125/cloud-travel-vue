<template>
  <section class="footer">
    <el-container>
      <el-row :span="24">
        <el-col :span="6">
          <p class="mb-4">
            <img
              src="@/assets/img/Home/logo.png"
              alt="Image"
              class="img_fluid"
            />
          </p>
          <p>
            从一张机票、一家酒店的订购，到一次暖心的接机服务、一张轻松融入当地的交通卡，让我们带你探索这个世界。
          </p>
          <p><a href="#">了解更多...</a></p>
        </el-col>
        <el-col :span="6">
          <h3 class="footer-heading">
            <span>云游记</span>
          </h3>
          <ul class="list-unstyled">
            <li><a href="#">关于</a></li>
            <li><a href="#">通知</a></li>
            <li><a href="#">服务</a></li>
            <li><a href="#">隐私</a></li>
            <li><a href="#">商家</a></li>
            <li><a href="#">我们团队</a></li>
          </ul>
        </el-col>
        <el-col :span="6">
          <h3 class="footer-heading">
            <span>优质服务</span>
          </h3>
          <ul class="list-unstyled">
            <li><a href="#">旅游资质</a></li>
            <li><a href="#">营业执照</a></li>
            <li><a href="#">投诉建议</a></li>
          </ul>
        </el-col>
        <el-col :span="6">
          <h3 class="footer-heading">
            <span>联系我们</span>
          </h3>
          <ul class="list-unstyled">
            <li><a href="#">友情链接</a></li>
            <li><a href="#">广告业务</a></li>
            <li><a href="#">加盟合作</a></li>
            <li><a href="#">代理合作</a></li>
            <li><a href="#">更多加盟</a></li>
          </ul>
        </el-col>
      </el-row>
      <el-row :span="24">
        <el-col :span="24">
          <div class="copyright">
            <p>Copyright &copy; 2020</p>
          </div>
        </el-col>
      </el-row>
    </el-container>
  </section>
</template>
    
<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>
    
<style lang="scss" scoped>
.footer {
  padding-top: 5rem;
  padding-bottom: 2rem;
  background: #f8f9fa;
  font-size: 15px;
  font-weight: 300;
  color: #888;
  .el-container {
    width: auto;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: 50px;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    .el-row {
      margin-right: -15px;
      margin-left: -15px;
      display: flex;
      flex-direction: row;
      .el-col {
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        .mb-4 {
          margin-bottom: 1.5rem;
        }

        p {
          margin-top: 0;
          margin-bottom: 1rem;
          font-family: "Muli";
          font-size: 13px;
          margin-top: 0;
          margin-bottom: 1rem;
          color: #888888;
          text-indent: 2rem;
        }

        a {
          color: #1089ff;
          text-decoration: none;
          background-color: transparent;
          &:hover {
            cursor: pointer;
            text-decoration: none;
          }
        }

        h3 {
          font-family: "Oswald", sans-serif;
          font-weight: 500;
          line-height: 1.2;
        }

        .footer-heading {
          width: 100%;
          font-size: 16px;
          color: #000;
          margin-bottom: 30px;
          text-transform: uppercase;

          span {
            width: 100%;
            border-bottom: 2px solid #1089ff;
          }
        }

        .list-unstyled {
          padding-left: 0;
          list-style: none;
        }

        ul {
          li {
            margin-bottom: 10px;
          }
        }
        .copyright {
          padding-top: 4rem;
          text-align: center;
        }
      }
    }
  }
}
</style>
    