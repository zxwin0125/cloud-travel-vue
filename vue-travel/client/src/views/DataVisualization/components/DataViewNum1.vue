<template>
    <section id="DataViewNum1">
        <el-container>
            <el-row :span="24">
                <DataCard1 />
                <DataCard2 />
                <DataCard3 />
            </el-row>
        </el-container>
    </section>
</template>
<script>
    import DataCard1 from './DataChild/DataCard1'
    import DataCard2 from './DataChild/DataCard2'
    import DataCard3 from './DataChild/DataCard3'
    export default {
        name: "DataViewNum1",
        components: {
            DataCard1,
            DataCard2,
            DataCard3
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
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
        width: 103%;
    }

    
</style>