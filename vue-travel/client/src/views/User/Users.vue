<template>
  <div class="users">
    <Usertop />
    
  </div>
</template>

<script>
  
  import Usertop from "../Person/components/Usertop";
  import { getUser } from "@/api/getData.js"
  export default {
    name: 'Users',
    components: {
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