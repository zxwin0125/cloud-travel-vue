<template>
  <div id="destinationDesContent">
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="14">
        <div class="grid-content bg-purple-light">
          <div class="scenic01">
            <div class="scenic01_01">
              <h3>景点介绍:</h3>
              <div>
                <p>
                  玉龙雪山是丽江知名景点之一，也是纳西族心中的神山，一共13座山峰连绵起伏，
                  似银龙飞舞，因此得名。景区内可以直接乘坐索道上山，轻松欣赏高海拔冰川的瑰丽，
                  是很多游客来此游玩的亮点。
                </p>
                <p>
                  <em>雪山概述:</em> 玉龙雪山以"险、奇、美、秀"著称。
                  从山脚到山顶，有亚热带、温带、寒带等多级景观逐级。山脚的甘海子，
                  是一片辽阔的牧场，春夏之际，草甸上龙胆兰、杜鹃盛放，在这里远望，
                  玉龙群峰历历在目。海拔3200多米的云杉坪，更是纳西青年男女心中的圣地。这里是一片幽静的草甸，四周古木参天藤萝密布，环境幽静。玉龙十三峰下有19条现代海洋性冰川，远望如一片瀑布悬挂于扇子陡下方，在阳光的照耀下，泛着银光。游人可乘坐大索道抵达4506米的高度后，沿着山间栈道近距离观赏冰川和主峰的雄姿。
                </p>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <div class="scenic01">
            <div class="scenic02_02">
              <h3>景点项目:</h3>
              <div>
                <p>玉龙雪山滑翔伞</p>
                <p>丽江直升机空中游览基地探秘玉龙雪山</p>
                <h3>服务设施</h3>
                <p>
                  <em>停车场：</em>
                  【玉龙雪山停车场】参考价格：免费；地址：玉龙雪山甘海子（墨水段附件）；库位：200
                </p>
                <p><em>行李寄存：</em>雪厨餐厅1楼可免费寄存行李</p>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </div>
</template>
  
  <script>
export default {
  name: "DestinationDesContent",
};
</script>
  
  <style lang="scss" scoped>
.grid-content {
  min-height: 36px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 27px;
}

.scenic01 {
  height: 400px;
  width: 100%;
  background-image: url("../../../assets/img/Destination/13.webp");
  background-position: center center;
  background-repeat: no-repeat;
  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-attachment: fixed;
  /* 让背景图基于容器大小伸缩 */
  background-size: cover;
  /* 设置背景颜色，背景图加载过程中会显示背景色 */
  background-color: #cccccc;
  /* // height: 1000px; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* // padding: 20px; */
}

.scenic01_01,
.scenic02_02 {
  background-color: rgba(195, 195, 195, 0.6);
  width: 100%;
  height: 100%;
  padding: 25px;
}

.scenic01_01 h3,
.scenic02_02 h3 {
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: 15px;
}
</style>
  