<template>
  <section class="strategyDetailItem">
    <div class="hr"></div>
              <div
                class="feed-item _j_feed_item"
                data-fid="292353"
                data-type="1"
                data-cs-p="位置_2"
              >
                <a
                  href="https://www.mafengwo.cn/i/17505631.html"
                  target="_blank"
                >
                  <div class="bar">
                    <span class="stat"
                      ><span class="num">127</span> 蜂蜂顶<i
                        class="icon-hand"
                      ></i
                    ></span>
                    <span class="type"
                      ><i class="icon-line"></i>来自 <strong>游记</strong></span
                    >
                  </div>
                  <div class="title">踏沙西行，梦寐以求的敦煌之旅</div>
                  <dl class="art ">
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
                </a>
              </div>
  </section>
</template>
<script>
// 导入接口API
import { getDetailStrategy } from "@/api/getData.js";

export default {
  name: "StrategyDetailItem",
  components: {
  },
  data() {
    return {
    };
  },
  computed: {
  },
  created() {
      
  },
  mounted() {
    //当页面渲染完成时调用方法获取数据
    this.getStrategyDetailData()
  },
  methods: {
    // 异步调用 StrategyDetail 接口
    async getStrategyDetailData() {
      // // 捕获异常
      try {
        // 等待异步方法执行完成
        const result = await getDetailStrategy();
        console.log("攻略 Main 数据", result);
        // this.arts = result.data.data;
      } catch (err) {
        console.log("err", err);
      }
    }
  },
};
</script>

<style>
</style>
