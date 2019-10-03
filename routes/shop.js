const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const shopController = require('../controllers/shop');
const router = express.Router();

router.get('/', shopController.getIndex);
router.get('/product', shopController.getProduct);
router.get('/cart', shopController.getCart);
router.get('/order', shopController.getOrder);

module.exports = router;