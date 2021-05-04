// 项目入口文件
// 引入 Express
const express = require('express')
// 引入 cors 模块
const cors = require('cors')

// 引入 passport 验证token
const passport = require('passport')
// 引入 body-parser
const bodyParser = require("body-parser")

// 配置session、cookie进行记住密码
const session = require('express-session')
const cookie = require('cookie-parser')




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

// 配置session、cookie
// app.configure(function() {
//     app.use(cookie());
//     app.use(session({
//         name: 'final',
//         secret: '1234567',
//         cookie: {maxAge: 10000}, // 过期时间 毫秒为单位
//         resave: true, // 每次触发后保存时间
//         rolling: true // 最后一次触发后计时
//     }))
// })

// 路由
const index = require("./routes/api/index")
const desInfo = require("./routes/api/desInfo")
const strategy = require("./routes/api/strategy")
const users = require("./routes/api/users") // 导入路由模块

app.use("/api/index", index)
app.use("/api/desInfo", desInfo)
app.use("/api/strategy", strategy)
app.use("/api/users", users) // 使用routes








// 端口号
const port = process.env.PORT || 3000;

// 监听本地服务器
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

module.exports = app;