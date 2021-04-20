<template>
  <section class="blogItem">
    <el-col :span="8">
      <div class="col-sm-4 blog-post">
        <img :src="imgs" alt="" />
        <div>
          <h2>{{ BlogItemData.blog_title }}</h2>
        </div>

        <div class="date">{{ BlogItemData.blog_date }}</div>
        <p>{{ BlogItemData.blog_context }}</p>
        <router-link tag="a" to="/strategy">Read More</router-link>
      </div>
    </el-col>
  </section>
</template>

<script>
export default {
  name: "BlogItem",
  props: {
    BlogItemData: {
      type: Object,
    },
  },
  data() {
    return {
      imgs: require("@/assets/img/Home/blog/" +
        this.BlogItemData.blog_img +
        ".jpg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.el-col {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  img {
    margin-bottom: 20px;
    max-width: 100%;
    vertical-align: middle;
    width: 100%;
    height: 195px;
  }
}

.el-col a {
  color: #4da7ca;
  text-decoration: none;
  background-color: transparent;
}

.el-col h2 {
  margin: 0 0 15px 0;
  color: #3a4f52;
  
  font-family: "Alegreya Sans";
  font-size: 30px;
  font-weight: 500;
  line-height: 1.1;
}

#homeBlog .date {
  margin-bottom: 15px;
  font-style: italic;
}

#homeBlog p {
  margin: 0 0 10px;
}
</style>