const express = require('express');
const router = express.Router();
const ticketController = require('../../controllers/ticketController')

/* 设置 ticket 路由 */
router.get('/main', (req, res, next) => {
  ticketController.ticketInfo(req, res)
})

// router.get('/ticketItem', function(req, res, next) {
//   ticketController.ticketItem(req, res)
// })

module.exports = router;
