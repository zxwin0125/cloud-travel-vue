<template>
  <div class="tickets">
    <!-- 轮播图 -->
    <Swiper :imgs="imgs" />
    <!-- 轮播图 -->

    <!--文本导航开始  -->
    <TicketsTitle />
    <!-- 文本导航结束 -->

    <!-- 热门景区推荐开始 -->
    <TicketsMain />
    <!-- 热门景区推荐结束 -->
    
    <!--文本导航开始  -->
    <TicketsTitle />
    <!-- 文本导航结束 -->

    <!-- 票单页面开始 -->
    <TicketsTickets :ticketList="ticketList" />
  </div>
</template>

<script>
import Swiper from "../../components/Swiper";
import TicketsTitle from "../Tickets/components/TicketsTitle";
import TicketsMain from "../Tickets/components/TicketsMain";
import TicketsTickets from "../Tickets/components/TicketsTickets";
// import { getTicket } from "@/api/getData.js";

export default {
  name: "Tickets",
  components: {
    Swiper,
    TicketsTitle,
    TicketsMain,
    TicketsTickets,
  },
  
  data() {
    return {
      //轮播图图片地址数组
      imgs: [
        require("../../assets/img/Swiper/swiper01.png"),
        require("../../assets/img/Swiper/swiper02.png"),
        require("../../assets/img/Swiper/swiper03.png"),
        require("../../assets/img/Swiper/swiper04.png"),
        require("../../assets/img/Swiper/swiper05.png"),
      ],
      // 票务数据
      ticketList: []
    };
  },
  created() {
    this.$axios.get('/api/tickets').then(res => {
        console.log(res)
      })
  },
  // 定义方法
  methods: {
    //获取门票信息
    async ticketInfo(){
        try{
            this.$axios.get('/api/tickets')
            .then(res => {
              console.log(res)
              this.ticketList.push(res.data.data)
            })
            
            // if (result.data.code == 0) {
            //     this.videoList = result.data.data;
            // }
        }catch(error){
            console.log(error)
        }
    }
  },
  mounted(){
    //当页面渲染完成时调用方法获取数据
    this.ticketInfo()
  }
};
</script>


<style lang="scss" scoped>

</style>