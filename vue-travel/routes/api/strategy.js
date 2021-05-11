// strategy 攻略路由
const express = require('express');
const router = express.Router();
const multiparty = require('multiparty');
const formidable = require('formidable')

const strategyController = require('../../controllers/strategyController')

/* 设置 strategy 路由 */
router.get('/main', (req, res) => {
    // 攻略主列表
    strategyController.mainStrategy(req, res)
});

router.get('/hot', (req, res) => {
    // 热门攻略列表
    strategyController.hotStrategy(req, res)
});

router.get('/fuzzy', (req, res) => {
    // 模糊查询
    strategyController.fuzzyStrategy(req, res)
});

router.get('/detail', (req, res) => {
    // 攻略详情
    strategyController.detailStrategy(req, res)
});

router.post('/publish', function(req, res, next) {
    console.log('31', req.body);
    // let form = new multiparty.Form()
    // form.parse(req,(err, fields, files) => {
    //     console.log('1234',fields, files)
    // })
    var form = new formidable.IncomingForm();
	    form.parse(req, function(err, fields, files) {
		        console.log('fields',fields);//表单传递的input数据
                console.log('files',files);//上传文件数据
				//do somthing......
		});
    // 攻略列表
    // strategyController.publishStrategy(req, res)
});

// router.post('/commit', (req, res) => {
//     // 攻略评论
//     strategyController.commitStrategy(req, res)
// });

// router.get('/getstComment', function(req, res, next) {
//     // 一篇攻略的评论
//     strategyController.getstComment(req, res)
// });
// router.get('/strategyCollect', function(req, res, next) {
//     // 攻略列表
//     strategyController.strategyCollect(req, res)
// });

// router.get('/strategypinglu', function(req, res, next) {
//     // 攻略列表
//     strategyController.strategypinglu(req, res)
// });
// //评论列表
// router.get('/pinglun', function(req, res, next) {
//     // 攻略列表
//     strategyController.pinglun(req, res)
// });


module.exports = router;