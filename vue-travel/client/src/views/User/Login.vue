<template>
  <div class="login">
    <el-container>
      <el-main>
        <el-row>
          <el-col :xs="18" :sm="12" :md="9" :lg="9" :xl="9">
            <!-- form表单 -->
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              status-icon
            >
              <h2 class="form-signin-heading">快来登陆吧!</h2>
              <el-form-item prop="user_name">
                <el-input
                  type="text"
                  placeholder="用户名"
                  v-model="ruleForm.user_name"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item prop="user_password">
                <el-input
                  type="user_password"
                  placeholder="密码"
                  v-model="ruleForm.user_password"
                  autocomplete="off"
                  show-password
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-checkbox size="small">记住我</el-checkbox>
                <div class="goRegister">去注册</div>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  class="loginBtn"
                  @click="submitForm('ruleForm')"
                  >立即登陆</el-button
                >
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
//登录接口
import { login } from "@/api/getData.js";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      // 表单信息
      ruleForm: {
        user_name: "",
        user_password: "",
      },

      rules: {
        user_name: [
          {
            required: true,
            message: "用户名不能为空!",
            trigger: "blur",
          },
        ],
        user_password: [
          {
            required: true,
            message: "密码不能为空!",
            trigger: "blur",
          },
          {
            min: 6,
            max: 30,
            message: "长度在 6 到 30 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    // 登陆方法
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login().then(res => {
            // 登录成功
            const { token } = res.data;
            localStorage.setItem("eleToken", token);

            // 解析token
            const decode = jwt_decode(token);
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });

      event.preventDefault();
      // 调用登陆接口
      login(this.ruleForm.user_name, this.ruleForm.user_password).then(
        (res) => {
          console.log(res.data);
          // 拿到 token，存储到本地
          localStorage.setItem("token", res.data.data);
          localStorage.setItem("userid", res.data.id);
          localStorage.setItem("user_name", res.data.user_name);
          localStorage.setItem("userImg", res.data.user_headPic);
          //保存登录用户的信息到Vuex的store
          this.$store.state.userInfo = {
            userid: res.data.id,
            user_name: res.data.user_name,
            userImg: res.data.user_headPic,
          };
          // console.log(res.data)
          if (res.data.code == 200) {
            // 登录成功，跳转到个人中心
            this.$message({
              message: "恭喜你，登陆成功",
              type: "success",
            });

            // 跳转页面, 根据业务需要
            this.$router.push({ path: "/" });
          } else {
            this.$message.error("登陆失败");
          }
        }
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/img/User/Personal01.webp);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  .el-main {
    margin-top: 8%;

    .el-row {
      display: flex;
      justify-content: center;

      .el-col {
        display: flex;
        justify-content: center;
        background-color: rgba(81, 196, 211, 0.7);

        .el-form {
          width: 316px;
          padding: 15px;
          margin: 0 auto;

          h2 {
            font-size: 24px;
            margin-bottom: 10px;
            color: antiquewhite;
            margin-top: 20px;
            font-weight: 500;
          }

          .el-checkbox__label {
            display: inline-block;
            padding-left: 10px;
            line-height: 19px;
            font-size: 12px;
          }

          .goRegister {
            float: right;
            color: #555;
            font-size: 12px;
          }

          .loginBtn {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>