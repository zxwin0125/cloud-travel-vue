// users 登录注册路由
const express = require('express')
const router = express.Router()

// getUsers
const userController = require('../../controllers/userController')

// register
const registerController = require('../../controllers/registerController')







// route   GET 请求 api/users/getUsers  返回的请求为 json 数据
router.get('/getUsers', (req, res) => {
    userController.getAllUsers(req, res)
})

// route   POST 请求 api/users/register  返回的请求为 json 数据
router.post('/register', (req, res) => {
    // userController.getAllUsers(req, res)
    console.log(res.body);
})


module.exports = router;