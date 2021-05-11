// 攻略 strategy 逻辑控制层
const strategyDAL = require('../model/strategyDAL')

const formidable = require('formidable')
const multiparty = require('multiparty')
const path = require('path')


const strategyController = {
    // 攻略主列表
    mainStrategy: (req, res) => {
        strategyDAL.mainStrategy((err, results) => {
            if (err) {
                console.log('mainStrategy -- 系统错误');
            } else {
                res.json({
                    code: 200,
                    data: results
                })
            }
        })
    },
    // 热门攻略列表
    hotStrategy: (req, res) => {
        strategyDAL.hotStrategy((err, results) => {
            if (err) {
                console.log('hotStrategy -- 系统错误');
            } else {
                res.json({
                    code: 200,
                    data: results
                })
            }
        })
    },
    // 模糊查询
    fuzzyStrategy: (req, res) => {
        strategyDAL.fuzzyStrategy((err, results) => {
            if (err) {
                console.log('fuzzyStrategy -- 系统错误');
            } else {
                res.json({
                    code: 200,
                    data: results
                })
            }
        })
    },
    // 攻略详情
    detailStrategy: (req, res) => {
        const strategy_id = req.query.strategy_id
        strategyDAL.detailStrategy(strategy_id, (err, results) => {
            if (err) {
                res.json({
                    code: 500,
                    msg: '查询攻略详情失败！'
                })
            } else {
                res.json({
                    code: 200,
                    data: results,
                    msg: '查询攻略详情成功！'
                })
            }
        })

    },
    // 发表攻略
    publishStrategy: (req, res) => {
        console.log(121232,req.body);
        var form = new multiparty.Form()
        form.uploadDir = path.join(__dirname, '..', '/public/upload')
        form.keepExtensions = true
        form.parse(req, (err, fields, files) => {
            if (err) {
                res.send('图片上传错误')
            }
            console.log('1212',req);
            console.log('1212',err);
            console.log('1212',fields);
            console.log('1212',files);
            var publishStrategy = {
                pbStImg:  fields.strategy_img,
                pbStTitle: fields.strategy_title,
                pbStContent: fields.strategy_content.replace(/<.+?>/g,''), 
                pbStPic: path.parse(files.pbStPic.path).base,
                userId: fields.user_id,
                userName: fields.user_name
            }
            // var headPic = path.parse(files.headPic.path).base
            strategyDAL.publishStrategy(publishStrategy, (err, results) => {
                if (err) {
                    res.json({ code: 500, results: 0, msg: '发表失败！' })
                } else {
                    res.json({ code: 200, results: 1, msg: '发表游记成功！' })
                }
            })
        })
    },

    // strategyDAL.getstComment(getStrategy, function (err, results2) {
    //     if (err) {
    //         res.json({
    //             code: 500,
    //             msg: '查询这篇游记评论失败！'
    //         })
    //     } else {

    //     }
    // })
    

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