const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();

router.get('/Admin/add-product', adminController.getAddProduct);
router.get('/Admin/product', adminController.getProduct);
router.post('/Admin/add-product', adminController.postAddProduct);
router.get('/Admin/edit-product');

module.exports = router;