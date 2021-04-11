// users 登录注册路由
const express = require('express')
const router = express.Router()

const userController = require('../../controllers/userController')

// route   GET请求 api/users/test  返回的请求为 json 数据
router.get('/getUsers', (req, res) => {
    userController.getAllUsers(req, res)
})

module.exports = router;
