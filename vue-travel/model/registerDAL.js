// register 数据层
const dao = require('../config/dao')

const registerDAL = {
    // 1. 用户注册
    registerUsers: (user, cb) => {
        const sql = 'insert into user_info(user_name, user_password, user_phone, user_enable) values (?,?,?,?)'
        dao(sql, [user.user_name, user.user_password, user.user_phone, 1], (err, results) => {
            if (err) {
                console.log('注册失败', err.message)
            } else {
                cb(null, results)
            }
        })
    },

    // 2. 判断用户名与电话是否已存在
    validateUsers: (user, cb) => {
        const sql = 'select 1 from user_info where user_name=? or user_phone=?'
        dao(sql, [user.user_name, user.user_phone], (err, results) => {
            if (results.length > 0) {
                cb(new Error(), results)
            } else {
                cb(null, results)
            }
        })
    }

}

module.exports = registerDAL