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
                  type="password"
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
                <div class="goRegister" @click="toRegister">去注册</div>
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
// 引入 jwt-decode 解析 token
import jwt_decode from "jwt-decode";
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
    // 读取 cookie
    getCookie() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split(";"); // 这里显示的格式需要切割一下
        arr.map((item) => {
          var arr2 = item.split("="); // 再次切割
          var arr3 = arr2[0].trim(); // 去除前后空格
          if (arr3 == "user_name") {
            this.ruleForm.user_name = arr2[1]; // 保存到保存数据的地方
          } else if (arr3 == "user_password") {
            this.ruleForm.user_password = arr2[1];
          } else if (arr3 == "checked") {
            this.checked = Boolean(arr2[1]);
          }
        });
      }
    },

    // 登陆方法
    submitForm(formName) {
      /**
       * 当用户执行登录操作的时候，先看看用户名密码对不对
         若不对，就提示登录错误
         若对，就再看一下用户有没有勾选记住密码
         若没勾选，就及时清空cookie，回到最初始状态
         若勾选了，就把用户名和密码存到cookie中并设置7天有效期，以供使用
       */
      this.$refs[formName].validate((valid) => {
        // 表单自定义校验
        if (valid) {
          login(this.ruleForm.user_name, this.ruleForm.user_password).then(
            (res) => {
              console.log("login", res.data);

              if (res.data.code == "200") {
                this.$message.success("登录成功！");
                // 登录成功
                // 若复选框被勾选了，就调用设置cookie方法，把当前的用户名和密码和过期时间存到cookie中
                if (this.checked) {
                  // 传入账号名，密码，保存天数3个参数
                  this.setCookie(
                    this.ruleForm.user_name,
                    this.ruleForm.user_password,
                    7
                  );
                } else {
                  // 清空 Cookie
                  this.clearCookie();
                }

                // 存储 token
                const token = res.data.token;
                localStorage.setItem("eleToken", token);

                // 解析 token
                const decode = token;

                // 存储数据
                // this.$store.dispatch(
                //   "setIsAutnenticated",
                //   !this.isEmpty(decode)
                // );
                // this.$store.dispatch("setUser", decode);

                this.$router.push("/");
              } else {
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
                  default:
                    this.$message.error("登录失败！");
                }
                
              }
            }
          );
        } else {
          return false;
        }
      });
    },

    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
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
      window.document.cookie =
        "checked" +
        "=" +
        this.checked +
        ";path=/;expires=" +
        exdate.toGMTString();
    },

    // 清除 cookie
    clearCookie() {
      this.setCookie("", "", -1); // 修改2值都为空，天数为负1天就好了
    },

    // 去注册
    toRegister() {
      this.$router.push('/register')
    }
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