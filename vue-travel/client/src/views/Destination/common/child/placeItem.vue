<template>
  <section class="all" @click="toPlace">
      <div class="tupian">
        <img :src="imgsUrl" alt="" class="rounded" />
      </div>
      <h4>{{ des_place_title }}</h4>
      <span>评分：{{ des_place_score }}</span>
      <p>{{ des_place_content }}...</p>
  </section>
</template>

<script>
export default {
  name: "placeItem",
  props: {
    placeItemData: {
      type: Object,
    },
  },
  data() {
    return {
      des_place_id: "",
      des_place_title: "",
      des_place_score: "",
      des_place_content: "",
      des_place_img: "",
      imgsUrl: "",
    };
  },
  computed: {
  },
  created() {
    this.changePlace();
  },
  mounted() {},
  methods: {
    changePlace() {
      if (this.placeItemData.des_lj_id) {
        this.des_place_id = this.placeItemData.des_lj_id;
        this.des_place_title = this.placeItemData.des_lj_title;
        this.des_place_score = this.placeItemData.des_lj_score;
        this.des_place_content = this.placeItemData.des_lj_content;
        this.des_place_img = this.placeItemData.des_lj_img;
        this.imgsUrl = require("@/assets/img/Destination/desPlace/" + this.des_place_img + ".jpg")
      } else if (this.placeItemData.des_km_id) {
        this.des_place_id = this.placeItemData.des_km_id;
        this.des_place_title = this.placeItemData.des_km_title;
        this.des_place_score = this.placeItemData.des_km_score;
        this.des_place_content = this.placeItemData.des_km_content;
        this.des_place_img = this.placeItemData.des_km_img;
        this.imgsUrl = require("@/assets/img/Destination/desPlace/" + this.des_place_img + ".jpg")
      } else if (this.placeItemData.des_xsbn_id) {
        this.des_place_id = this.placeItemData.des_xsbn_id;
        this.des_place_title = this.placeItemData.des_xsbn_title;
        this.des_place_score = this.placeItemData.des_xsbn_score;
        this.des_place_content = this.placeItemData.des_xsbn_content;
        this.des_place_img = this.placeItemData.des_xsbn_img;
        this.imgsUrl = require("@/assets/img/Destination/desPlace/" + this.des_place_img + ".jpg")
      } else if (this.placeItemData.des_xgll_id) {
        this.des_place_id = this.placeItemData.des_xgll_id;
        this.des_place_title = this.placeItemData.des_xgll_title;
        this.des_place_score = this.placeItemData.des_xgll_score;
        this.des_place_content = this.placeItemData.des_xgll_content;
        this.des_place_img = this.placeItemData.des_xgll_img;
        this.imgsUrl = require("@/assets/img/Destination/desPlace/" + this.des_place_img + ".jpg")
      }
    },
    toPlace() {
      this.$router.push({
        path: '/destination_des'
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.all {
  font-style: normal;
  display: inline-block;
  width: 256px;
  height: 300px;
  /* border: 1px solid #ccc ; */
  margin-left: 28px;
  margin-top: 26px;
  background-color: #fff;
  position: relative;
  z-index: 1;
  border-radius: 4px;
  box-shadow: 2px 2px 15px #eee;
  text-align: center;
}

.tupian {
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-radius: 4px;
}

.all h4 {
  margin-top: 10px;
}

.all img {
  transition: 0.5s;
}

.tupian:hover img {
  transform: scale(1.1);
}

.all:hover {
  box-shadow: 2px 2px 30px #ccc;
}

.all span {
  color: red;
}

.all p {
  color: rgb(99, 98, 98);
}
</style>