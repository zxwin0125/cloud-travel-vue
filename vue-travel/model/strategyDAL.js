// 攻略 strategy 数据层
const dao = require('../config/dao')

const strategyDAL = {
    // 攻略主列表
    mainStrategy: (cb) => {
        var sql = `select strategy_id,strategy_title,
                   strategy_date,strategy_content,strategy_img,
                   strategy_view,strategy_like,user_id,user_name,
                   strategy_path from strategy_info`
        dao(sql, [], function (err, results) {
            if (err) {
                console.log('失败', err.message)
            } else {
                cb(null, results)
            }
        })
    },
    // 热门攻略列表
    hotStrategy: (cb) => {
        // 升序排列查询前三条
        var sql = 'select strategy_id,strategy_title,strategy_content,strategy_img,strategy_view  from strategy_info order by strategy_view desc limit 3;'
        // var sql = 'select * from hotstrategy_info'
        dao(sql, [], function (err, results) {
            if (err) {
                console.log('失败', err.message)
            } else {
                cb(null, results)
            }
        })
    },
    // 获取攻略列表 
    //  通过模糊查询定位关键词
    // strategyCollect: function (cb) {
    //     var sql = 'select * from strategy_info'
    //     // 'select strateg_id,user_info.user_headPic_url,user_info.user_name,strategy_title,strategy_content,strategy_date from strategy_info,user_info where   strategy_title LIKE '%丽江%' or strategy_content LIKE '%丽江%' '
    //     dao(sql, [], function (err, results) {
    //         if (err) {
    //             console.log('失败', err.message)
    //         } else {
    //             cb(null, results)
    //         }
    //     })
    // },
    // 获取一篇攻略的详情
    // strategyDetail: function (getStrategy, cb) {
    //     var sql = 'select strategy_id,user_info.user_headPic_url,user_info.user_name,strategy_title,strategy_content,strategy_view,strategy_like,strategy_date,strategy_path from strategy_info,user_info where  strategy_id=? and strategy_info.user_id = user_info.user_id'
    //     dao(sql, [getStrategy], function (err, results) {
    //         if (err) {
    //             cb(err, null)
    //         } else {
    //             cb(null, results)
    //         }
    //     })
    // },
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
    // publishStrategy:function(publishStrategy,cb){  //  发表一篇攻略
     
    //     var sql ='insert into strategy_info (strategy_title,strategy_content,strategy_img,user_id,user_name,strategy_path,strategy_date) values ( ?,?,?,?,?,?, now())'
    //     dao(sql,[publishStrategy.pbStTitle , publishStrategy.pbStContent , publishStrategy.pbStImg , publishStrategy.userId , publishStrategy.userName, publishStrategy.pbStPic] ,
    //         // publishStrategy.pbStPic ,strategy_path
    //     function(err,results){
    //         if(err){
    //             console.log('publishStrategy报错啦')
    //             cb(err,null)
    //         }else{
    //             // console.log(publishStrategy.strategy_title)
    //             cb(null,results)
    //         }
    //     })
    // },
    //评论
    // strategypinglu: function (newArr, cb) {
    //     console.log('ertyu', [newArr.value, newArr.wenid, newArr.getId])
    //     var sql = 'insert into comments_info (com_text,com_like,com_time,strategy_id,user_id) VALUES(?,0,Now(),?,?)'

    //     dao(sql, [newArr.value, newArr.wenid, newArr.getId], function (err, results) {
    //         if (err) {
    //             cb(err, null)
    //         } else {
    //             cb(null, results)
    //         }
    //     })

    // },
    //评论列表
    // pinglun: function (getId1, cb) {
    //     var sql = 'select a.com_text,com_like,com_time,a.user_id,user_headPic_url,user_name FROM comments_info a,user_info u WHERE strategy_id = ? and a.user_id = u.user_id'
    //     dao(sql, [getId1], function (err, results) {
    //         if (err) {
    //             cb(err, null)
    //         } else {
    //             cb(null, results)
    //         }
    //     })

    // },
}

module.exports = strategyDAL