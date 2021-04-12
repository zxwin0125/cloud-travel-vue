// 项目入口文件

// 引入 Express
const express = require('express')
// 实例化 App
const app = express();
// 引入body-parser
const bodyParser = require("body-parser")
// 使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// 设置路由
app.get("/",(req, res) =>{
    res.send('Hello World')
})

const users = require("./routes/api/users") // 导入路由模块
app.use("/api/users",users) // 使用routes



// 端口号
const port = process.env.PORT || 3000;

// 监听本地服务器
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

