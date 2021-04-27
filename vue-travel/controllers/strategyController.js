// 攻略 strategy 逻辑控制层
const strategyDAL = require('../model/strategyDAL')

// const formidable = require('formidable')
// const path = require('path')


const strategyController = {
    // 攻略主列表
    mainStrategy: (req, res) => {
        strategyDAL.mainStrategy((err, results) => {
            if (err) {
                console.log('数据库错误');
            } else {
                res.json({ code: 200, data: results })
            }
        })
    },
    // 热门攻略列表
    hotStrategy: (req, res) => {
        // 获取热门攻略
        strategyDAL.hotStrategy((err, results) => {
            if (err) {
                console.log('数据库错误');
            } else {
                res.json({ code: 200, data: results })
            }
        })
    },

    // strategyCollect: function (req, res) {
    //     // 获取攻略列表
    //     strategyDAL.strategyCollect(function (err, results) {
    //         if (err) {
    //             console.log('数据库错误');
    //         } else {
    //             res.json({ code: 200, data: results })
    //         }
    //     })
    // },
    // strategyDetail: function (req, res) {                   //3 获取一篇攻略
    //     // console.log('iid',req.query)
    //     var getStrategy = req.query.strategy_id
    //     console.log('444', getStrategy)
    //     strategyDAL.strategyDetail(getStrategy, function (err, results) {
    //         if (err) {
    //             res.json({ code: 500, msg: '查询一篇攻略失败！' })
    //         } else {
    //             // res.json({ code: 200, data:results1, msg: '查询一篇游记评论成功！' })
    //             strategyDAL.getstComment(getStrategy, function (err, results2) {
    //                 if (err) {
    //                     res.json({ code: 500, msg: '查询这篇游记评论失败！' })
    //                 } else {
    //                     res.json({ code: 200, data: results, msg: '查询一篇游记和游记评论成功！' })
    //                 }
    //             })
    //         }
    //     })

    // },
    // publishStrategy: function (req, res) {               //发表一篇攻略
    //     var form = new formidable.IncomingForm()
    //     form.uploadDir = path.join(__dirname, '..', '/public/upload')
    //     form.keepExtensions = true
    //     form.parse(req, function (err, fields, files) {
    //         if (err) {
    //             res.send('图片上传错误')
    //         }
            
    //         var publishStrategy = {
    //             pbStImg:  fields.strategy_img,
    //             pbStTitle: fields.strategy_title,
    //             pbStContent: fields.strategy_content.replace(/<.+?>/g,''), 
    //             pbStPic: path.parse(files.pbStPic.path).base,
    //             userId: fields.user_id,
    //             userName: fields.user_name
    //         }
    //         // var headPic = path.parse(files.headPic.path).base
    //         strategyDAL.publishStrategy(publishStrategy, function (err, results) {
    //             if (err) {
    //                 res.json({ code: 500, results: 0, msg: '发表失败！' })
    //             } else {
    //                 res.json({ code: 200, results: 1, msg: '发表游记成功！' })
    //             }
    //         })
    //     })
    // },

    // 发评论
    // strategypinglu: function (req, res) {
    //     var value = req.query.key
    //     var getId = req.query.useid
    //     var wenid = req.query.wenid
    //     var newArr = { value: value, getId: getId, wenid: wenid }
    //     // console.log(getId, value, wenid)
    //     strategyDAL.strategypinglu(newArr, function (err, results) {
    //         if (err) {
    //             res.json({
    //                 code: 500,
    //                 msg: '数据获取错误'
    //             })

    //         } else {
    //             res.json({
    //                 code: 500,
    //                 msg: '数据获取成功',
    //                 data: results
    //             })

    //         }
    //     })
    // },

    // pinglun: function (req, res) {
    //     // var getId = req.query.key
    //     var getId1 = req.query.id
    //     strategyDAL.pinglun(getId1, function (err, results) {
    //         if (err) {
    //             res.json({
    //                 code: 500,
    //                 msg: '数据获取错误'
    //             })

    //         } else {
    //             res.json({
    //                 code: 500,
    //                 msg: '数据获取成功',
    //                 data: results
    //             })

    //         }
    //     })

    // }
}
module.exports = strategyController