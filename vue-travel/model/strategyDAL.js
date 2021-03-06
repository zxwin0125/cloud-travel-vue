// 攻略 strategy 数据层
const dao = require('../config/dao')

const strategyDAL = {
    // 攻略主列表
    mainStrategy: (cb) => {
        const sql = `select strategy_id,strategy_title,
                   strategy_date,strategy_content,strategy_img,
                   strategy_view,strategy_like,user_id,user_name,user_headPic_url,
                   strategy_path from strategy_info`
        dao(sql, [], function (err, results) {
            if (err) {
                console.log('攻略主列表查询失败', err.message)
            } else {
                cb(null, results)
            }
        })
    },
    // 热门攻略列表
    hotStrategy: (cb) => {
        // 升序排列查询前三条
        const sql = `select strategy_id,strategy_title,strategy_content,
                     strategy_img,strategy_view 
                     from strategy_info order by strategy_view desc limit 3;`
        dao(sql, [], function (err, results) {
            if (err) {
                console.log('热门攻略列表查询失败', err.message)
            } else {
                cb(null, results)
            }
        })
    },
    // 模糊查询
    fuzzyStrategy: (cb) => {
        const sql = `select strategy_id, strategy_title, strategy_img, strategy_date, 
                     strategy_like, strategy_path, strategy_view, strategy_content, 
                     strategy_like, user_id, user_name, user_headPic_url 
                     from strategy_info where strategy_title LIKE '%丽江%' or strategy_content LIKE '%丽江%' `
        dao(sql, [], function (err, results) {
            if (err) {
                console.log('模糊查询失败', err.message)
            } else {
                cb(null, results)
            }
        })
    },
    // 获取攻略详情
    detailStrategy: (strategy_id, cb) => {
        const sql = `select strategy_title, strategy_date,strategy_content,strategy_img,
                     strategy_view,strategy_like,user_id,user_name,user_headPic_url,
                     strategy_path from strategy_info where strategy_id=?`
        dao(sql, [strategy_id], (err, results) => {
            if (err) {
                cb(err, null)
            } else {
                cb(null, results)
            }
        })
    },
    // 发表攻略
    publishStrategy: (publishStrategy,cb) => {  
        const sql ='insert into strategy_info (strategy_title,strategy_content,strategy_img,user_id,user_name,strategy_path,strategy_date) values ( ?,?,?,?,?,?, now())'
        dao(sql,[publishStrategy.strategy_title , publishStrategy.strategy_content , publishStrategy.strategy_img , publishStrategy.user_id , publishStrategy.user_name, publishStrategy.strategy_file],
        (err,results) => {
            if(err){
                console.log('publishStrategy -- 系统错误')
                cb(err,null)
            }else{
                cb(null,results)
            }
        })
    },

    //评论列表
    pinglun: (strategy_id, cb) => {
        const sql = 'select a.com_text,com_like,com_time,a.user_id,user_headPic_url,user_name FROM comments_info a,user_info u WHERE strategy_id = ? and a.user_id = u.user_id'
        dao(sql, [strategy_id], (err, results) => {
            if (err) {
                cb(err, null)
            } else {
                cb(null, results)
            }
        })
    },

    //发表评论
    strategypinglu: (newArr, cb) => {
        console.log('ertyu', [newArr.value, newArr.use_id, newArr.strategy_id])
        const sql = 'insert into comments_info (com_text,com_like,com_time,user_id,strategy_id) VALUES(?,0,Now(),?,?)'

        dao(sql, [newArr.value, newArr.use_id, newArr.strategy_id], (err, results) => {
            if (err) {
                cb(err, null)
            } else {
                cb(null, results)
            }
        })
    },

    // getstComment: function (getStrategy, cb) {   // 3-3 获取攻略评论 
    //     var sql = 'select com_text,com_time from strategy_info,user_info,comments_info where comments_info.strategy_id = ? and strategy_info.strategy_id = comments_info.strategy_id and user_info.user_id = comments_info.user_id order by com_time desc'
    //     dao(sql, [getStrategy], function (err, results) {
    //         if (err) {
    //             cb(err, null)
    //         } else {
    //             cb(null, results)
    //         }
    //     })
    // },
    // 
    // 
    
    
    
}

module.exports = strategyDAL