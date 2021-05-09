<template>
  <div id="tickets_pay">
    <el-container>
      <el-header></el-header>
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
            <h1>[玉龙雪山]</h1>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" status-icon>
              <el-form-item label="姓名：" prop="username">
                <el-input v-model="ruleForm.username" placeholder="请输入姓名"></el-input>
              </el-form-item>
              <el-form-item label="证件号：" prop="idcard">
                <el-input v-model="ruleForm.idcard" placeholder="请输入身份证号码"></el-input>
              </el-form-item>
              <el-form-item label="手机号：" prop="phone">
                <el-input v-model="ruleForm.phone" placeholder="请输入手机号码"></el-input>
              </el-form-item>
              <el-form-item label="游玩时间:" prop="time">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.time">
                  </el-date-picker>
                </el-col>
              </el-form-item>
              <el-form-item prop="read">
                <el-checkbox v-model="ruleForm.read">
                  已阅读<a href="">《用户协议》</a>
                </el-checkbox>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即购买</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>

            <!-- 表单结束 -->
            <!-- 购票须知开始 -->
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
    </el-container>
  </div>
</template>

<script>
  import Swiper from "../../components/Swiper";
  // 注册接口
  import { getPay } from "@/api/getData.js"
  export default {
    components: {
      Swiper,
    },
    data() {
      // 校验规则
      // 姓名校验
      var username = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('姓名不能为空!'))
        }
      };
      // 身份证校验
      var idcard = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入证件号!'));
        } else {
          const reg = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的证件号!'));
          }
        }
      };
      // 手机号校验
      var phone = (rule, value, callback) => {
        if (!value) {
          callback(new Error('手机号不能为空!'))
        } else {
          const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的手机号'));
          }
        }
      };
      // 时间校验
      var time = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('时间不能为空!'))
        }
      };
      // 用户协议校验
      var read = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请同意用户协议!'))
        }
      };

      return {
        // 表单信息
        ruleForm: {
          username: "",
          idcard: "",
          phone: "",
          time: "",
          read: false
        },

        // 使用校验规则
        rules: {
          username: [
            { validator: username, trigger: 'blur' }
          ],
          idcard: [
            { validator: idcard, trigger: 'blur' }
          ],
          phone: [
            { validator: phone, trigger: 'blur' }
          ],
          time: [
            { validator: time, trigger: 'blur' }
          ],
          read: [
            { validator: read, trigger: 'blur' }
          ]
        },

        // 图片地址数组
        imgs: [
          require("../../assets/img/Swiper/swiper01.png"),
          require("../../assets/img/Swiper/swiper02.png"),
          require("../../assets/img/Swiper/swiper03.png"),
          require("../../assets/img/Swiper/swiper04.png"),
          require("../../assets/img/Swiper/swiper05.png"),
        ],
        ticketItem: []
      }
    },
    methods: {
      // 提交订单
      async submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });

        try {
          // 购票接口
          this.$axios.get('/api/pay',
          {
            params: {
              "ticket_price":this.ticketItem[2]
            }
          })
            .then((res) => {
              console.log(res);
              if (res.data.code == 200) {
                // 购买成功
                this.$message.success('下单成功!');
                location.href=res.data.data
              } else {
                this.$message.error('下单失败!');
              }
            })
        } catch (error) {
          console.log('错误', error);
        }
      },


    },
    created() {
      this.ticketItem.push(
        this.$route.query.id,
        this.$route.query.title,
        this.$route.query.price
      )


    }

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