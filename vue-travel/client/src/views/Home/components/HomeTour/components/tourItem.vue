<template>
    <section class="tourItem">
        <el-col :span="8" class="tour_item">
            <router-link to="/destination">
                <img :src="imgs" alt="">
                <h3>{{tourItemData.index_tourTitle}}</h3>
            </router-link>
        </el-col>
    </section>
</template>

<script>
    export default {
        name: "tourItem",
        props: {
            tourItemData: {
                type: Object,
            }
        },
        data() {
            return {
                imgs: require("@/assets/img/Home/tour/" + this.tourItemData.tour_img + ".jpg"),
            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-col {
        position: relative;
        height: 257px;
        padding-right: 15px;
        padding-left: 15px;
    }

    .tour_item {
        margin-bottom: 30px;
    }

    .tour_item>a {
        display: block;
        color: #000;
        position: relative;
        bottom: 0;
        overflow: hidden;
        transition: 0.5s;
    }

    .tour_item>a img {
        position: relative;
        transition: 0.5s;
        width: 100%;
        height: 100%;
    }

    .tour_item>a h3 {
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