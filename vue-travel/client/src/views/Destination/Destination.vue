<template>
  <div id="destination">
    <!-- 导航栏 -->
    <Nav />
    <Destinationtop />
    <!-- 热门目的地 -->
    <Destinationveiw />
    <!-- 图片风景分割线 -->
    <Destinationdev />
    <!-- 丽江风情 -->
    <Destinationplace />
    <Footer />
  </div>
</template>

<script>
  import Nav from '../../components/Nav';
  import Destinationtop from '../Destination/components/Destinationtop';
  import Destinationveiw from '../Destination/components/Destinationveiw';
  import Destinationdev from '../Destination/components/Destinationdev';
  import Destinationplace from '../Destination/components/Destinationplace';
  import Footer from '../../components/Footer';
  export default {
    name: 'Destination',
    components: {
      Nav,
      Footer,
      Destinationtop,
      Destinationveiw,
      Destinationdev,
      Destinationplace,
    }
  }
</script>
<style scoped>

</style>