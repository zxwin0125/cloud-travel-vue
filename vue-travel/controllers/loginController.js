// login 逻辑控制层
const loginDAL = require('../model/loginDAL')

const loginController = {
    // 检查登陆用户名和密码是否存在
    loginUsers: (req, res) => {
        const user = {
            user_name: req.body.user_name,
            user_password: req.body.user_password
        }

        if (user.user_password.trim() == '') { // 密码为空
            res.json({
                code: 500,
                msg: '查无此人',
                data: 0
            })
        } else {
            // 检查密码是否一致
            loginDAL.checkPwd(user, (err, results) => {
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
                        bcrypt.compare(user.user_password, results[0].user_password, (err, result1) => {
                            if (result1) {
                                // res.json({code:200,msg:'密码正确', data:1})
                                // 验证密码正确后
                                // 创建token并返回
                                jwt.sign({
                                        user_id: results[0].user_id,
                                        user_name: results[0].user_name,
                                        user_phone: results[0].user_phone,
                                        user_headPic: results[0].user_headPic_url
                                    },
                                    'privateKey', {
                                        expiresIn: 3600 * 3600
                                    },
                                    (err, token) => {
                                        // console.log(results[0].user_id);
                                        res.json({
                                            code: 200,
                                            msg: '登陆成功',
                                            data: 'Bearer ' + token,
                                            user_id: results[0].user_id,
                                            user_name: results[0].user_name,
                                            user_headPic: results[0].user_headPic_url
                                        });
                                    })
                            }
                        })
                    }
                }
            })
        }
    }
}

module.exports = loginController