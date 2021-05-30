<template>
  <div id="destinationDesMain">
    <el-col :span="10">
      <div class="grid-content bg-purple">
        <div class="tickets_header_01">
          <h3>玉龙雪山 4.5 /5分</h3>
          <h5>丽江景点人气榜第1名</h5>

          <p>
            <em>景点地址:</em>
            丽江市玉龙县丽江古城以北15公里处（玉龙雪山风景区）
          </p>
          <p><em>开放时间:</em> 每日08:00开放（16:00停止入园）</p>
          <p><em>官方电话： </em> 0888-5131068,0888-5161501,0888-5162140...</p>
          <router-link tag="a" to="/tickets_pay">
            <el-button type="primary">立即抢购</el-button>
          </router-link>
        </div>
      </div>
    </el-col>
    <el-col :span="2">
      <div class="grid-content bg-purple-light"></div>
    </el-col>
  </div>
</template>
  
  <script>
export default {
  name: "DestinationDesMain",
};
</script>
  
  <style lang="scss" scoped>
.grid-content {
  min-height: 36px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tickets_header_01 {
  width: 100%;
  line-height: 60px;
  height: 400px;
  background-color: #cccccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 60px;
  border-radius: 5px;
}

.tickets_header_01 h3 {
  color: red;
  font-size: x-large;
  font-weight: 600;
}
</style>
  