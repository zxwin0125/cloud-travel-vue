<template>
  <section class="strategyDetailItem">
    <div class="hr"></div>
    <div
      class="feed-item _j_feed_item"
      data-fid="292353"
      data-type="1"
      data-cs-p="位置_2"
      @click="toDetail"
    >
      <div class="bar">
        <span class="stat"
          ><span class="num">127</span> 蜂蜂顶<i class="icon-hand"></i
        ></span>
        <span class="type"
          ><i class="icon-line"></i>来自 <strong>游记</strong></span
        >
      </div>
      <div class="title">踏沙西行，梦寐以求的敦煌之旅</div>
      <dl class="art">
        <dt>
          <img
            src="http://p1-q.mafengwo.net/s15/M00/E4/48/CoUBGV2s2fWAaoLNAASn1IeP4_E341.jpg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100"
            style="width: 220px"
          />
        </dt>
        <dd>
          <div class="info">
            写在前面
            不知从什么时候起，心里便对敦煌，这座隐于荒漠的西域之城有了一种想象，前几日和好友闲谈，又说起敦煌，想去敦煌的执念又一次充斥了大脑，于是决定前往西域边陲，一探当年盛大之城的究竟。
            带着记忆中的些许印象看完纪录片《敦煌》终于能把故事...
          </div>
          <div class="ext-r">
            <span class="author"
              ><img
                src="http://b1-q.mafengwo.net/s12/M00/F4/68/wKgED1v76FuAddNXAACQa4g1tFA44.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
              />一把小刀</span
            ><span class="nums">12490浏览，8评论</span>
          </div>
        </dd>
      </dl>
    </div>
    <!-- <el-row>
      <el-col :span="24">
        <div class="pagination">
          <el-pagination
            v-if="paginations.total > 0"
            :page-sizes="paginations.page_sizes"
            :page-size="paginations.page_size"
            :layout="paginations.layout"
            :total="paginations.total"
            :current-page.sync="paginations.page_index"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
          >
          </el-pagination>
        </div>
      </el-col>
    </el-row> -->
  </section>
</template>
<script>
// 导入接口API
// import { getDetailStrategy } from "@/api/getData.js";

export default {
  name: "StrategyDetailItem",
  props: {
    StrategyDetailItemData: {
      type: Object,
      default: {},
    },
  },
  components: {},
  data() {
    return {
      strategy_id: "",
      paginations: {
        page_index: 1, // 当前位于哪页
        total: 0, // 总数
        page_size: 5, // 1页显示多少条
        page_sizes: [5, 10, 15, 20], //每页显示多少条
        layout: "total, sizes, prev, pager, next, jumper", // 翻页属性
      },
      tableData: [],
      allTableData: [],
    };
  },
  computed: {},
  created() {
    this.strategy_id = this.StrategyDetailItemData.strategy_id;
  },
  mounted() {
    this.allTableData = this.StrategyDetailItemData;
    console.log('111', this.allTableData);
    // 设置分页数据
    // this.setPaginations();
  },
  methods: {
    toDetail() {
      this.$router.push({
        name: "detail",
        // params: {
        //   strategy_id: this.strategy_id,
        // },
      });
    },

    handleCurrentChange(page) {
      // 当前页
      let sortnum = this.paginations.page_size * (page - 1);
      let table = this.allTableData.filter((item, index) => {
        return index >= sortnum;
      });
      // 设置默认分页数据
      this.tableData = table.filter((item, index) => {
        return index < this.paginations.page_size;
      });
    },

    handleSizeChange(page_size) {
      // 切换size
      this.paginations.page_index = 1;
      this.paginations.page_size = page_size;
      this.tableData = this.allTableData.filter((item, index) => {
        return index < page_size;
      });
    },

    setPaginations() {
      // 总页数
      this.paginations.total = this.allTableData.length;
      this.paginations.page_index = 1;
      this.paginations.page_size = 5;
      // 设置默认分页数据
      this.tableData = this.allTableData.filter((item, index) => {
        return index < this.paginations.page_size;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  text-align: right;
  margin-top: 10px;
}
.hr {
  margin-top: 20px;
  height: 1px;
  background-color: #e5e5e5;
  overflow: hidden;
}
.feed-item {
  padding: 20px 0;
  font-size: 14px;
  line-height: 24px;
  .stat {
    float: right;
    padding: 0 15px;
    line-height: 30px;
    border: 1px solid #ff9d00;
    border-radius: 15px;
    font-size: 14px;
    background-color: #fff;
    color: #666;
  }
  .icon-line {
    background-position: 0 -40px;
  }

  .type i {
    float: left;
    margin-right: 10px;
    width: 20px;
    height: 20px;
    background: url(../../../assets/img/icon/new-gl-icon6@2x.png) no-repeat 0 0;
    background-size: 60px auto;
    overflow: hidden;
  }
  .icon-hand {
    display: inline-block;
    margin-left: 10px;
    width: 15px;
    height: 15px;
    background: url(../../../assets/img/icon/new-gl-icon6@2x.png) no-repeat;
    background-size: 60px auto;
    background-position: -40px -40px;
    overflow: hidden;
    vertical-align: -2px;
    *vertical-align: middle;
  }
  .title {
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 20px;
    color: #333;
  }
  .imgs {
    li {
      float: left;
      width: 220px;
      display: inline;
      margin-right: 15px;
    }
    .ext-r {
      float: right;
      margin: 0;
      width: auto;
      line-height: 130px;
    }
  }
  .art {
    display: flex;
    dd {
      display: block;
      margin-left: 20px;
    }
    .info {
      height: 102px;
      padding-top: 10px;
      margin-bottom: 16px;
      color: #666;
    }
    .ext-r {
      float: right;
      color: #999;
      line-height: 22px;
      font-size: 12px;
      .author {
        display: inline-block;
        margin-right: 10px;
        font-size: 12px;
        color: #ff9d00;
        img {
          margin-right: 5px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          overflow: hidden;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
