// strategy 攻略路由
const express = require('express');
const router = express.Router();

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

// 发布攻略
router.post('/publish', (req, res, next) => {
    strategyController.publishStrategy(req, res)
});

//评论列表
router.get('/pinglun', (req, res, next) => {
    strategyController.pinglun(req, res)
});

// 发布评论
router.get('/strategypinglu', (req, res, next) => {
    console.log('0909');
    // 攻略列表
    strategyController.strategypinglu(req, res)
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





module.exports = router;