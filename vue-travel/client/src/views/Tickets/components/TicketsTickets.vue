<template>
  <div id="ticketsTickets">
    <el-row>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" :span="8" 
        v-for="item in ticketListData"
        :key="item.ticket_id">
        <div class="grid-content bg-purple text-element03">
          <div class="center01">
            <div>
              <div>
                <div class="text-center04" style="width: 99%; height: 90px">
                  <span>{{item.ticket_title}}</span>
                  <div class="text-center05">
                    <span>¥{{item.ticket_price}}</span>
                  </div>
                </div>
              </div>

              <ul>
                <li>{{item.ticket_travel_time}}</li>
                <!-- <li>{{item.ticket_infoTp}}</li>
                <li>{{item.ticket_infoPs}}</li> -->
              </ul>
              <div class="center02">
                <el-button type="primary" @click="toPay(item.ticket_infoID,item.ticket_infoTitle,item.ticket_infoPrice)">                 
                  立即抢购
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </el-col>

    </el-row>
  </div>
</template>

<script>
  export default {
    name: "TicketsTickets",
    components: {},
    props: {
      ticketList: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        ticketListData: []
      };
    },
    watch: {
      ticketList() {
        console.log('56556',this.ticketList)
        this.ticketListData = this.ticketList
      }
      
    },
    mounted() {
      this.ticket()
    },
    methods: {
      ticket() {
        console.log('9090',this.ticketList)
      },
      toPay(id,title,price){
        this.$router.push(`/tickets_pay/?id=${id}&title=${title}&price=${price}`)
      }
    },
    
  };
</script>
<style lang="scss" scoped>
  /**----------------------门票设置 */
  .el-col {
    border-radius: 4px;
    display: flex;
    justify-content: space-around;
  }

  .text-element03 {
    padding: 1rem;
    background: #efefef;
    position: relative;
    margin-bottom: 80px;
  }

  .text-center04 {
    background-image: url(../../../assets/img/Tickets/TicketsTickets/a.jpg);
    margin: 0 auto;
    width: 90%;
    display: flex;
    justify-content: center;
    flex-flow: column;
  }

  .text-center04 span {
    width: 100%;
    display: block;
    font-size: 1.2em;
    text-align: center;
    color: white;
  }

  .text-center05 span {
    width: 100%;
    display: block;
    font-size: 1.2em;
    text-align: center;
    color: #5bc3cc;
    font-weight: bold;
  }

  li {
    padding: 0.4rem;
    border-bottom: 1px solid #d8d7d7;
    text-align: center;
  }

  .center02 {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  /**----------------------- */
</style>