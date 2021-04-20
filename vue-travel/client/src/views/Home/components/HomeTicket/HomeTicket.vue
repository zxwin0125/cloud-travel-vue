<template>
  <section class="homeTicket">
    <el-container>
      <el-header>
        <h2>热门游票</h2>
        <p>旅游需要好的选择，踏实省心.</p>
      </el-header>
      <el-main>
        <el-row>
          <TicketItem
            v-for="item in TicketData"
            :key="item.pack_id"
            :TicketItemData="item"
          />
        </el-row>
      </el-main>
    </el-container>
  </section>
</template>

<script>
import TicketItem from "./components/TicketItem";
export default {
  name: "HomeTicket",
  components: {
    TicketItem,
  },
  props: {
    TicketData: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.homeTicket {
  padding: 80px 0 90px;

  .el-container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: 100px;
    margin-left: 100px;

    .el-header {
      text-align: center;

      h2 {
        position: relative;
        color: #565a5c;
        font-size: 30px;
        font-weight: 500;
        text-transform: capitalize;
        font-family: "Poppins", sans-serif;
        margin: 0;
        padding-bottom: 14px;
      }
      p {
        position: relative;
        color: #828282;
        font-size: 16px;
        font-family: "Poppins", sans-serif;
        margin: 0;
        margin-top: 17px;
      }
    }
    .el-main {
      margin-top: 65px;
      .el-row {
        margin-right: -15px;
        margin-left: -15px;
      }
    }
  }
}
</style>