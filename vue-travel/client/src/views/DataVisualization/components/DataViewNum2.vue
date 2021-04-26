<template>
    <section id="DataViewNum2">
        <el-container>
            <el-row :span="24">
                <DataCard4 />
                <DataCard5 />
            </el-row>
        </el-container>
    </section>
</template>
<script>
    import DataCard4 from './DataChild/DataCard4'
    import DataCard5 from './DataChild/DataCard5'
    export default {
        name: "DataViewNum2",
        components: {
            DataCard4,
            DataCard5
        }
    }
</script>
<style lang="scss" scoped>
    .el-container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: 70px;
        margin-left: 70px;
    }

    .el-row {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        margin-right: -15px;
        margin-left: -15px;
        width: 103%;
    }

    
</style>