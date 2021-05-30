<template>
  <section class="strategyDetail">
    <!-- 背景图片 -->
    <!-- 此背景图应获取为用户发布中的第一个图片 -->
    <div>
      <el-row>
        <el-col :span="24">
          <div class="ban">
            <!-- 背景头图 -->
            <img :src="getstimg(form.stdetail[0].strategy_path)" alt="" />
          </div>
        </el-col>
      </el-row>
      <div class="con_nav">
        <p class="title">{{ form.stdetail[0].strategy_title }}</p>
        <!-- 数据库获取-->
        <img
          :src="getstimg(form.stdetail[0].user_headPic_url)"
          class="user_headPic_url"
          alt=""
        />
        <!--获取用户头像-->
        <p>
          {{ form.stdetail[0].user_name }}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 发布时间:{{
            form.stdetail[0].strategy_date
          }}
          浏览量:{{ form.stdetail[0].strategy_view }}
        </p>
        <div class="collect">
          <ul>
            <li>收藏量</li>
            <li>转发量</li>
            <li>点赞量</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// 导入接口API
// import { getDetailStrategy } from "@/api/getData.js";

export default {
  name: "StrategyDetail",
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {
    //当页面渲染完成时调用方法获取数据
    // this.getStrategyDetailData()
  },
  methods: {
    // 异步调用 StrategyDetail 接口
    async getStrategyDetailData() {
      alert(888);
      // // 捕获异常
      try {
        // 等待异步方法执行完成
        const result = await getDetailStrategy();
        console.log("攻略 Main 数据", result);
        // this.arts = result.data.data;
      } catch (err) {
        console.log("err", err);
      }
    },
  },
};
</script>

<style>
</style>
