// register 逻辑控制层
const registerDAL = require('../model/registerDAL')

const registerController = {
    // 用户注册
    registerUsers: (req, res) => {
        // 接收传入的数据
        let user = {
            user_name: req.body.user_name,
            user_password: req.body.user_password,
            user_phone: req.body.user_phone
        }
        console.log(user.user_name);
    }
}