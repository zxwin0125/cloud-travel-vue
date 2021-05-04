<template>
  <!-- 丽江景点 -->
  <div id="destinationplace">
    <div class="placelist">
      <section class="container">
        <router-link to="/Destination/Destination_des">
          <div class="view">
            <div class="all" v-for="item in xsbnInfo" :key="item.des_xsbn_id">
              <a href="#">
                <div class="tupian">
                    {{item.des_xsbn_img}}
                  <!-- <img
                    :src="imgs"
                    alt=""
                    class="rounded"
                  /> -->
                </div>
                <h4>{{ item.des_xsbn_title }}</h4>
                <span>评分：{{ item.des_xsbn_score }}</span>
                <p>{{ item.des_xsbn_content }}...</p>
              </a>
            </div>
          </div>
        </router-link>
      </section>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Destinationplace",
  props: {
    xsbnInfo: {
        type: Array,
        default: []
    }
  },
  data() {
    return {
    //   imgs: require(`@/assets/img/Destination/desPlace/ + ${this.xsbnInfo[0].des_xsbn_img} +.jpg`),
    };
  },
  computed: {      
  },
  watch: {
      xsbnInfo() {
          console.log('909',this.xsbnInfo);
          this.xsbnInfo.map((item) => {
              console.log('000',item.des_xsbn_img);
          })
      }
  },
  created() {
    console.log("111", this.xsbnInfo.length);
  },
};
</script>
  
  <style scoped>
.view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fff;
  /* border: 1px solid #eee; */
}

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
  