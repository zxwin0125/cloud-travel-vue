<template>
  <div id="app">
    <!-- 导航栏 -->
    <Nav />
    <!-- 视图 -->
    <router-view />
    <!-- 底部 -->
    <Footer />
  </div>
</template>
<script>
  // 导入组件模块
  import Nav from 'components/Nav.vue'
  import Footer from 'components/Footer'

  import jwt_decode from "jwt-decode";
  export default {
    name: "App",
    components: {
      Nav,
      Footer
    },
    create() {
      if (localStorage.eleToken) {
        const decode = jwt_decode(localStorage.eleToken);
        this.$store.dispatch("setIsAutnenticated", !this.isEmpty(decode));
        this.$store.dispatch("setUserInfo", decode)
      }
    },
    methods: {
      isEmpty(value) {
        return (
          value === undefined || 
          value === null ||
          (typeof value === "object" && Object.keys(value).length === 0) ||
          (typeof value === "string" && value.trim().length === 0)
        )
      }
    }
  }
</script>
<style>
  @import url(assets/css/global.css);

  #app {
    width: 100%;
    height: 100%;
  }
</style>