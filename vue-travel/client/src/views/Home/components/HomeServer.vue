<template>
    <section id="homeServer">
        <div class="overlay"></div>
        <el-container>
            <el-row>
                <el-col :span="14" class="serviceHead">
                    <h2>我们的服务/
                        <span>Our service</span>
                    </h2>
                    <p>
                        旅行不是一次出行，也不只是一个假期。旅行是一个过程，一次发现。是一个自我发现的过程。真正的旅行让我们直面自我。 旅行不仅让我们看到世界，更让我们看到自己在其中的位置。
                    </p>
                </el-col>
                <el-col :span="14">
                    <ul>
                        <el-col :span="24">
                            <li>高效快捷的提供商系统应用，聚集了2000+家各地的供应商</li>
                        </el-col>
                        <el-col :span="24">
                            <li>资源丰富，超过200万条旅游路线供你选择</li>
                        </el-col>
                        <el-col :span="24">
                            <li>八大核心保障， 选我们更放心</li>
                        </el-col>
                        <el-col :span="24">
                            <li>我们与旅游战略品牌联盟，合作了很多很多战略伙伴</li>
                        </el-col>
                    </ul>
                </el-col>
                <el-col :span="10" class="servicePic">
                    <router-link tag="a" :to="{path:'Destination'}"> <img src="@/assets/img/Home/service/ac.jpg" alt="" title="跳转到热门景点"></router-link>
    
                </el-col>
            </el-row>
    
        </el-container>
    
    </section>
    </template>
    
    <script>
    export default {
        name: "HomeServer",
    
    };
    </script>
    
    <style lang="scss" scoped>
    #homeServer {
        position: relative;
        padding: 2em 0;
        clear: both;
        background: url(@/assets/img/Home/service/bc.webp);
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }
    
    #homeServer .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
    }
    
    .el-container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: 30px;
        margin-left: 30px;
    }
    
    .el-row {
        float: left;
    }
    
    .el-col {
        position: relative;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }
    
    .serviceHead {
        margin-bottom: 2em;
    }
    
    .serviceHead h2 {
        color: white;
        font-size: 40px;
        font-weight: 500;
        margin-bottom: 20px;
        line-height: 1.5;
    }
    
    .serviceHead h2>span {
        font-size: 25px;
        color: #ccc
    }
    
    .serviceHead p {
        line-height: 33px;
        margin-bottom: 20px;
        margin-top: 40px;
        color: #fff;
        font-size: 20px;
        text-indent: 2rem;
    }
    
    .el-col ul li {
        font-size: 16px;
        list-style: upper-latin;
        color: #fff !important;
        padding-top: 10px;
        margin-left: 80px;
    }
    
    .servicePic {
        float: right;
    }
    
    .servicePic img {
        width: 100%;
        vertical-align: top;
        margin-top: -170px;
        border-radius: 5px
    }
    </style>
    