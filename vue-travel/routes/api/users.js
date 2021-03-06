// users 登录注册路由
const express = require('express')
const router = express.Router()
// 引入 passport
const passport = require('passport')

// users
const userController = require('../../controllers/userController')

// route   POST 请求 api/users/login  返回的请求为 json 数据
router.post('/login', (req, res) => {
    userController.loginUsers(req, res);
});

// route   POST 请求 api/users/register  返回的请求为 json 数据
router.post('/register', (req, res) => {
    userController.registerUsers(req, res)
})

// route   GET 请求 api/users/getValidCode  返回的请求为 json 数据
// 验证码
router.get('/getValidCode', (req, res) => {
    userController.getUserCode(req, res)
})

// passport.authenticate('jwt', {session: false}), 
// route   GET 请求 api/users/getUserInfo  返回的请求为 json 数据
// 用户信息
router.post('/getUserInfo', (req, res) => {
    userController.getUserInfo(req, res)
})





// @route  GET api/users/current
// @desc   return current user
// @access Private
router.get('/current', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    res.json({
        user_id: req.user.user_id,
        user_name: req.user.user_name,
        user_headPic_url: req.user.user_headPic_url
    });
})

module.exports = router;