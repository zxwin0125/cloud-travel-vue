<template>
    <section id="swiper">
        <el-carousel trigger="click" :width="width" :height="height">
            <el-carousel-item v-for="item in imgs" :key="item">
                <img :src="item" alt="">
            </el-carousel-item>
        </el-carousel>
    </section>
    
</template>

<script>
    export default {
        name: "Swiper",
        props: {
            imgs: {
                type: Array,
                required: true
            },
            width: {
                type: String,
            },
            height: {
                type: String,
                // required: true,
                default: '410px'
            }
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    img {
        width: 100%;
        height: 100%;
    }
</style>