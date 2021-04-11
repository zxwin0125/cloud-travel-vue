// users 逻辑控制层
const userDAL = require('../model/userDAL')

const userController = {
    getAllUsers: function(req, res) {
        let user_id = req.query.user_id
        console.log(user_id)
        userDAL.getAllUsers(user_id, function(err, results){
            if (err) {
                res.json({code: 500, message: '数据查询错误'})
            } else {
                res.json({code: 200, message: '用户数据', data: results})
            }
        })
    }
}

module.exports = userController