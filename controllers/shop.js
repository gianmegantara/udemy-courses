exports.getIndex = (req, res, next) => {
    res.render('Shop/index', {
        pageTitle: 'Shop',
        path: '/Shop/index'
    });
};
exports.getProduct = (req, res, next) => {
    res.render('Shop/product-list', {
        pageTitle: 'Product-List',
        path: '/Shop/product-list'
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