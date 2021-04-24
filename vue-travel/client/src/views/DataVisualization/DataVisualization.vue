<template>
  <section class="dataVisualization">
    <!-- 文字 -->
    <DataViewTitle />

    <!-- 列表 -->
    <DataViewList />
  </section>
</template>

<script>
import DataViewTitle from './components/DataViewTitle'
import DataViewList from '../DataView/components/DataViewList'
export default {
  name: 'DataVisualization',
  components: {
    DataViewTitle,
    DataViewList,
  }
}
</script>
  
<style lang="scss" scoped>
  .dataVisualization {
    background-color: #f8f9fa;
  }
</style>