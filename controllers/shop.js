exports.getIndex = (req, res, next) => {
    res.render('Shop/index', {
        pageTitle: 'Shop'
    });
};
exports.getProduct = (req, res, next) => {
    res.render('Shop/product-list', {
        pageTitle: 'Product-List'
    });
};
exports.getCart = (req, res, next) => {
    res.render('Shop/cart', {
        pageTitle: 'Cart'
    });
};
exports.getOrder = (req, res, next) => {
    res.render('Shop/order', {
        pageTitle: 'Order'
    });
};