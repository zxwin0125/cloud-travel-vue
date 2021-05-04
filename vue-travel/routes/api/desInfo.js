const express = require('express');
const router = express.Router();

const desController = require('../../controllers/desController')

/* 设置 destination 路由 */
router.get('/lj', (req, res, next) => {
  desController.des_ljInfo(req, res)
});

router.get('/km', (req, res, next) => {
  desController.des_kmInfo(req, res)
});

router.get('/xsbn', (req, res, next) => {
  desController.des_xsbnInfo(req, res)
});

router.get('/xgll', (req, res, next) => {
  desController.des_xgllInfo(req, res)
});

module.exports = router;
