<template>
  <div id="nav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <router-link to="/" exact>首页</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <router-link to="/destination" exact="">目的地</router-link>
        <el-menu-item index="2-1">丽江</el-menu-item>
        <el-menu-item index="2-2">大理</el-menu-item>
        <el-menu-item index="2-3">昆明</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <router-link to="/strategy" exact>云攻略</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/community" exact>云社区</router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to="/tickets" exact>云商城</router-link>
      </el-menu-item>
      <el-menu-item index="6">
        <router-link to="/dataView" exact>云数据</router-link>
      </el-menu-item>
      <el-menu-item index="7">
        <router-link to="/users" exact>个人中心</router-link>
      </el-menu-item>
      <el-button type="success" icon="el-icon-user">
        <router-link to="/login" exact>登陆</router-link>
      </el-button>
      <el-button type="primary" icon="el-icon-edit" >
        <router-link to="/register" exact>注册</router-link>
      </el-button>
      
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Nav",
  components: {},
  data(){
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>


<style scoped>

/* a链接 */
a {
  display: inline-block;
  width: 100%;
  height: 100%;
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}


/* 登陆注册按钮 */
.el-button {
  float: right;
  margin-top: 10px;
  color: #ffffff;
}

.el-button--primary {
  margin-right: 10px;
}

.el-button--success {
  margin-right: 20px;
}

</style>