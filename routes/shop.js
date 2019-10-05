const express = require('express');
const shopController = require('../controllers/shop');
const router = express.Router();

router.get('/', shopController.getIndex);
router.get('/product-list', shopController.getProduct);
router.get('/cart', shopController.getCart);
router.get('/order', shopController.getOrder);

module.exports = router;