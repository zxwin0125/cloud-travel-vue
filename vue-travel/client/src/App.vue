<template>
  <div id="app">
    <!-- 导航栏 -->
    <Nav></Nav>
    <!-- 视图 -->
    <router-view />
  </div>
</template>
<script>
  // 导入组件模块
  import Nav from '@/components/Nav.vue'
  export default {
    name: "App",
    components: {
      Nav
    }
  }
</script>
<style>
  @import url(assets/css/global.css);
  #app {
  width:100%;
  height: 100%;
}
</style>