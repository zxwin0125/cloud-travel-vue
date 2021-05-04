<template>
  <section id="ticketItem">
    <el-col :span="8">
      <div class="single-package-item">
        <img :src="imgs" alt="" />
        <div class="single-package-item-txt">
          <h3>
            {{ TicketItemData.pack_address }}
            <span class="pull-right">¥{{ TicketItemData.pack_price }}</span>
          </h3>

          <div class="packages-para">
            <p>
              <span>
                <i class="fa fa-angle-right"></i>
                {{ TicketItemData.pack_time }}
              </span>
              <span>
                <i class="fa fa-angle-right"></i>
                {{ TicketItemData.pack_star }}
              </span>
            </p>
            <p>
              <span>
                <i class="fa fa-angle-right"></i>
                {{ TicketItemData.pack_trans }}
              </span>
              <i class="fa fa-angle-right"></i>
              {{ TicketItemData.pack_food }}
            </p>
          </div>

          <div class="packages-review">
            <p>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <span>{{ TicketItemData.pack_reviews }}万人次</span>
            </p>
          </div>

          <div class="about-btn">
            <button class="about-view packages-btn" @click="toTicket()">
              bug now
            </button>
          </div>
        </div>
      </div>
    </el-col>
  </section>
</template>

<script>
export default {
  name: "TicketItem",
  props: {
    TicketItemData: {
      type: Object,
    },
  },
  data() {
    return {
      imgs: require("@/assets/img/Home/ticket/" +
        this.TicketItemData.pack_img +
        ".jpg"),
    };
  },
  methods: {
    toTicket() {
      this.$router.push("/ticket").catch(err => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.el-col {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  .single-package-item {
    margin-bottom: 30px;
    padding-bottom: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    transition: 0.5s;

    img {
      width: 100%;
      height: 264px;
      border: none;
      vertical-align: middle;
    }

    .single-package-item-txt {
      padding: 0 25px;

      h3 {
        position: relative;
        font-size: 20px;
        color: #565a5c;
        font-weight: 500;
        font-family: "Poppins", sans-serif;
        padding: 20px 0;

        .pull-right {
          float: right !important;
        }
      }

      .packages-para {
        padding: 17px 0 0;
        text-transform: capitalize;

        p {
          font-size: 14px;
          color: #aaa;
          font-family: "Poppins", sans-serif;
          margin-bottom: 15px;
          margin: 0 0 10px;

          span {
            display: inline-block;
            width: 150px;
          }
        }
      }

      .packages-review {
        p {
          i {
            color: #ffdf00;
            font-size: 16px;
          }
          .fa {
            display: inline-block;
            font: normal normal normal 14px/1 FontAwesome;
            font-size: inherit;
            text-rendering: auto;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          span {
            margin-left: 20px;
            font-size: 14px;
            color: #aaa;
            font-family: "Poppins", sans-serif;
            text-transform: capitalize;
          }
        }
      }

      .about-btn {
        margin-top: 39px;
        letter-spacing: 1.2px;
        transition: 0.5s ease-in-out;

        .about-view {
          display: flex;
          justify-content: center;
          align-items: center;
          background: #00d8ff;
          border: 1px solid #00d8ff;
          white-space: nowrap;
          font-family: "Poppins", sans-serif;
          border-radius: 5px;
          box-shadow: 0 5px 20px rgba(14, 15, 18, 0.2);
          transition: 0.5s ease-in-out;
        }

        .packages-btn {
          width: 110px;
          height: 35px;
          font-size: 14px;
          color: #fff;
          text-transform: capitalize;
          transition: 0.5s;
        }
      }
    }
  }
}
</style>