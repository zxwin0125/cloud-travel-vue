<template>
  <section class="dataViewTitle">
    <el-container>
      <el-row :span="24">
        <el-col :span="14" class="Text">
          <h3>早上好呀！zxwin</h3>
        </el-col>
        <el-col :span="10" class="Select">
          <select class="">
            <option selected>Aug 19</option>
            <option value="1">July 19</option>
            <option value="2">Jun 19</option>
          </select>
        </el-col>
      </el-row>
    </el-container>
  </section>
</template>

<script>
export default {
  name: "DataViewTitle",
};
</script>

<style lang="scss" scoped>
.dataViewTitle {
  padding: 30px 35px 0;
  .el-container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: 35px;
    margin-left: 35px;
    .el-row {
      width: 100%;
      margin-right: -15px;
      margin-left: -15px;
      .el-col {
        position: relative;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
      }
      .Text {
        align-self: center;
        h3 {
          font-size: 24px;
          font-weight: 500;
          color: #1c2d41 !important;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-top: 0px;
          margin-bottom: 0.25rem !important;
        }
      }
      .Select {
        float: right !important;
        select {
          width: 126px;
          height: 44px;
          line-height: 25px;
          padding: 10px 45px 13px 30px;
          background-size: auto;
          border-radius: 60px;
          border: 0 !important;
          background-color: #fff !important;
          appearance: none;
          background: url(../../../assets/img/DataVisualization/custom-select.png)
            right 1.1rem center no-repeat;
          float: right !important;
          display: block;
          font-size: 14px;
          color: #555555;
          font-family: inherit;
        }
      }
    }
  }
}
</style>