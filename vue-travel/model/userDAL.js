// users 数据层
const dao = require('../config/dao')

const userDAL = {
    
    getAllUsers: (user_id,cb) => {
        let sql = 'select user_id, user_name, user_headPic_url from user_info where user_id=?'
        dao(sql,[user_id],function(err,results){
            if(err){
                cb(err,null)
            }else{
                cb(null,results)
            }
        })
    }
}

module.exports = userDAL