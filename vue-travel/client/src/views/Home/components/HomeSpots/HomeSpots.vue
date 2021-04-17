<template>
    <section class="homeSpots">
        <el-container>
            <el-row>
                <el-col :span="16" class="spots_head">
                    <h2>热门景点·
                        <span style="font-size: 25px;">Tourism</span>
                    </h2>
                    <p>旅行，自由。没有繁琐的计划，没有沉重的负担，只有最纯粹的态度。</p>
                </el-col>
            </el-row>
            <el-row :span="24">
                <SpotsItem v-for="item in SpotsData" :key="item.index_infoID" :SpotsItemData="item" />
            </el-row>
        </el-container>
    </section>
    </template>
    
    <script>
    import SpotsItem from '../HomeSpots/ChildSpots/SpotsItem'
    export default {
        name: "HomeSpots",
        components: {
            SpotsItem
        },
        props: {
            SpotsData: {
                type: Array,
            }
        },
        data() {
            return {
    
            }
        }
    }
    </script>
    
    <style lang="scss" scoped>
    .homeSpots {
        background-color: #F4F4F4;
        padding: 2em 0;
        clear: both;
    }
    
    .el-container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: 36px;
        margin-left: 36px;
        display: flex;
        flex-direction: column;
    }
    
    .el-row {
        margin-right: -15px;
        margin-left: -15px;
    }
    
    .el-col {
        position: relative;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }
    
    .spots_head {
        margin-left: 195px;
        text-align: center;
    }
    
    .spots_head h2 {
        font-size: 40px;
        font-weight: 600;
        /* // margin-top: 20px; */
        margin-bottom: 20px;
        line-height: 1.5;
        color: #000;
    }
    
    .spots_head p {
        margin-bottom: 20px;
        font-size: 18px;
        line-height: 1.5;
        color: #828282;
    }
    
    .spots_item {
        margin-bottom: 30px;
    }
    
    .spots_item>a {
        display: block;
        color: #000;
        position: relative;
        bottom: 0;
        overflow: hidden;
        transition: 0.5s;
    }
    
    .spots_item>a img {
        position: relative;
        transition: 0.5s;
    }
    
    .spots_item>a h3 {
        z-index: 12;
        position: absolute;
        right: 20px;
        left: 20px;
        bottom: 50px;
        color: #fff;
        margin: 0;
        padding: 0;
        opacity: 1;
        font-size: 18px;
        font-weight: 300;
        visibility: visible;
        transition: 0.3s;
    }
    </style>
    