<template>
    <section id="spots_item">
        <el-col :span="8" class="spots_item">
            <router-link to="/destination">
                <img :src="imgs" alt="">
                <h3>{{SpotsItemData.index_tourTitle}}</h3>
            </router-link>
        </el-col>
    </section>
</template>

<script>

    export default {
        name: "SpotsItem",
        props: {
            SpotsItemData: {
                type: Object,
            }
        },
        data() {
            return {
                imgs: require("@/assets/img/Home/spots/" + this.SpotsItemData.index_tourImg + ".jpg"),
                
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
        width: 100%;
        height: 100%;
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