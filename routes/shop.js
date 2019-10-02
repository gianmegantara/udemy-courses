const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');
const router = express.Router();

router.get('/', (req, res, next) => {
    const product = adminData.products;
    res.render('shop', {
        activePage: '/',
        pageTitle: 'Shop',
        prods: product,
    });
});

module.exports = router;