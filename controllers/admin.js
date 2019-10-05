const Product = require('../model/product');

exports.getAddProduct = (req, res, next) => {
    res.render('Admin/add-product', {
        pageTitle: 'Add-Product',
        path: '/Admin/add-product'
    });
};
exports.postAddProduct = (req, res, next) => {
    console.log(req.body.title);
    console.log(req.body.imgUrl);
    console.log(req.body.price);
    console.log(req.body.description);
    const title = req.body.title;
    const imgUrl = req.body.imgUrl;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(title, imgUrl, price, description);
    product.save();
    res.redirect('/');
};

exports.getProduct = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('Admin/product', {
            prods: products,
            pageTitle: 'Add-Product',
            path: '/Admin/product'
        });
    });
};