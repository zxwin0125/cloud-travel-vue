// 项目入口文件
// 引入 Express
const express = require('express')
// 引入 cors 模块
const cors = require('cors')

// 引入 passport 验证token
const passport = require('passport')
// 引入 body-parser
const bodyParser = require("body-parser")



// 实例化 App
const app = express();

// 使用 cors 模块解决跨域问题
app.use(cors());



// 使用body-parser中间件
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// passport 初始化
app.use(passport.initialize())
// 代码抽离
require("./config/passport")(passport)

// 路由
const users = require("./routes/api/users") // 导入路由模块
const index = require("./routes/api/index")
app.use("/api/users", users) // 使用routes
app.use("/api/index", index)







// 端口号
const port = process.env.PORT || 3000;

// 监听本地服务器
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

module.exports = app;