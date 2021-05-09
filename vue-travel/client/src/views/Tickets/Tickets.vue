<template>
  <div class="tickets">
    <Swiper :imgs="imgs" />

    <TicketsTitle />

    <TicketsMain />

    <TicketsTitle />

    <!-- 票单页面开始 -->
    <TicketsItem :ticketList="ticketList"/>
  </div>
</template>

<script>
import { getMainTicket } from "@/api/getData.js";

import Swiper from "../../components/Swiper";
import TicketsTitle from "../Tickets/components/TicketsTitle";
import TicketsMain from "../Tickets/components/TicketsMain";
import TicketsItem from "../Tickets/components/TicketsItem";


export default {
  name: "Tickets",
  components: {
    Swiper,
    TicketsTitle,
    TicketsMain,
    TicketsItem,
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
  },
  mounted(){
    //当页面渲染完成时调用方法获取数据
    this.ticketInfo()
  },
  // 定义方法
  methods: {
    //获取门票信息
    async ticketInfo(){
        try{
          const result = await getMainTicket()
          this.ticketList = result.data.data;
        }catch(error){
            console.log(error)
        }
    }
  },
  
};
</script>


<style lang="scss" scoped>

</style>