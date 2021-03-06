// 攻略 strategy 逻辑控制层
const strategyDAL = require('../model/strategyDAL')

const formidable = require('formidable');
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
        const form = formidable({
            multiples: true
        });
        form.uploadDir = path.join(__dirname, '..', '/public/upload')
        form.keepExtensions = true
        form.parse(req, (err, fields, files) => {
            if (err) {
                res.send('图片上传错误')
            }
            const publishStrategy = {
                strategy_img: fields.strategy_img,
                strategy_title: fields.strategy_title,
                strategy_content: fields.strategy_content.replace(/<.+?>/g, ''),
                strategy_file: path.parse(files.strategy_file.path).base,
                user_id: fields.user_id,
                user_name: fields.user_name,
            }
            // var headPic = path.parse(files.headPic.path).base
            strategyDAL.publishStrategy(publishStrategy, (err, results) => {
                if (err) {
                    res.json({
                        code: 500,
                        results: 0,
                        msg: '发表失败！'
                    })
                } else {
                    res.json({
                        code: 200,
                        results: 1,
                        msg: '发表游记成功！'
                    })
                }
            })
        })
    },
    // 评论
    pinglun: (req, res) => {
        var strategy_id = req.query.strategy_id
        strategyDAL.pinglun(strategy_id, (err, results) => {
            if (err) {
                res.json({
                    code: 500,
                    msg: '数据获取错误'
                })

            } else {
                res.json({
                    code: 500,
                    msg: '数据获取成功',
                    data: results
                })
            }
        })
    },

    // 发评论
    strategypinglu: (req, res) => {
        console.log('666',req.body);
        var use_id = req.body.user_id
        var strategy_id = req.body.strategy_id
        var value = req.body.user_pl
        var newArr = { value: value, use_id: use_id, strategy_id: strategy_id }
        strategyDAL.strategypinglu(newArr, (err, results) => {
            if (err) {
                res.json({
                    code: 500,
                    msg: '数据获取错误'
                })

            } else {
                res.json({
                    code: 500,
                    msg: '数据获取成功',
                    data: results
                })

            }
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


    


}
module.exports = strategyController