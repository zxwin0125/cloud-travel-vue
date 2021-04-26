<template>
  <el-row>
    <el-col :xs="24" :sm="24" class="hidden-md-and-up">
      <div class="grid-content bg-purple-dark">
        <form action="#" class="sidebar-upload">
          <div style="display: inline">
            <el-button
              type="success"
              icon="el-icon-edit"
              round
              @click="publishStr"
              >发布攻略</el-button
            >
          </div>
        </form>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    publishStr() {
      this.$router.push("/strategy_add");
    },
  },
};
</script>
<style  scoped>
.sidebar-upload {
  padding: 30px;
  background: #fff;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  text-align: center;
}

.side-box .heading,
.sidebar-upload .heading {
  font-size: 18px;
  margin-bottom: 30px;
  font-family: "Mukta Mahee", arial, sans-serif;
}
</style>
