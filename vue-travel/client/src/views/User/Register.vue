<template>
  <div id="register">
    <el-container>
      <el-main>
        <el-row>
          <el-col :xs="18" :sm="12" :md="9" :lg="9" :xl="9">
            <!-- form表单 -->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" status-icon>
              <h2 class="form-title">快来注册账号吧!</h2>
              <el-form-item prop="username">
                <el-input type="text" placeholder="用户名" v-model="ruleForm.username" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item prop="pass">
                <el-input type="password" placeholder="密码" v-model="ruleForm.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item prop="checkpass">
                <el-input type="password" placeholder="确认密码" v-model="ruleForm.checkpass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item prop="phone">
                <el-input type="tel" placeholder="手机号" v-model="ruleForm.phone" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item prop="code">
                <el-input type="text" placeholder="验证码" class="codeInput" v-model="ruleForm.code" autocomplete="off">
                </el-input>
                <el-button type="success" size="small" class="codeBtn" @click="getCode()">获取验证码</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" class="registerBtn" @click="submitForm('ruleForm')">立即注册
                </el-button>
              </el-form-item>
              <router-link to="/login" class="gologin">已有账号？立即登陆</router-link>
            </el-form>

          </el-col>
        </el-row>
      </el-main>
    </el-container>

  </div>
</template>

<script>
  // 注册接口
  import { register } from "@/api/getData.js"
  // 验证码接口
  import { getCode } from "@/api/getData.js"
  export default {
    name: 'Register',
    components: {

    },
    data() {
      // 校验用户名
      var checkUserName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error("用户名不能为空!"))
        }
      }

      // 校验密码
      var checkPass = (rule, value, callback) => {
        if (!value) {
          callback(new Error('密码不能为空!'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      }

      // 校验确认密码
      var checkPass2 = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请确认密码!'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }

      // 校验手机号
      var checkPhone = (rule, value, callback) => {
        if (!value) {
          callback(new Error('手机号不能为空!'))
        } else {
          const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的手机号'));
          }
        }
      }

      // 校验验证码
      var checkCode = (rule, value, callback) => {
        if (!value) {
          callback(new Error('验证码不能为空!'))
        }
      }

      return {
        // 表单信息
        ruleForm: {
          username: '',
          pass: '',
          checkpass: '',
          phone: '',
          code: ''
        },
        rules: {
          username: [
            { validator: checkUserName, trigger: 'blur' }
          ],
          pass: [
            { validator: checkPass, trigger: 'blur' }
          ],
          checkpass: [
            { validator: checkPass2, trigger: 'blur' }
          ],
          phone: [
            { validator: checkPhone, trigger: 'blur' }
          ],
          code: [
            { validator: checkCode, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {

      // 获取验证码方法
      getCode() {
        getCode(this.ruleForm.phone).then(
          res => {
            if(res.data.data !== this.ruleForm.code) {
              // 验证码不正确
              this.$message.error('验证码不正确!');
            }
          }
        )

      },

      // 注册方法
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!!');
            return false;
          }
        });

        // preventDefault 方法
        // 取消事件的默认动作（阻止冒泡）
        event.preventDefault();
        // 调用注册接口
        register(this.ruleForm.username, this.ruleForm.pass, this.ruleForm.phone).then(
          res => {
            console.log('register', res)
            if (res.data.data == 0) {
              // 注册失败
              this.$message.error('用户名或手机号已存在!');
            } else {
              // 注册成功，跳转到登陆
              this.$message({
                message: '恭喜你，注册成功!',
                type: 'success'
              });
              this.$router.push({ path: '/login' })
            }
          }
        )
      },



    }
  }
</script>

<style lang="scss" scoped>
  #register {
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/User/Personal01.webp);
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }

  .el-main {
    margin-top: 8%;
  }

  .el-row {
    display: flex;
    justify-content: center
  }

  .el-col {
    display: flex;
    justify-content: center;
    background-color: rgba(81, 196, 211, 0.7)
  }

  .el-form {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }

  .el-form h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: antiquewhite;
    margin-top: 20px;
    font-weight: 500;
  }

  .codeInput {
    width: 62%;
  }

  .codeBtn {
    margin-left: 16px;
  }

  .registerBtn {
    width: 100%;
  }

  .gologin {
    float: right;
    color: #555;
    font-size: 12px;
  }
</style>