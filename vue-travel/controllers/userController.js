// users 逻辑控制层
const userDAL = require('../model/userDAL')
// 引入 bcrypt 加密依赖
const bcrypt = require('bcrypt')
// 引入 gravatar 头像插件
const gravatar = require('gravatar')
// 引入 json-web-token
const jwt = require('jsonwebtoken')


const userController = {
    // 用户数据
    getAllUsers: (req, res) => {
        let user_id = req.query.user_id
        userDAL.getAllUsers(user_id, (err, results) => {
            if (err) {
                res.json({code: 500, message: '数据查询错误'})
            } else {
                res.json({code: 200, message: '用户数据', data: results})
            }
        })
    },

    // 用户注册
    registerUsers: (req, res) => {

        // 头像
        const avatar = gravatar.url(req.body.email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });

        // 1. 接收传入的数据
        let user = {
            user_name: req.body.name,
            user_password: req.body.password,
            user_phone: req.body.phone,
            user_avatar: avatar
        }

        // 2. 判断用户名与电话是否已存在
        userDAL.validateUsers(user, (err, results) => {
            if (err) {
                res.json({
                    code: err.code,
                    message: err.message,
                    data: err.data,
                })
            } else {
                // 加盐加密
                bcrypt.genSalt(10, (err, salt) => {
                    // hash  对密码进行加密
                    bcrypt.hash(user.user_password, salt, (err, hash) => {
                        // hash是加密后的字符串
                        if (err) throw err; // 如果有错误，抛出

                        user.user_password = hash

                        userDAL.registerUsers(user, (err, results) => {
                            if (results.affectedRows == 1) {
                                res.json({
                                    code: 200,
                                    data: 1
                                })
                            } else {
                                res.json({
                                    code: 500,
                                    data: 0
                                })
                            }
                        })
                    })

                })
            }
        })
    },

    // 用户登录，检查登陆用户名和密码是否存在
    loginUsers: (req, res) => {
        const user = {
            user_name: req.body.user_name,
            user_password: req.body.user_password
        }

        if (!user.user_password) { // 密码为空
            res.json({
                code: 500,
                msg: '查无此人',
                data: 0
            })
        } else {
            // 检查密码是否一致
            userDAL.checkPwd(user, (err, results) => {
                if (err) {
                    res.json({
                        code: 500,
                        msg: '查无此人',
                        data: 0
                    })
                } else {
                    // 检验密码正确性
                    if (!results[0]) {
                        res.json({
                            code: 500,
                            msg: '查无此人',
                            data: 0
                        })
                    } else {
                        // 密码匹配
                        // bcrypt.compare(user.user_password, results[0].user_password, (err, result1) => {
                        //     if (result1) {
                        //         // res.json({code:200,msg:'密码正确', data:1})
                        //         // 验证密码正确后
                        //         // 创建token并返回
                        //         jwt.sign({
                        //                 user_id: results[0].user_id,
                        //                 user_name: results[0].user_name,
                        //                 user_phone: results[0].user_phone,
                        //                 user_headPic: results[0].user_headPic_url
                        //             },
                        //             'privateKey', {
                        //                 expiresIn: 3600 * 3600
                        //             },
                        //             (err, token) => {
                        //                 // console.log(results[0].user_id);
                        //                 res.json({
                        //                     code: 200,
                        //                     msg: '登陆成功',
                        //                     data: 'Bearer ' + token,
                        //                     user_id: results[0].user_id,
                        //                     user_name: results[0].user_name,
                        //                     user_headPic: results[0].user_headPic_url
                        //                 });
                        //             })
                        //     }
                        // })

                        // 密码匹配
                        bcrypt.compare(user.user_password, results[0].user_password).then(isMatch => {
                            if (isMatch) {
                                const rule = {
                                    user_id: results[0].user_id,
                                    user_name: results[0].user_name,
                                    avatar: results[0].user_headPic_url,
                                }

                                jwt.sign(rule, 'privateKey', { expiresIn: 3600 }, (err, token) => {
                                    if (err) throw err
                                    res.json({
                                        success: true,
                                        token: 'Bearer ' + token
                                    })
                                })
                            } else {
                                return res.status(400).json('密码错误!')
                            }
                        })

                    }
                }
            })
        }
    }


}

module.exports = userController