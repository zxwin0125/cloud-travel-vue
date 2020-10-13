<template>
  <div id="login">
    <div class="container">
      <!-- form表单 -->
      <el-form>
        <el-form-item label="用户名">
          <el-input type="text"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked">记住我</el-checkbox>
          <a href="">立即注册</a>
        </el-form-item>
        <el-form-item>
          
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Nav from '../../components/Nav'
export default {
  name: 'Login',
  components: {
    Nav
  },
  data() {
    return {
      checked: false
    }
  }
}
</script>
<style scoped>
  #login {
    background-image: url(../../assets/img/Personal/login/Personal01.webp);
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
</style>