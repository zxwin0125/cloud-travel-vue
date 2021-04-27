// users 逻辑控制层
const userDAL = require('../model/userDAL')
// 引入 bcrypt 加密依赖
const bcrypt = require('bcrypt')
// 引入 gravatar 头像插件
const gravatar = require('gravatar')
// 引入 json-web-token
const jwt = require('jsonwebtoken')


const userController = {
    // 1. 用户登录
    loginUsers: (req, res) => {
        const user = {
            user_name: req.body.user_name,
            user_password: req.body.user_password
        }

        // 1.1 检查登陆用户名是否存在
        userDAL.loginUsers(user, (err, results) => {
            if (err) {
                res.json({
                    code: '500',
                    msg: 'loginUsers -- 系统错误',
                    data: 0
                })
            } else if (results == false) {
                res.json({
                    code: '401',
                    msg: '用户名不存在',
                    data: 0
                })
            } else {
                if (user.user_password == '') { // 密码是否为空
                    res.json({
                        code: '402',
                        msg: '密码不能为空',
                        data: 0
                    })
                } else {
                    // 1.2 检查密码是否一致
                    userDAL.checkPwd(user, (err, results) => {
                        if (err) {
                            res.json({
                                code: '500',
                                msg: 'checkPwd -- 系统错误',
                                data: 0
                            })
                        } else {
                            // 检验密码正确性
                            if (!results[0]) {
                                res.json({
                                    code: '500',
                                    msg: 'checkPwd -- 系统错误',
                                    data: 0
                                })
                            } else {
                                // 密码匹配
                                bcrypt.compare(user.user_password, results[0].user_password).then(isMatch => {
                                    if (isMatch) {
                                        // jwt.sign('规则','加密名字','过期时间','箭头函数')
                                        const rule = {
                                            user_id: results[0].user_id,
                                            user_name: results[0].user_name,
                                            avatar: results[0].user_headPic_url,
                                        }

                                        jwt.sign(rule, 'privateKey', {
                                            expiresIn: 3600
                                        }, (err, token) => {
                                            if (err) throw err
                                            res.json({
                                                success: true,
                                                token: 'Bearer ' + token
                                            })
                                        })
                                    } else {
                                        res.json({
                                            code: '403',
                                            msg: '密码错误',
                                            data: 0
                                        })
                                    }
                                })

                            }
                        }
                    })
                }
            }
        })


    },

    // 2. 用户注册
    registerUsers: (req, res) => {
        // 1. 接收传入的数据
        const user = {
            user_name: req.body.user_name,
            user_password: req.body.user_password,
            user_phone: req.body.user_phone,
        }

        // 2.1 判断用户名与电话是否已存在
        userDAL.validateUsers(user, (err, results) => {
            if (results.length) {
                res.json({
                    code: '404',
                    message: '用户名或手机号已存在',
                    data: results,
                })
            } else {
                // 加盐加密
                bcrypt.genSalt(10, (err, salt) => {
                    // hash  对密码进行加密
                    bcrypt.hash(user.user_password, salt, (err, hash) => {
                        // hash是加密后的字符串
                        if (err) throw err; // 如果有错误，抛出

                        user.user_password = hash

                        // 2.2 用户注册
                        userDAL.registerUsers(user, (err, results) => {
                            if (results.affectedRows == 1) {
                                res.json({
                                    code: '200',
                                    message: '注册成功',
                                    data: results
                                })
                            } else {
                                res.json({
                                    code: '500',
                                    message: '注册失败',
                                    data: results
                                })
                            }
                        })
                    })

                })
            }
        })
    },

    // 3. 获取用户数据
    getUserInfo: (req, res) => {
        const user_id = req.query.user_id
        userDAL.getUserInfo(user_id, (err, results) => {
            if (err) {
                res.json({
                    code: '405',
                    message: 'getUserInfo - 系统错误'
                })
            } else {
                res.json({
                    code: '200',
                    message: '获取用户数据',
                    data: results
                })
            }
        })
    },






}

module.exports = userController