<template>
    <section class="nav" v-show="$route.meta.isturn">
        <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" text-color="#909399"
            active-text-color="#409EFF" @select="handleSelect">
            <!-- 首页 -->
            <el-menu-item index="/" @click="toHome">
                首页
            </el-menu-item>
            <!-- 目的地 -->
            <el-submenu index="/destination">
                <template slot="title">目的地</template>
                <el-menu-item index="/destination/lj" @click="toDes_lj">丽江</el-menu-item>
                <el-menu-item index="/destination/km" @click="toDes_km">昆明</el-menu-item>
                <el-menu-item index="/destination/xgll" @click="toDes_xgll">香格里拉</el-menu-item>
                <el-menu-item index="/destination/xsbn" @click="toDes_xsbn">西双版纳</el-menu-item>
            </el-submenu>
            <!-- 云攻略 -->
            <el-menu-item index="/strategy" @click="toStrategy">
                云攻略
            </el-menu-item>
            <!-- 云社区 -->
            <el-menu-item index="/community" @click="toCommunity">
                云社区
            </el-menu-item>
            <!-- 云商城 -->
            <el-menu-item index="/tickets" @click="toTickets">
                云商城
            </el-menu-item>
            <!-- 云数据 -->
            <el-menu-item index="/dataVisualization" @click="toDataVisualization">
                云数据
            </el-menu-item>
            <!-- 个人中心 -->
            <el-menu-item index="/users" @click="toUser">
                个人中心
            </el-menu-item>
            <el-button type="success" icon="el-icon-user" size="small" @click="toLogin">
                登陆
            </el-button>
            <el-button type="primary" icon="el-icon-edit" size="small" @click="toRegister">
                注册
            </el-button>
        </el-menu>
    </section>
</template>

<script>
    export default {
        name: "Nav",
        components: {},
        data() {
            return {
                activeIndex: "",
            }
        },
        watch: {
            $route() {
                this.handleSelect(this.activeIndex)
            }
        },
        methods: {
            handleSelect(index) {
                this.activeIndex = index
            },
            // 跳转路由
            // 首页
            toHome() {
                this.$router.push('/').catch(err => {})
            },
            // 目的地
            toDes_lj() {
                this.$router.push('/destination/lj').catch(err => {})
            },
            toDes_km() {
                this.$router.push('/destination/km').catch(err => {})
            },
            toDes_xgll() {
                this.$router.push('/destination/xgll').catch(err => {})
            },
            toDes_xsbn() {
                this.$router.push('/destination/xsbn').catch(err => {})
            },
            // 攻略
            toStrategy() {
                this.$router.push('/strategy').catch(err => {})
            },
            // 社区
            toCommunity() {
                this.$router.push('/community').catch(err => {})
            },
            // 商城
            toTickets() {
                this.$router.push('/tickets').catch(err => {})
            },
            // 数据可视化
            toDataVisualization() {
                this.$router.push('/dataVisualization').catch(err => {})
            },
            // 个人中心
            toUser() {
                this.$router.push('/users').catch(err => {})
            },
            // 登陆
            toLogin() {
                this.$router.push('/login').catch(err => {})
            },
            // 注册
            toRegister() {
                this.$router.push('/register').catch(err => {})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-menu-item {
        color: #909399;
        line-height: 60px;
        padding-left: 30px;
        padding-right: 30px;
    }

    /* 登陆注册按钮 */
    .el-button {
        float: right;
        margin-top: 14px;
    }

    .el-button--primary {
        margin-right: 10px;
    }

    .el-button--success {
        margin-right: 20px;
    }
</style>