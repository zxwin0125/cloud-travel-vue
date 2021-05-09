const express = require('express')
const router = express.Router()
const passport = require('passport')
const ticketController = require('../../controllers/ticketController')
const AlipaySdk = require('alipay-sdk').default
const AlipayFormData = require('alipay-sdk/lib/form').default

/* 设置 ticket 路由 */
router.get('/main', (req, res, next) => {
  // 门票信息
  ticketController.ticketInfo(req, res)
})

router.post('/order', (req, res, next) => {
  ticketController.ticketOrder(req, res)
})

module.exports = router;
