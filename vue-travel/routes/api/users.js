// users 登录注册路由
const express = require('express')
const router = express.Router()
// 引入 passport
const passport = require('passport')

// getUsers
const userController = require('../../controllers/userController')

// register
const registerController = require('../../controllers/registerController')

// login
const loginController = require('../../controllers/loginController')





// route   GET 请求 api/users/getUsers  返回的请求为 json 数据
router.get('/getUsers', (req, res) => {
    userController.getAllUsers(req, res)
})

// route   POST 请求 api/users/register  返回的请求为 json 数据
router.post('/register', (req, res) => {
    // console.log(req.body);
    registerController.registerUsers(req, res)
})

// route   POST 请求 api/users/login  返回的请求为 json 数据
router.post('/login', (req, res) => {
    loginController.loginUsers(req, res);
});

router.get('/current', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        phone: req.user.phone,
    });
})

module.exports = router;