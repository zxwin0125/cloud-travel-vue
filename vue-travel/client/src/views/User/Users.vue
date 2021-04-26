<template>
  <div class="users">
    <div class="mSliderBox">
      <div class="mSlider tc_ac_tr">
        <div class="mSlider_con" style="position: relative; width: 1920px">
          <ul class="clearfix slider_ul">
            <li>
              <img
                src="//pic5.40017.cn/03/000/94/a6/rB5oQFv3pB6AYt9-AAGqaOtgIQE918.jpg"
                alt="0元门票限量抢"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Usertop from "../Person/components/Usertop";
import { getUser } from "@/api/getData.js";
export default {
  name: "Users",
  components: {
    // Usertop
  },
  data() {
    return {
      // 个人信息
      userInfo: [],
    };
  },
  // 定义方法
  methods: {},
  created() {},
  mounted() {
    //当页面渲染完成时调用方法获取数据
  },
};
</script>
<style lang="scss" scoped>
.users {
  .mSliderBox {
    overflow: hidden;
    width: 100%;
    position: relative;
    .mSlider {
      position: relative;
      height: 407px;
      margin: 0 auto;
      margin-bottom: 40px;
      width: 1190px;
      overflow: visible !important;
      .mSlider_con {
        height: 407px;
        width: auto;
        margin-left: -960px;
        left: 50%;
        .slider_ul {
          height: 407px;
          li {
            float: left;
            overflow: hidden;
            height: 407px;
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      }
    }
  }
}
</style>