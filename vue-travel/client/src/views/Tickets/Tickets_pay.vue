<template>
  <div id="tickets_pay">
    <el-container>
      <el-aside width="40%">
        <div class="imgs">
          <!-- 轮播图 -->
          <Swiper :imgs="imgs" />
          <!-- 轮播图 -->
        </div>
      </el-aside>
      <!-- 表单 -->
      <el-main>
        <div class="content02">
          <h1>{{ ticketItem[1] }}¥{{ ticketItem[2] }}</h1>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="80px"
            status-icon
          >
            <el-form-item label="姓名：" prop="order_name">
              <el-input
                type="text"
                v-model="ruleForm.order_name"
                placeholder="请输入姓名"
              ></el-input>
            </el-form-item>
            <el-form-item label="证件号：" prop="order_cardId">
              <el-input
                type="text"
                v-model="ruleForm.order_cardId"
                placeholder="请输入身份证号码"
              ></el-input>
            </el-form-item>
            <el-form-item label="手机号：" prop="order_phone">
              <el-input
                type="tel"
                v-model="ruleForm.order_phone"
                placeholder="请输入手机号码"
              ></el-input>
            </el-form-item>
            <el-form-item label="出发日期:" prop="order_time">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.order_time"
                  :picker-options="pickerOptions"
                  suffix=""
                >
                </el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item prop="order_rule">
              <el-checkbox v-model="ruleForm.order_rule">
                已阅读<a href="">《用户协议》</a>
              </el-checkbox>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >立即购买</el-button
              >
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-main>

      <el-aside width="20%">
        <div class="content01_03">
          <div class="content01_03_01">
            <div>
              <h4>不支持退：</h4>
            </div>
            <div>
              <p>
                票品为有价证券，非普通商品，其背后承载的文化服务具有时效性，稀缺性等特征，不支持退换。
              </p>
            </div>
          </div>
          <div class="content01_03_01">
            <div>
              <h4>购票须知：</h4>
            </div>
            <div>
              <p>
                仅可购买登陆人员一人门票，无需取票，凭借电子票或手机消息直接进入
              </p>
            </div>
          </div>
          <div class="content01_03_01">
            <div>
              <h4>注 意：</h4>
            </div>
            <div>
              <p>由于疫情影响，所有景区开放时间以当地通知为准。</p>
            </div>
          </div>
        </div>
        <!-- 购票须知结束 -->
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import Swiper from "../../components/Swiper";
import { orderTicket } from "@/api/getData.js";
export default {
  components: {
    Swiper,
  },
  data() {
    // 校验规则
    // 姓名校验
    const order_name = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("姓名不能为空!"));
      } else {
        const reg = /^[\u4e00-\u9fa5]{0,}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的姓名!"));
        }
      }
    };

    // 身份证校验
    const order_cardId = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入证件号!"));
      } else {
        const reg = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的证件号!"));
        }
      }
    };

    // 手机号校验
    const order_phone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空!"));
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
      }
    };

    // 日期校验
    const order_time = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("日期不能为空!"));
      } else {
        callback();
      }
    };

    // 用户协议校验
    const order_rule = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请同意用户协议!"));
      } else {
        callback();
      }
    };

    return {
      // 表单信息
      ruleForm: {
        order_name: "张鑫",
        order_cardId: "320684199901257678",
        order_phone: "18862223315",
        order_time: "",
        order_rule: true,
      },

      // 使用校验规则
      rules: {
        order_name: [{ validator: order_name, trigger: "blur" }],
        order_cardId: [{ validator: order_cardId, trigger: "blur" }],
        order_phone: [{ validator: order_phone, trigger: "blur" }],
        order_time: [{ validator: order_time, trigger: "blur" }],
        order_rule: [{ validator: order_rule, trigger: "blur" }],
      },

      // 日期配置项
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now();
        },
      },

      // 图片地址数组
      imgs: [
        require("../../assets/img/Swiper/swiper01.png"),
        require("../../assets/img/Swiper/swiper02.png"),
        require("../../assets/img/Swiper/swiper03.png"),
        require("../../assets/img/Swiper/swiper04.png"),
        require("../../assets/img/Swiper/swiper05.png"),
      ],

      ticketItem: [],
    };
  },
  created() {
    this.ticketItem.push(
      this.$route.query.ticket_id,
      this.$route.query.ticket_title,
      this.$route.query.ticket_price
    );
  },
  methods: {
    // 提交订单
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          orderTicket(
            this.ruleForm.order_name,
            this.ruleForm.order_cardId,
            this.ruleForm.order_phone,
            this.ruleForm.order_time,
            this.ruleForm.order_rule,
            this.ruleForm.order_phone,
            this.ticketItem[0],
            this.ticketItem[1],
            this.ticketItem[2]
          ).then((res) => {
            console.log("register", res);
            if (res.data.code == 200) {
              // 购买成功
              this.$message.success("购买成功!");
              // location.href = res.data.data;
            } else {
              this.$message.error("购买失败!");
            }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
};
</script>

<style lang="scss" scoped>
/* // --------------轮播图----------------- */
.imgs {
  width: 80%;
  height: 80%;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  margin-top: 60px;
}

.el-aside {
  display: flex;
  justify-content: center;
}

// -----------轮播图框架结束--------------
// ------------表单部分------------------
.content02 {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}

.content02 h1 {
  font-size: 30px;
  font-weight: 600;
  margin: 15px;
  display: flex;
}

// ---------------表单部分结束--------------
// -----------------购票须知部分开始--------------
.content01_03 {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding-left: 0px;
  width: 80%;
  margin-right: 20%;
}

.content01_03_01 {
  border: 1px solid red;
  margin-top: 10px;
}

p {
  padding: 2px;
}

.content01_03_01 h4 {
  font-size: 20px;
  font-weight: 600;
  color: red;
}

// ------------------表单须知部分结束---------------
</style>