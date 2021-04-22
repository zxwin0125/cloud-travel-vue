// users 数据层
const dao = require('../config/dao')

const userDAL = {
    // 用户数据
    getAllUsers: (user_id,cb) => {
        let sql = 'select user_id, user_name, user_headPic_url from user_info where user_id=?'
        dao(sql,[user_id],function(err,results){
            if(err){
                cb(err,null)
            }else{
                cb(null,results)
            }
        })
    },

    // 用户注册
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

    // 判断用户名与电话是否已存在
    validateUsers: (user, cb) => {
        const sql = 'select 1 from user_info where user_name=? or user_phone=?'
        dao(sql, [user.user_name, user.user_phone], (err, results) => {
            if (results.length > 0) {
                cb(new Error(), results)
            } else {
                cb(null, results)
            }
        })
    },

    // 检查登陆用户名和密码是否存在
    loginUsers: (user, cb) => {
        const sql = 'select 1 from user_info where user_name=? and user_password=?'
        dao(sql, [user.user_name, user.user_password], (err, results) => {
            if (err) {
                console.log('登录失败', err.message)
            } else {
                cb(null, results)
            }
        })
    },

    // 检查密码与数据库是否一致
    checkPwd: (user, cb) => {
        const sql = 'select user_id, user_name, user_password, user_phone, user_headPic_url from user_info where user_name = ?'
        dao(sql, [user.user_name], (err, results) => {
            if (err) {
                console.log('密码错误', err.message)
            } else {
                cb(null, results)
            }
        })
    }


}

module.exports = userDAL