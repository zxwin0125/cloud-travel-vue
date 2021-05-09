const express = require('express')
const router = express.Router()
const ticketController = require('../../controllers/ticketController')

/* 设置 ticket 路由 */
router.get('/main', (req, res, next) => {
  // 门票信息
  ticketController.ticketInfo(req, res)
})

router.get('/item', (req, res, next) => {
  // 门票信息
  ticketController.ticketInfo(req, res)
})

router.get('/order', (req, res, next) => {
  ticketController.ticketOrder(req, res)
})

module.exports = router;