// register 逻辑控制层
const registerDAL = require('../model/registerDAL')

const registerController = {
    // 用户注册
    registerUsers: (req, res) => {
        // console.log(req.body);
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
                console.log('111');
            }
        })
    }
}

module.exports = registerController