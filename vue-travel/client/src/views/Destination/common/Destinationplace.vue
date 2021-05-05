<template>
  <!-- 丽江景点 -->
  <div id="destinationplace">
    <div class="placelist">
      <section class="container">
        <div class="view">
          <placeItem
            v-for="(item, index) in placeInfo"
            :key="index"
            :placeItemData="item"
          ></placeItem>
        </div>
      </section>
    </div>
  </div>
</template>
  
<script>
import placeItem from "../common/child/placeItem";
export default {
  name: "Destinationplace",
  props: {
    placeInfo: {
      type: Array,
      default: [],
    }
  },
  components: {
    placeItem,
  },
  data() {
    return {
    };
  },
  computed: {},
  watch: {
  },
  created() {

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
  