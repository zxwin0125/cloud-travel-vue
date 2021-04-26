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
  export default {
    name: "App",
    components: {
      Nav,
      Footer
    },
    create() {
      
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