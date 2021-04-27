// strategy 攻略路由
const express = require('express');
const router = express.Router();


const strategyController = require('../../controllers/strategyController')

/* 设置 strategy 路由 */
router.get('/main', (req, res) => {
    console.log('222');
    // 攻略主列表
    strategyController.mainStrategy(req, res)
});

router.get('/hot', (req, res) => {
    // 热门攻略列表
    strategyController.hotStrategy(req, res)
});
// router.get('/strategyDetail', function(req, res, next) {
//     // 一篇攻略详情
//     strategyController.strategyDetail(req, res)
// });
// router.get('/getstComment', function(req, res, next) {
//     // 一篇攻略的评论
//     strategyController.getstComment(req, res)
// });
// router.get('/strategyCollect', function(req, res, next) {
//     // 攻略列表
//     strategyController.strategyCollect(req, res)
// });
// router.post('/publishStrategy', function(req, res, next) {
//     // 攻略列表
//     strategyController.publishStrategy(req, res)
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