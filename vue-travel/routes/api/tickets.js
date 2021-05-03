var express = require('express');
var router = express.Router();
var passport = require('passport')
var ticketController = require('../controllers/ticketcontroller')

/* 设置 ticket 路由 */
router.get('/', function(req, res, next) {
  ticketController.ticketUsers(req, res)
})

router.get('/ticketItem', function(req, res, next) {
  ticketController.ticketItem(req, res)
})

module.exports = router;
