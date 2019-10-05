const Product = require('../model/product')

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('Shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/Shop/index'
        });
    });
};
exports.getProduct = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('Shop/product-list', {
            prods: products,
            pageTitle: 'Product-List',
            path: '/Shop/product-list'
        });
    });
};
exports.getCart = (req, res, next) => {
    res.render('Shop/cart', {
        pageTitle: 'Cart',
        path: '/Shop/cart'
    });
};
exports.getOrder = (req, res, next) => {
    res.render('Shop/order', {
        pageTitle: 'Order',
        path: '/Shop/order'
    });
};