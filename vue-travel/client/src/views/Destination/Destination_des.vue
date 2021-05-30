<template>
  <div id="destination_des">
    <div class="img_header">
      <div class="img_header01">
        <el-row>
          <el-col :span="2">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content bg-purple-light">
              <div class="imgs">
                <!-- 轮播图 -->
                <Swiper :imgs="imgs" />
              </div>
            </div>
          </el-col>
          <!-- 景点介绍开始 -->
          <DestinationDesMain />
          <!-- 景点介绍结束 -->
        </el-row>

        <!-- 景点介绍开始 -->
        <DestinationDesContent />
        <!-- 景点介绍结束 -->
        <el-row>
          <el-col :span="24">
            <div class="grid-content text-center">
              <div class="content01_01">
                <h2 class="sets">热门景区：</h2>
                <p>要不要去享受不一样的风土人情？</p>
              </div>
            </div>
          </el-col>
        </el-row>
        <!-- 热门推荐 -->
        <DestinationDesRecom />
        <!-- 热门推荐结束 -->

        <el-row>
          <el-col :span="24">
            <div class="grid-content text-center">
              <div class="content01_01">
                <h2 class="sets">热门评论推荐：</h2>
              </div>
            </div>
          </el-col>
        </el-row>

        <!-- 热门推荐 -->
        <DestinationDesCom />
        <!-- 热门推荐结束 -->

        <el-row>
          <el-col :span="24">
            <div class="grid-content text-center">
              <a href="../../../community">获取更多....</a>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
  
  <script>
import DestinationDesMain from "../Destination/components/DestinationDesMain";
import DestinationDesContent from "../Destination/components/DestinationDesContent";
import DestinationDesRecom from "../Destination/components/DestinationDesRecom";
import DestinationDesCom from "../Destination/components/DestinationDesCom";
import Swiper from "../../components/Swiper";
export default {
  name: "Destinatin_des",
  components: {

    Swiper,
    DestinationDesMain,
    DestinationDesContent,
    DestinationDesRecom,
    DestinationDesCom,

  },
  data() {
    return {
      imgs: [
        require("../../assets/img/Swiper/swiper01.png"),
        require("../../assets/img/Swiper/swiper02.png"),
        require("../../assets/img/Swiper/swiper03.png"),
        require("../../assets/img/Swiper/swiper04.png"),
        require("../../assets/img/Swiper/swiper05.png"),
      ],
    };
  },
};
</script>
  
<style lang="scss" scoped>
.imgs {
  width: 90%;
  height: 80%;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  margin-top: 60px;
}

.grid-content {
  min-height: 36px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  line-height: 36px;
  text-indent: 2rem;
}

.text-center {
  text-align: center;
}

.sets {
  color: #565a5c;
  font-size: 30px;
  font-weight: 500;
  text-transform: capitalize;
  font-family: "Poppins", sans-serif;
  margin: 0;
  margin-top: 10px;
}

.text-center p {
  position: relative;
  color: #aaa;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  margin-top: 12px;
  margin-bottom: 12px;
}

.content01_01 {
  width: 81%;
  margin-left: 2%;
  background-color: #ccc;
}

.content01_01 .sets {
  line-height: 50px;
  margin: 0;
  font-size: 25px;
}
</style>
  