// register 数据层
const dao = require('../config/dao')

const registerDAL = {
    // 用户注册
    registerUsers: (user, cb) => {
        const sql = 'insert into user_info(user_name, user_password, user_phone, user_enable) values (?,?,?,?)'
        dao(sql, [user.user_name, user.user_password, user.user_phone, 1], function(err, results) {
            if (err) {
                console.log('注册失败', err.message)
            } else {
                cb(null,results)
            }
        })
    }
}

module.exports = registerDAL