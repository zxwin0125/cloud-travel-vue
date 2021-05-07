<template>
  <div class="ticketsMain">
    <el-row>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" :span="12">
        <div class="grid-content text-element">
          <div class="text-element01">
            <h2>
              玉龙雪山: 5A<br />
              <strong>¥199</strong>
            </h2>
            <p>
              <strong>景点地址： </strong>
              丽江市玉龙县丽江古城（玉龙雪山风景区）
              <br />
              <strong>开放时间： </strong>
              开园中；08:00-17:00开放（16:00停止入园）
              <br />
              <strong>官方电话： </strong>
              0888-5131068,0888-5161501,0888-5162140...
              <br />
            </p>
            <div>
              <router-link tag="a" to="/tickets_pay">
                <el-button type="primary">立即抢购</el-button>
              </router-link>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" :span="12">
        <div class="grid-content text-element">
          <div class="text-elemen02">
            <img
              src="../../../assets/img/Tickets/TicketsMain/LI_29.jpg"
              alt=""
            />
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" :span="12">
        <div class="grid-content text-element">
          <div class="text-elemen02">
            <img
              src="../../../assets/img/Tickets/TicketsMain/LI_19.jpg"
              alt=""
            />
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" :span="12">
        <div class="grid-content text-element">
          <div class="text-element01">
            <h2>
              玉龙雪山: 5A<br />
              <strong>¥199</strong>
            </h2>
            <p>
              <strong>景点地址： </strong>
              丽江市玉龙县丽江古城（玉龙雪山风景区）
              <br />
              <strong>开放时间： </strong>
              开园中；08:00-17:00开放（16:00停止入园）
              <br />
              <strong>官方电话： </strong>
              0888-5131068,0888-5161501,0888-5162140...
              <br />
            </p>
            <div>
              <router-link tag="a" to="/tickets_pay">
                <el-button type="primary">立即抢购</el-button>
              </router-link>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" :span="12">
        <div class="grid-content text-element">
          <div class="text-element01">
            <h2>
              玉龙雪山: 5A<br />
              <strong>¥199</strong>
            </h2>
            <p>
              <strong>景点地址： </strong>
              丽江市玉龙县丽江古城（玉龙雪山风景区）
              <br />
              <strong>开放时间： </strong>
              开园中；08:00-17:00开放（16:00停止入园）
              <br />
              <strong>官方电话： </strong>
              0888-5131068,0888-5161501,0888-5162140...
              <br />
            </p>
            <div>
              <router-link tag="a" to="/tickets_pay">
                <el-button type="primary">立即抢购</el-button>
              </router-link>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" :span="12">
        <div class="grid-content text-element">
          <div class="text-elemen02">
            <img
              src="../../../assets/img/Tickets/TicketsMain/LI_27.jpg"
              alt=""
            />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "TicketsMain",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.ticketsMain {
  padding-top: 40px;

  .el-row {
    padding-top: 40px;

    .text-element01 {
      margin-top: 20px;
      text-align: center;

      h2 {
        font-family: "Montserrat", sans-serif;
        font-size: 2.8rem;
        color: #5bc3cc;
        font-weight: bold;
      }

      strong {
        font-weight: bold;
      }

      p {
        color: #000000;
        letter-spacing: normal;
        line-height: 30px;
        padding: 2.5rem;
        margin: 0;
        font-style: normal;
        font-weight: 100 !important;
      }
    }

    .text-elemen02 {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: center;
      img {
        border-radius: 15px;
        margin-left: 0 auto;
        width: 85%;
      }
    }
  }
}
</style>