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
    <el-row :gutter="40">
      <!-- 攻略具体内容 -->
      <div class="container">
        <!-- 内容左侧点赞-->
        <StrDetailsThumbup />
        <!-- 文章内容 -->
        <el-col :xs="24" :sm="24" :md="14" :lg="14">
          <div class="content">
            <div
              class="content_info"
              v-html="form.stdetail[0].strategy_content"
            ></div>
            <!-- 文章评论 -->
            <!-- 评论 -->
            <div class="coments">
              <div class="write_coments">
                <!-- 获取当前用户头像 -->
                <img
                  :src="'http://localhost:3000/upload/' + userImg"
                  class="user_headPic_url"
                  alt=""
                />

                <div id="message">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="写下你的评论"
                    class="form-control"
                    v-model="getstComment"
                    maxlength="150"
                    show-word-limit
                    cols="30"
                    rows="5"
                  ></textarea>
                  <div id="bt">
                    <el-button type="warning" class="fbpl" @click="fb"
                      >发布</el-button
                    >
                  </div>
                </div>
                <!-- <div class="conments_button" >  
                                <button type="button" class="coments_submit btn btn-success"><span>发布</span></button>
                                <button type="button" class="coments_console btn"><span>取消</span></button>
                        </div> -->
              </div>
              <!-- 评论列表 -->
              <ul
                class="coments_info"
                v-for="pinglun in pingluns"
                :key="pinglun.com_id"
              >
                <li>
                  <img
                    :src="'http://localhost:3000/upload/' + userImg"
                    class="user_headPic_url"
                  />
                  <div>
                    <h4>{{ pinglun.user_name }}</h4>
                    <p>{{ formateDate(pinglun.com_time) }}</p>
                    <p></p>
                    <p class="coments_content">
                      {{ pinglun.com_text }}
                    </p>
                    <span class="meta"
                      ><img src="../../assets/img/Strategy/str_dian1.png" />点赞{{
                        pinglun.com_like
                      }}</span
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
        <!-- 右侧面板 -->
        <el-col :md="6" :lg="6" class="hidden-sm-and-down">
          <!-- 右侧bar -->
          <div class="side">
            <div class="side-bar">
              <div class="photo">
                <h3>照片纪念</h3>
                <img src="../../assets/img/Strategy/str_f.jpeg" id="loopPic" />
              </div>
            </div>
            <div class="side-bar">
              <div class="refer">
                <h3>推荐攻略</h3>
                <ul class="post-categories list-unstyled">
                  <li>
                    <a href="strategy_collect.html"
                      >丽江之旅<br />
                      <span class="glyphicon glyphicon-eye-open viewcount"
                        >阅读3,323</span
                      ></a
                    >
                  </li>
                  <li>
                    <a href="strategy_collect.html"
                      >五天三夜玩转大理<br />
                      <span class="glyphicon glyphicon-eye-open viewcount"
                        >阅读111</span
                      ></a
                    >
                  </li>
                  <li>
                    <a href="strategy_collect.html"
                      >昆明<br />
                      <span class="glyphicon glyphicon-eye-open viewcount"
                        >阅读45,634</span
                      ></a
                    >
                  </li>
                  <li>
                    <a href="strategy_collect.html"
                      >西双版纳<br />
                      <span class="glyphicon glyphicon-eye-open viewcount"
                        >阅读343,223</span
                      ></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </el-col>
      </div>
    </el-row>
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

<style lang="scss" scoped>
/* 头部样式 */
  .ban img {
    /*设置图片宽度和浏览器宽度一致*/
    width: 100%;
    height: inherit;
  }

  * {
    margin: 0;
    padding: 0px;
  }

  /* 顶部导航栏 */
  .con_nav .title {
    font-weight: 700;
    color: #ffffff;
    position: absolute;
    font-size: 24px;
    font-weight: bolder;
    margin-top: -100px;
    margin-left: 20%;
  }

  /* 内容的导航栏 */
  .con_nav {
    width: 1200px;
    height: 100px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    position: relative;
  }

  /* 头像 */
  .user_headPic_url {
    width: 120px;
    height: 120px;
    border: 5px solid #fff;
    border-radius: 50%;
  }

  .con_nav .user_headPic_url {
    position: absolute;
    top: -40px;
    left: 50px;
  }

  /* 头像右侧文字 */
  .con_nav p {
    position: absolute;
    left: 200px;
    line-height: 82px;
    overflow: hidden;
  }

  .collect {
    position: absolute;
    right: 0px;
  }

  .collect ul {
    display: flex;
  }

  .collect li {
    line-height: 82px;
    margin-right: 10px;
  }

  /* 内容 */

  .content_info {
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin-top: 20px;
  }

  .view {
    margin-top: 10px;
    /* width: 600px; */
    height: 400px;
    background: url(../../assets/img/Strategy/str_a.jpeg) no-repeat;
  }

  .view p li {
    margin-top: 10px;
    line-height: 1.5em;
    margin-top: 5px;
  }

  .view2 img {
    margin-top: 10px;
    width: 80%;
  }

  .view3 {
    margin-top: 10px;
    display: flex;
  }

  .miao {
    margin-top: 70px;
    margin-left: 5px;
    line-height: 1.5em;
  }

  .view3:hover {
    background-color: #ccc;
  }

  .view4 {
    height: 100px;
    margin-top: 10px;
    margin-bottom: 100px;
    border: 1px solid orange;
    background-color: bisque;
    line-height: 2em;
  }

  /* 头像 */
  .user_headPic_url {
    width: 120px;
    height: 120px;
    border: 5px solid #fff;
    border-radius: 50%;
  }

  /* 页面下方评论部分 */
  .coments {
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 30px;
  }

  /* 写评论 */
  .write_coments {
    width: 100%;
  }

  .write_coments .user_headPic_url {
    margin-left: 20px;
  }

  .write_coments textarea {
    width: inherit;
    height: 150px;
    resize: none;
    margin-left: 160px;
    margin-top: -120px;
    border-radius: 9px;
    border: 3px solid #5cb3cc;
    width: 70%;
  }

  #bt {
    width: 90%;
  }

  .fbpl {
    /* display: none; */
    float: right;
    margin-right: 20px;
    margin-top: 20px;
  }

  /* 评论列表 */
  .coments_info .user_headPic_url {
    width: 50px;
    height: 50px;
    border: 5px solid #fff;
    border-radius: 50%;
    float: left;
  }

  .coments_info {
    padding: 20px;
    margin-top: 80px;
  }

  .coments_info li {
    cursor: pointer;
    padding: 30px;
  }

  .coments_info li:hover {
    background-color: #f8f8f8;
  }

  .coments_info li {
    color: #4c4c4c;
    font-size: 16px;
    font-weight: bold;
    overflow: hidden;
    width: 95%;
    display: block;
    margin-bottom: 15px;
    height: 200px;
    line-height: 25px;
  }

  .coments_info li p {
    font-size: 14px;
    color: #666666;
    line-height: 24px;
    width: 95%;
    max-height: 72px;
    overflow: hidden;
  }

  .coments_info li h4 {
    margin-left: 60px;
    margin-top: 20px;
  }

  .coments_info span {
    float: right;
    margin-right: 30px;
  }

  .coments_info span img {
    margin-right: 20px;
  }

  /* 右侧面板*/
  /* .side{
    top: 400px;
    position: fixed;
 } */
  .side-bar {
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    padding: 20px;
  }

  .photo {
    height: 230px;
    overflow: hidden;
  }

  .photo img {
    width: 100%;
    height: 100%;
  }

  .refer ul {
    margin-top: 20px;
  }

  .refer li {
    display: block;
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  .refer span {
    color: #ccc;
    font-size: 10px;
  }
</style>
