<template>
  <section class="homeTour">
    <el-container>
      <el-row>
        <el-col :span="16" class="tour_head">
          <h2>
            热门景点·
            <span style="font-size: 25px">Tourism</span>
          </h2>
          <p>旅行，自由。没有繁琐的计划，没有沉重的负担，只有最纯粹的态度。</p>
        </el-col>
      </el-row>
      <el-row :span="24">
        <!-- <tourItem
          v-for="item in tourData"
          :key="item.index_infoID"
          :tourItemData="item"
        /> -->
      </el-row>
    </el-container>
  </section>
</template>
    
<script>
  // import tourItem from "components/tourItem";
  export default {
    name: "homeTour",
    components: {
      // tourItem,
    },
    props: {
      tourData: {
        type: Array,
      },
    },
    data() {
      return {};
    },
  };
</script>
    
<style lang="scss" scoped>
.homeTour {
  background-color: #f4f4f4;
  padding: 2em 0;
  clear: both;

  .el-container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: 36px;
    margin-left: 36px;
    display: flex;
    flex-direction: column;

    .el-row {
      margin-right: -15px;
      margin-left: -15px;

      .el-col {
        position: relative;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;

        .tour_head {
          margin-left: 195px;
          text-align: center;

          h2 {
            font-size: 40px;
            font-weight: 600;
            margin-bottom: 20px;
            line-height: 1.5;
            color: #000;
          }

          p {
            margin-bottom: 20px;
            font-size: 18px;
            line-height: 1.5;
            color: #828282;
          }
        }
      }
    }
  }
}

.tour_item {
  margin-bottom: 30px;
}

.tour_item > a {
  display: block;
  color: #000;
  position: relative;
  bottom: 0;
  overflow: hidden;
  transition: 0.5s;
}

.tour_item > a img {
  position: relative;
  transition: 0.5s;
}

.tour_item > a h3 {
  z-index: 12;
  position: absolute;
  right: 20px;
  left: 20px;
  bottom: 50px;
  color: #fff;
  margin: 0;
  padding: 0;
  opacity: 1;
  font-size: 18px;
  font-weight: 300;
  visibility: visible;
  transition: 0.3s;
}
</style>
    