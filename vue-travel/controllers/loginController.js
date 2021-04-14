// login 逻辑控制层
const loginDAL = require('../model/loginDAL')

const loginController = {
    // 检查登陆用户名和密码是否存在
    loginUsers: (req, res) => {
        const user = {
            user_name: req.body.user_name,
            user_password: req.body.user_password
        }

        if(user.user_password.trim() == ''){ // 密码为空
            res.json({code:500,msg:'查无此人',data:0})
        } else {
            // 检查密码是否一致
            loginDAL.checkPwd (user, (err, result) => {

            })
        }
    }
}

module.exports = loginController