<template>
  <div class="users">
    <div class="users-bg">
      <img
        src="https://pic5.40017.cn/03/000/94/a6/rB5oQFv3pB6AYt9-AAGqaOtgIQE918.jpg"
        alt=""
      />
    </div>

    <div class="users-info">
      <!-- 头像 -->
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div class="MAvaName">马蜂窝用户</div>
      <!-- 图标 -->
      <div class="its_tags">
        <a href="/home/vip_show.php" target="_blank" title="VIP"
          ><i class="vip"></i
        ></a>
        <a href="/rudder/info.php" target="_blank" title="分舵"
          ><i class="duo"></i> </a
        ><a href="/qa/expert_apply.php?type=1" target="_blank" title="指路人"
          ><i class="zhiluren"></i
        ></a>
      </div>
      <!-- 等级 -->
      <div class="MAvaInfo">
        <span class="MAvaLevel"
          >等级：<a href="/rank/lv.php" title="Lv.1" target="_blank"
            >Lv.1</a
          ></span
        >
        <span class="MAvaSet"
          ><a title="设置" href="/setting/" target="_blank"></a
        ></span>
      </div>
      <!-- 个人简介 -->
      <div id="_j_profilearea" class="MAvaProfile">
        <a role="button" class="addBtn _j_showintrobox">填写个人简介</a>
        <div class="MAvaInput _j_inputarea hide">
          <textarea
            id="_j_introarea"
            placeholder="例：摄影师/旅居澳洲/潜水爱好者"
            maxlength="100"
          ></textarea>
          <a role="button" id="_j_introsaver" class="MAvaBtn" title="保存"
            >保存</a
          >
        </div>
      </div>
      <div class="MAvaMore clearfix">
        <div class="MAvaNums">
          <strong
            ><a href="/friend/index/follow?uid=68872750" target="_blank"
              >7</a
            ></strong
          >
          <p>关注</p>
        </div>
        <div class="MAvaNums">
          <strong
            ><a
              href="/friend/index/follow?uid=68872750&amp;flag=1"
              target="_blank"
              >0</a
            ></strong
          >
          <p>粉丝</p>
        </div>
        <div class="MAvaNums last">
          <strong><a href="/mall/" target="_blank">1</a></strong>
          <p>蜂蜜</p>
        </div>
      </div>
      <!-- 我的关注 -->
      <div class="MUsers">
        <div class="MUsersTitle">我的关注</div>
        <div class="MUsersDetail" id="_j_followcnt">
          <div class="MUsersAtom">
            <ul class="clearfix _j_followlist">
              <li>
                <a href="/u/66033691.html" target="_blank">
                  <img
                    src="http://b1-q.mafengwo.net/s12/M00/B8/4B/wKgED1wXVBOAUKOoAAEV3wx0umw93.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                    height="48"
                    width="48"
                    alt="马蜂窝问答君"
                    title="马蜂窝问答君"
                  />
                </a>
                <p>
                  <a
                    href="/u/66033691.html"
                    target="_blank"
                    title="马蜂窝问答君"
                    >马蜂窝问答君</a
                  >
                </p>
              </li>
              <li>
                <a href="/u/63316712.html" target="_blank">
                  <img
                    src="http://n1-q.mafengwo.net/s12/M00/0D/B6/wKgED1w2wTGACDWuAACV7G0pZBM93.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                    height="48"
                    width="48"
                    alt="马蜂窝视频君"
                    title="马蜂窝视频君"
                  />
                </a>
                <p>
                  <a
                    href="/u/63316712.html"
                    target="_blank"
                    title="马蜂窝视频君"
                    >马蜂窝视频君</a
                  >
                </p>
              </li>
              <li>
                <a href="/u/388631.html" target="_blank">
                  <img
                    src="http://p1-q.mafengwo.net/s11/M00/E6/B5/wKgBEFsWUTmAexhvAANf5Uux-cw10.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                    height="48"
                    width="48"
                    alt="马蜂窝大管家"
                    title="马蜂窝大管家"
                  />
                </a>
                <p>
                  <a href="/u/388631.html" target="_blank" title="马蜂窝大管家"
                    >马蜂窝大管家</a
                  >
                </p>
              </li>
              <li>
                <a href="/u/90102427.html" target="_blank">
                  <img
                    src="http://b1-q.mafengwo.net/s10/M00/E8/CD/wKgBZ1iZk2SAGbKsAAME0TWzCHE45.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                    height="48"
                    width="48"
                    alt="马小蜂"
                    title="马小蜂"
                  />
                </a>
                <p>
                  <a href="/u/90102427.html" target="_blank" title="马小蜂"
                    >马小蜂</a
                  >
                </p>
              </li>
              <li>
                <a href="/u/10024.html" target="_blank">
                  <img
                    src="http://b1-q.mafengwo.net/s12/M00/A2/BC/wKgED1v83YqAKP_tAARgGAR8q2059.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                    height="48"
                    width="48"
                    alt="小蜂"
                    title="小蜂"
                  />
                </a>
                <p>
                  <a href="/u/10024.html" target="_blank" title="小蜂">小蜂</a>
                </p>
              </li>
              <li>
                <a href="/u/461006.html" target="_blank">
                  <img
                    src="http://p1-q.mafengwo.net/s12/M00/9C/59/wKgED1v7pZ6AIlXKAAOM2KwjrY870.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                    height="48"
                    width="48"
                    alt="小蚂"
                    title="小蚂"
                  />
                </a>
                <p>
                  <a href="/u/461006.html" target="_blank" title="小蚂">小蚂</a>
                </p>
              </li>
              <li>
                <a href="/u/114259.html" target="_blank">
                  <img
                    src="http://n1-q.mafengwo.net/s9/M00/0D/F5/wKgBs1hPb8WAEruUAAGXKCGfy4U06.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
                    height="48"
                    width="48"
                    alt="蜂窝机器人"
                    title="蜂窝机器人"
                  />
                </a>
                <p>
                  <a href="/u/114259.html" target="_blank" title="蜂窝机器人"
                    >蜂窝机器人</a
                  >
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="users-tips">
      <!-- icon -->
      <div class="common_block main_links">
        <ul class="clearfix">
          <li>
            <div class="main_links_icon" @click="toWrite"
              ><i class="write_note"></i><span>写游记</span></div
            >
          </li>
          <li>
            <div class="main_links_icon"
              ><i class="ask_expert"></i><span>问达人</span></div
            >
          </li>
          <li>
            <div class="main_links_icon"
              ><i class="add_footprint"></i><span>添加足迹</span></div
            >
          </li>
          <li class="last">
            <div class="main_links_icon"
              ><i class="invite_friends"></i><span>发布结伴</span></div
            >
          </li>
        </ul>
        <div class="open_corner">
          <a role="button" id="_j_profile_setting"
            ><span><i></i></span
          ></a>
        </div>
      </div>
      <!-- 个人资料 -->
      <div class="common_block personal_info" id="_j_taskwrap">
        <div class="personal_tips">
          <p><strong>马蜂窝用户</strong>，这里是你的【窝】！</p>
          <p>是记录你的旅行记忆，结交各路豪杰的地盘儿。现在开启马蜂窝旅程！</p>
        </div>
        <div class="personal_list clearfix">
          <ul>
            <li>
              <div class="personal_ico"><i class="ico_info"></i></div>
              <div class="personal_word">
                <p>做一个有“脸面”的人<br />上传头像，完善资料！<br /></p>
              </div>
              <div class="personal_btn">
                <a role="button" class="_j_task_profile" title="完善个人资料"
                  >完善个人资料</a
                >
              </div>
            </li>
            <li>
              <div class="personal_ico"><i class="ico_stroll"></i></div>
              <div class="personal_word">
                <p>这儿潜伏着哪些旅行大神？<br />他们都怎么玩儿？</p>
              </div>
              <div class="personal_btn complete">
                <a title="已完成">已完成</a>
              </div>
            </li>
            <li>
              <div class="personal_ico"><i class="ico_daka"></i></div>
              <div class="personal_word">
                <p>马蜂窝会员升级有礼包。<br />第一步，从打卡开始。</p>
              </div>
              <div class="personal_btn">
                <a role="button" class="_j_task_daka" title="打卡赚取蜂蜜"
                  >打卡赚取蜂蜜</a
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 游记 -->
      <div class="common_block my_notes">
        <div class="common_title clearfix">
          <h2>我的游记</h2>
        </div>
        <div class="notes_default_v2">
          <div class="notes_dcon"></div>
          <div title="写游记" class="btn_write" @click="toWrite"
            ><i></i>写游记</div>
          >
        </div>

        <div class="more_notes">
          <a class="btn_deleted" href="/u/note/delete.html"
            ><i></i>已删除游记</a
          >
        </div>
      </div>
      <!-- 回答 -->
      <div class="common_block my_notes">
        <div class="common_title clearfix">
          <h2>我的回答</h2>
        </div>
        <div class="notes_default ask_default">
          <i class="ico_notes"></i>
          <div class="notes_default_detail">
            <p>
              马蜂窝问答是一个所有人帮所有人的平台，<br />用你的旅行经验，去帮助其他蜂蜂。
            </p>
          </div>
        </div>
      </div>
      <!-- 点评 -->
      <div class="common_block my_notes">
        <div class="common_title clearfix">
          <h2>我的点评</h2>
        </div>
        <div class="notes_default dp_default">
          <i class="ico_notes"></i>
          <div class="notes_default_detail">
            <p>点评，不仅是旅途记忆，<br />更是帮助他人的宝贵财富。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入接口API
import { getUserInfo } from "@/api/getData.js";
export default {
  name: "Users",
  components: {},
  data() {
    return {
      imageUrl: "",
    };
  },
  computed: {
    userInfo() {
      return this.$store.getters.user_info;
    },
  },
  created() {
    console.log("1212", this.$store.getters.user_info);
    console.log("14545", this.userInfo);
  },
  mounted() {},
  methods: {
    toWrite(user_id) {
      this.$router.push(`/strategy/write/?user_id=${user_id}`);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>
<style lang="scss" scoped>
.users {
  position: relative;
  width: 100%;
  .users-bg {
    height: 350px;
    margin-left: -200px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .users-info {
    position: absolute;
    top: 25px;
    left: 70px;
    width: 280px;
    padding: 10px 20px 20px 20px;
    bottom: -420px;
    background: #fff;
    z-index: 1;
    height: 357px;
    opacity: 0.95;
    .avatar-uploader {
      width: 120px;
      height: 120px;
      margin: 0 auto;
      border: 1px dashed #d9d9d9;
      border-radius: 50%;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      &:hover {
        border-color: #409eff;
      }
      .avatar {
        width: 100%;
        height: 100%;
        display: block;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
      }
    }
    .MAvaName {
      font-size: 22px;
      line-height: 24px;
      margin-top: 16px;
      text-align: center;
    }
    .its_tags {
      margin: 10px 0;
      text-align: center;
      i {
        width: 40px;
        height: 20px;
        display: inline-block;
        background-image: url(../../assets/img/icon/home_sprite_v15.png);
        background-position: 0 -460px;
        margin-right: 3px;
      }
      .duo {
        width: 30px;
        background-position: -41px -460px;
      }
      .zhiluren {
        width: 38px;
        background-position: -72px -460px;
      }
    }
    .MAvaInfo {
      padding: 0 60px;
      display: flex;
      align-items: center;
      span {
        padding: 0 15px 0 12px;
        display: inline-block;
        position: relative;
      }
      .MAvaLevel a {
        color: #ea3c1a;
        font-size: 16px;
        font-weight: bold;
        font-family: Arial;
        &:after {
          content: "";
          background-color: #d6d6d6;
          position: absolute;
          top: 3px;
          right: 0;
          width: 1px;
          height: 16px;
        }
      }
      .MAvaSet {
        padding: 0 0 0 20px;
        position: relative;
        top: -1px;
        display: inline-block;
        a {
          width: 17px;
          height: 17px;
          background-image: url(../../assets/img/icon/ico_sprite_v8.png);
          background-position: -108px -146px;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
    .MAvaProfile {
      margin-top: 20px;
      padding: 0 20px;
      .addBtn {
        line-height: 30px;
        border-radius: 3px;
        color: #666;
        background-color: #efefef;
        display: block;
        text-align: center;
        transition: background-color 0.3s ease-out 0s;
        -webkit-transition: background-color 0.3s ease-out 0s;
      }
      .hide {
        display: none;
      }
      textarea {
        height: 78px;
        padding: 15px;
        background-color: #efefef;
        line-height: 20px;
        color: #999;
        border-style: none;
        display: block;
        width: 208px;
        border: #efefef 1px solid;
        font-size: 14px;
        resize: none;
        transition: 0.3s ease-out 0s;
        -webkit-transition: 0.3s ease-out 0s;
      }
      .MAvaBtn {
        line-height: 30px;
        border-radius: 3px;
        color: #fff;
        background-color: #ccc;
        margin-top: 10px;
        display: block;
        text-align: center;
        transition: background-color 0.3s ease-out 0s;
        -webkit-transition: background-color 0.3s ease-out 0s;
        cursor: pointer;
      }
    }
    .MAvaMore {
      margin-top: 20px;
      border-top: #e2e2e2 1px solid;
      border-bottom: #e2e2e2 1px solid;
      .MAvaNums {
        position: relative;
        width: 33%;
        float: left;
        padding: 10px 0;
        text-align: center;
        line-height: 20px;
        strong {
          font-size: 20px;
          color: #444;
          font-family: Arial;
          a {
            color: #444;
          }
        }
        p {
          font-size: 14px;
        }
        &:after {
          content: "";
          width: 1px;
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: #e2e2e2;
        }
      }
    }
    .MUsers {
      padding: 45px 30px 0;
      text-align: center;
      font-size: 14px;
      .MUsersTitle {
        font-size: 16px;
        color: #444;
      }
      .MUsersDetail {
        margin-top: 18px;
        overflow: hidden;
        .MUsersAtom {
          width: 1000px;
          overflow: hidden;
          *zoom: 1;
        }
        ul {
          width: 240px;
          float: left;
          li {
            width: 52px;
            float: left;
            margin-right: 4px;
            margin-bottom: 20px;
            img {
              border-radius: 48px;
            }
            p a {
              line-height: 16px;
              height: 16px;
              display: block;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              margin-top: 10px;
              color: #ff7200;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
  .users-tips {
    width: 70%;
    height: auto;
    margin-left: 30%;
    .main_links {
      padding: 20px 0 17px;
      position: relative;
      li {
        float: left;
        width: 25%;
        position: relative;
        text-align: center;
        .main_links_icon {
          color: #ff9d00;
          text-decoration: none;
          cursor: pointer;
          i {
            width: 45px;
            height: 46px;
            background-image: url(../../assets/img/icon/home_sprite_v15.png);
            display: inline-block;
            position: relative;
          }
          .write_note {
            background-position: -210px -425px;
          }
          .ask_expert {
            width: 53px;
            background-position: -260px -427px;
          }
          .add_footprint {
            width: 56px;
            height: 49px;
            background-position: -317px -422px;
          }
          .invite_friends {
            height: 47px;
            background-position: -379px -424px;
          }
          span {
            color: #999;
            font-size: 16px;
            margin-top: 6px;
            display: block;
          }
        }
        &:after {
          content: "";
          width: 1px;
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: #e5e5e5;
        }
      }
    }
    .common_block {
      margin-bottom: 18px;
      background-color: #fff;
      border: #e2e2e2 1px solid;
      box-shadow: 0 0 2px rgb(0 0 0 / 5%);

      .open_corner {
        width: 40px;
        height: 40px;
        position: absolute;
        right: 0;
        top: 0;
        a {
          width: 100%;
          height: 100%;
          background-image: url(../../assets/img/icon/home_sprite_v15.png);
          background-position: -138px -243px;
          position: relative;
          overflow: hidden;
          display: block;
          z-index: 2;
          span {
            border-left-color: #fff;
            left: 2px;
            top: -21px;
            transform: scale(0.65) skewX(10deg);
            -webkit-transform: scale(0.65) skewX(10deg);
            transition: 0.3s ease-out 0s;
            -webkit-transition: 0.3s ease-out 0s;
            *display: none;
            .open_corner i {
              position: absolute;
              width: 0;
              height: 0;
              left: -14px;
              top: -14px;
              border-width: 14px;
              border-style: dashed dashed dashed solid;
              border-color: transparent transparent transparent #eee;
              box-shadow: 0 2px 5px rgb(0 0 0 / 25%),
                -1px 0 5px rgb(0 0 0 / 10%);
              &:before {
                content: "";
                position: absolute;
                width: 0;
                height: 0;
                left: -14px;
                top: -14px;
                border-width: 14px;
                border-style: dashed dashed dashed solid;
                border-color: transparent transparent transparent #eee;
              }
            }
            &:before {
              content: "";
              position: absolute;
              width: 0;
              height: 0;
              border-style: dashed dashed solid dashed;
              border-color: transparent transparent #eee transparent;
              border-bottom-color: #fff;
              border-width: 30px;
              left: -30px;
              top: -30px;
            }
          }
        }
      }
    }
    .personal_info {
      border: 0;
      background-color: #f5dc52;
      box-shadow: 2px 3px 0 #dfca58;
      padding: 28px 30px 30px;
      margin-bottom: 30px;
      .personal_tips {
        width: 60%;
        margin-left: 32px;
        font-size: 14px;
        color: #333;
        line-height: 30px;
        strong {
          font-size: 18px;
          color: #ff7200;
          font-weight: normal;
        }
      }
      .personal_list {
        margin-top: 22px;
        overflow: hidden;
        *zoom: 1;
        ul {
          width: 100%;
          display: flex;
          justify-content: center;
          li {
            width: 240px;
            margin-right: 30px;
            padding: 0 16px 30px;
            background-color: #fff;
            float: left;
            text-align: center;
            .personal_ico {
              height: 105px;
              line-height: 105px;
              text-align: center;
              i {
                width: 59px;
                height: 71px;
                line-height: 0;
                display: inline-block;
                background-image: url(../../assets/img/icon/default_sprite_v6.png);
                background-position: -1px -256px;
                vertical-align: middle;
              }
              .ico_stroll {
                width: 72px;
                height: 76px;
                background-position: -67px -256px;
              }
              .ico_daka {
                width: 71px;
                height: 81px;
                background-position: -147px -255px;
              }
            }
            .personal_word {
              margin-top: 2px;
              font-size: 14px;
              line-height: 24px;
              height: 72px;
            }
            .personal_btn {
              margin-top: 15px;
              a {
                width: 124px;
                background-color: #f1744f;
                font-size: 14px;
                display: inline-block;
                color: #fff;
                line-height: 36px;
                border-radius: 36px;
              }
              &.complete a {
                background-color: #4ea88f;
                position: relative;
                width: 96px;
                cursor: default;
              }
            }
          }
        }
      }
    }
    .my_notes {
      padding-bottom: 30px;
      .common_title {
        padding: 25px 30px;
        line-height: 30px;
        position: relative;
        h2 {
          position: relative;
          top: 4px;
          display: inline;
          font-size: 20px;
          color: #444;
          font-weight: normal;
        }
      }
      .notes_default_v2 {
        padding-bottom: 40px;
        position: relative;
        .notes_dcon {
          width: 100%;
          height: 450px;
          background: url(../../assets/img/User/noyj_v2.jpeg) no-repeat;
          background-size: 100% 100%;
        }
        .btn_write {
          display: block;
          width: 140px;
          height: 40px;
          border-radius: 4px;
          background-color: #ff9e00;
          position: absolute;
          right: 30px;
          top: -61px;
          font-size: 16px;
          color: #fff;
          text-align: center;
          line-height: 40px;
          i {
            display: inline-block;
            width: 18px;
            height: 18px;
            background: url(../../assets/img/icon/home_sprite_v15.png) -228px -325px
              no-repeat;
            margin-right: 5px;
            vertical-align: middle;
          }
        }
      }
      .more_notes {
        text-align: center;
        margin-top: 10px;
        position: relative;
        height: 38px;
        .btn_deleted {
          position: absolute;
          left: 34px;
          top: 15px;
          font-size: 14px;
          color: #999;
          i {
            float: left;
            margin: 2px 5px 0 0;
            width: 17px;
            height: 17px;
            background-image: url(../../assets/img/icon/ico_sprite_v8.png);
            background-position: -50px -215px;
          }
        }
      }
      .notes_default {
        padding: 5px 0 50px 130px;
        position: relative;
        i {
          width: 208px;
          height: 157px;
          background-image: url(../../assets/img/icon/default_sprite_v6.png);
          background-position: -5px -68px;
          display: block;
        }
      }
      .ask_default {
        padding-left: 365px;
        i {
          width: 176px;
          height: 183px;
          margin-left: 150px;
          background-position: -227px -65px;
        }
        .notes_default_detail {
          width: 250px;
          position: absolute;
          left: 312px;
          top: 75px;
          font-size: 16px;
          color: #999;
          line-height: 25px;
        }
        .notes_default_detail {
          left: 200px;
          width: 220px;
        }
      }
      .dp_default {
        padding-left: 145px;
        padding-top: 0;
        i {
          width: 199px;
          height: 177px;
          margin-left: 50px;
          background-position: -409px -66px;
        }
        .notes_default_detail {
          left: 450px;
          top: 90px;
          width: 250px;
          position: absolute;
          font-size: 16px;
          color: #999;
          line-height: 25px;
        }
      }
    }
  }
}
</style>