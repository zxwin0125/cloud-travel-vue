<template>
  <div id="app">
    <!-- 导航栏 -->
    <Nav></Nav>
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
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>