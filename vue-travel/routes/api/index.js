// users 登录注册路由
const express = require('express')
const router = express.Router()


// getTour、getBlog、getPack
const indexController = require('../../controllers/indexController')


// route   GET 请求 api/users/getUsers  返回的请求为 json 数据
router.get('/index', (req, res) => {
    indexController.getTour(req, res)
    indexController.getBlog(req, res)
    indexController.getPack(req, res)
})

module.exports = router;