<template>
  <div id="users">
    <Nav />
    <!-- 头像 姓名 -->
    <Usertop />
    <Footer />
  </div>
</template>

<script>
  import Nav from '../../components/Nav'
  import Footer from '../../components/Footer'
  import Usertop from "../Person/components/Usertop";
  import { getUser } from "@/api/getData.js"
  export default {
    name: 'Users',
    components: {
      Nav,
      Footer,
      Usertop
    },
    data() {
      return {
        // 个人信息
        userInfo: []
      }
    },
    // 定义方法
    methods: {
      
    },
    created() {
      
    },
    mounted() {
      //当页面渲染完成时调用方法获取数据
      
    }

  }
</script>
<style lang="scss" scoped>
</style>