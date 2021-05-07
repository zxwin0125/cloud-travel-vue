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
    }
    .its_tags i {
      background-image: url(/images/home_new2015/twice_ico_sprite_v9.png);
      background-size: 220px;
      background-position: 0 -262px;
    }
    .its_tags i {
      width: 40px;
      height: 20px;
      display: inline-block;
      background-image: url(/images/home_new2015/home_sprite_v15.png);
      background-position: 0 -460px;
      margin-right: 3px;
    }
  }
}
</style>