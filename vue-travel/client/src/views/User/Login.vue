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
                <el-checkbox size="small" v-model="checked"
                  >记住密码</el-checkbox
                >
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
      checked: false,
    };
  },
  computed: {},
  created() {},
  mounted() {
    // 页面加载调用获取 cookie 值
    this.getCookie();
  },
  methods: {
    // 登陆方法
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // // 判断复选框是否被勾选，勾选则调用配置cookie方法
          // if (this.checked) {
          //   // 传入账号名，密码，保存天数3个参数
          //   this.setCookie(
          //     this.ruleForm.user_name,
          //     this.ruleForm.user_password,
          //     7
          //   );
          // } else {
          //   // 清空 Cookie
          //   this.clearCookie();
          // }

          login(this.ruleForm.user_name, this.ruleForm.user_password).then(
            (res) => {
              console.log("login", res.data);
              // 1. 错误情况
              switch (res.data.code) {
                case "401":
                  this.$message.error("抱歉，用户名不存在！");
                  break;
                case "402":
                  this.$message.error("抱歉，密码不能为空！");
                  break;
                case "403":
                  this.$message.error("抱歉，密码错误！");
                  break;
                case "500":
                  this.$message.error("抱歉，系统错误！");
                  break;
              }

              // 登录成功
              // const { token } = res.data;
              // localStorage.setItem("eleToken", token);

              // 解析token
              // const decode = jwt_decode(token);
            }
          );
        } else {
          return false;
        }
      });

      // event.preventDefault();
      // 调用登陆接口
      // login(this.ruleForm.user_name, this.ruleForm.user_password).then(
      //   (res) => {
      //     console.log(res.data);
      //     // 拿到 token，存储到本地
      //     localStorage.setItem("token", res.data.data);
      //     localStorage.setItem("userid", res.data.id);
      //     localStorage.setItem("user_name", res.data.user_name);
      //     localStorage.setItem("userImg", res.data.user_headPic);
      //     //保存登录用户的信息到Vuex的store
      //     this.$store.state.userInfo = {
      //       userid: res.data.id,
      //       user_name: res.data.user_name,
      //       userImg: res.data.user_headPic,
      //     };
      //     // console.log(res.data)
      //     if (res.data.code == 200) {
      //       // 登录成功，跳转到个人中心
      //       this.$message({
      //         message: "恭喜你，登陆成功",
      //         type: "success",
      //       });

      //       // 跳转页面, 根据业务需要
      //       this.$router.push({ path: "/" });
      //     } else {
      //       this.$message.error("登陆失败");
      //     }
      //   }
      // );
    },

    // 设置 cookie
    setCookie(user_name, user_password, exdays) {
      const exdate = new Date(); // 获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); // 保存的天数
      // 字符串拼接 cookie
      window.document.cookie =
        "user_name" +
        "=" +
        user_name +
        ";path=/;expires=" +
        exdate.toGMTString();
      window.document.cookie =
        "user_password" +
        "=" +
        user_password +
        ";path=/;expires=" +
        exdate.toGMTString();
    },

    // 读取 cookie
    getCookie() {
      if (document.cookie.length > 0) {
        const arr = document.cookie.split(";"); // 这里显示的格式需要切割一下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); // 再次切割
          // 判断查找相对应的值
          if (arr2[0] == "user_name") {
            this.ruleForm.user_name = arr2[1]; //保存到保存数据的地方
          } else if (arr2[0] == "user_password") {
            this.ruleForm.user_password = arr2[1];
          }
        }
        this.checked = true;
      }
    },

    // 清除 cookie
    clearCookie() {
      this.setCookie("", "", -1); // 修改2值都为空，天数为负1天就好了
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