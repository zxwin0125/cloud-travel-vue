// users 登录注册路由
const express = require('express')
const router = express.Router()


// getTour、getBlog、getPack
const indexController = require('../../controllers/indexController')


// route   GET 请求 api/index/getTour  返回的请求为 json 数据
router.get('/getTour', (req, res) => {
    console.log('3434');
    indexController.getTour(req, res)
})

// route   GET 请求 api/index/getBlog  返回的请求为 json 数据
router.get('/getBlog', (req, res) => {
    indexController.getBlog(req, res)
})

// route   GET 请求 api/index/getPack  返回的请求为 json 数据
router.get('/getPack', (req, res) => {
    indexController.getPack(req, res)
})


module.exports = router;