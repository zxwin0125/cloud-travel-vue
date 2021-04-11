// 用户登录注册路由
const express = require('express')
const router = express.Router()

// route   GET请求 api/users/test  返回的请求为 json 数据
router.get('/test', (req, res) => {
    res.json({
        msg: "login works"
    })
})

module.exports = router;
