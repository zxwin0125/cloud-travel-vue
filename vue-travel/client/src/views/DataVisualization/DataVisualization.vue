<template>
  <section class="dataVisualization">
    <!-- 文字 -->
    <DataViewTitle />

    <!-- 列表 -->
    <DataViewList />

    <!-- 数据第一部分 -->
    <DataViewNum1 />

    <!-- 数据第二部分 -->
    <DataViewNum2 />

  </section>
</template>

<script>
import DataViewTitle from './components/DataViewTitle'
import DataViewList from './components/DataViewList'
import DataViewNum1 from './components/DataViewNum1'
import DataViewNum2 from './components/DataViewNum2'

export default {
  name: 'DataVisualization',
  components: {
    DataViewTitle,
    DataViewList,
    DataViewNum1,
    DataViewNum2,
  }
}
</script>
  
<style lang="scss" scoped>
  .dataVisualization {
    background-color: #f8f9fa;
  }
</style>