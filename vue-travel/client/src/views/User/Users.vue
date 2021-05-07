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
    console.log("1212", this.$store);
  },
  mounted() {},
  methods: {
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
}
.MAvaMore .MAvaNums {
    position: relative;
    width: 33%;
    float: left;
    padding: 10px 0;
    text-align: center;
    line-height: 20px;
}
.MAvaMore .MAvaNums strong {
    font-size: 20px;
    color: #444;
    font-family: Arial;
}
.MAvaMore .MAvaNums p {
    font-size: 14px;
}
.MAvaMore .MAvaNums:after {
    content: '';
    width: 1px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #e2e2e2;
}
.MAvaMore .MAvaNums strong a {
    color: #444;
}
  }
}
</style>