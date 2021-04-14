// register 逻辑控制层
const registerDAL = require('../model/registerDAL')
// 引入 bcrypt 加密依赖
const bcrypt = require('bcrypt')
// 引入 gravatar 头像插件
const gravatar = require('gravatar')

const registerController = {
    // 用户注册
    registerUsers: (req, res) => {
        console.log(req.body);

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
        registerDAL.validateUsers(user, (err, results) => {
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

                        registerDAL.registerUsers(user, (err, results) => {
                            if (results.affectedRows == 1) {
                                console.log('ok')
                                res.json({
                                    code: 200,
                                    data: 1
                                })
                            } else {
                                console.log('err');
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
    }
}

module.exports = registerController