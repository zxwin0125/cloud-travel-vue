<template>
  <section class="homeBlog">
    <el-container>
      <el-header>
        <div class="btn">
          {{ message }}
        </div>
        <h1>精选游记</h1>
        <p>摆脱千篇一律的旅行，探索属于自己的世界.</p>
      </el-header>
      <el-main>
        <el-row>
          <BlogItem
            v-for="item in BlogData"
            :key="item.index_infoID"
            :BlogItemData="item"
          />
        </el-row>
      </el-main>
    </el-container>
  </section>
</template>
    
<script>
import BlogItem from "./components/BlogItem";
export default {
  name: "HomeBlog",
  components: {
    BlogItem,
  },
  props: {
    BlogData: {
      type: Array,
    },
  },
  data() {
    return {
      message: "获取更多...",
    };
  },
  methods: {
    getData: function () {
      // console.log("HomeBlog",this.BlogData)
    },
  },
  mounted() {
    // this.getData()
  },
};
</script>
    
<style lang="scss" scoped>
.homeBlog {
  background: transparent no-repeat center center fixed;
  overflow: hidden;
  padding: 60px 0;
  .el-container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: 100px;
    margin-left: 100px;
    .el-header {
      height: 51px;

      .btn {
        border: 1px solid #3a4f52;
        color: #3a4f52;
        float: right !important;
        padding: 10px 16px;
        font-size: 18px;
        line-height: 1.3333333;
        border-radius: 6px;
      }
      h1 {
        margin: 0 0 15px 0;
        color: #3a4f52;
        font-family: "Alegreya Sans";
        font-size: 36px;
        font-weight: 500;
        line-height: 1.1;
      }
      p {
        margin: 0 0 20px 0;
        color: #828282;
      }
    }
    .el-main {
      margin-top: 40px;
      .el-row {
        margin-right: -15px;
        margin-left: -15px;
      }
    }
  }
}

</style>
    