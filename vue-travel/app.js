// 项目入口文件

// 引入 Express
const express = require('express')
// 实例化 App
const app = express();

// 设置路由
app.get("/",(req, res) =>{
    res.send('Hello World')
})


// 端口号
const port = process.env.PORT || 3000;

// 监听本地服务器
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

