<template>
  <section class="strategyDetailItem">
    <div class="hr"></div>
    <div
      class="feed-item _j_feed_item"
      data-fid="292353"
      data-type="1"
      data-cs-p="位置_2"
      @click="toDetail(StrategyDetailItemData.strategy_id)"
    >
      <div class="bar">
        <span class="stat"
          ><span class="num">{{ StrategyDetailItemData.strategy_like }}</span
          >蜂蜂顶<i class="icon-hand"></i
        ></span>
        <span class="type"
          ><i class="icon-line"></i>来自 <strong>游记</strong></span
        >
      </div>
      <div class="title">{{ StrategyDetailItemData.strategy_title }}</div>
      <dl class="art">
        <dt>
          <img :src="imgsUrl" />
        </dt>
        <dd>
          <div class="info">
            {{ StrategyDetailItemData.strategy_content }}
          </div>
          <div class="ext-r">
            <span class="author"
              ><img
                :src="imgsHeadUrl"
              />{{ StrategyDetailItemData.user_name }}</span
            ><span class="nums">{{ StrategyDetailItemData.strategy_view }}浏览，{{ StrategyDetailItemData.strategy_date }}</span>
          </div>
        </dd>
      </dl>
    </div>
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
      imgsUrl: "",
      imgsHeadUrl: ""
    };
  },
  computed: {
    userInfo() {
      return this.$store.getters.user_info;
    },
  },
  created() {
    this.imgsUrl = require("../../../../../public/upload/" +
      this.StrategyDetailItemData.strategy_img +
      ".jpg");

    this.imgsHeadUrl = require("../../../../../public/upload/"+this.StrategyDetailItemData.user_headPic_url)
  },
  mounted() {},
  methods: {
    toDetail(id) {
      this.$router.push(`/strategy/detail/?strategy_id=${id}`);
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
    dt {
      img {
        width: 220px;
        height: 150px;
      }
    }
    dd {
      display: block;
      margin-left: 20px;
    }
    .info {
      height: 102px;
      padding-top: 10px;
      margin-bottom: 16px;
      color: #666;
      overflow: hidden;
      text-overflow: ellipsis;
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
