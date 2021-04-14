// login 数据层
const dao = require('../config/dao')

const loginDAL = {
    // 检查登陆用户名和密码是否存在
    loginUsers: (user, cb) => {
        const sql = 'select 1 from user_info where user_name=? and user_password=?'
        dao(sql, [user.user_name, user.user_password], (err, results) => {
            if(err){
                console.log('登录失败', err.message)
            }else{
                cb(null,results)  
            }
        })
    },

    // 检查密码与数据库是否一致
    checkPwd: (user, cb) => {
        const sql = 'select 1 from user_info where user_name = ?'
        dao(sql, [user.user_name], (err, results) => {
            if(err){
                console.log('查无此人',err.message)
            }else{
                cb(null,results)
            }
        })
    }
}

module.exports = loginDAL