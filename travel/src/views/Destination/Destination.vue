<template>
  <div id="destination">
    <Nav/>
    <h1>这是目的地页面</h1>
    <!-- <router-link to="/destination_des" exact>目的地详情</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from '../../components/Nav'
export default {
  name: 'Destination',
  components: {
    Nav
  }
}
</script>