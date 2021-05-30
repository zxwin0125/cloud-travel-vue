<template>
  <el-col :span="2" :offset="1">
    <div class="grid-content bg-purple-dark">
      <!-- 左侧点赞 -->
      <div class="fun_icon">
        <div>
          <div class="_1pUUKr">
            <div class="_2VdqdF" aria-label="给文章点赞">
              <img src="../../../assets/img/Strategy/str_dian1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-col>
</template>
<script>
export default {};
</script>
<style  scoped>
/* 页面左侧 */
/* 点赞 */
#thumbUp {
  position: fixed;
  top: 500px;
  left: 30px;
  cursor: pointer;
}
._1pUUKr,
._2VdqdF {
  display: flex;
  align-items: center;
}
._1pUUKr {
  flex-direction: column;
  margin-bottom: 16px;
  cursor: pointer;
}
._2VdqdF {
  justify-content: center;
  width: 60px;
  height: 60px;
  font-size: 18px;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  background-color: #5cb3cc;
}
._1pUUKr,
._2VdqdF {
  display: flex;
  align-items: center;
}
</style>