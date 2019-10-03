exports.getAddProduct = (req, res, next) => {
    res.render('Admin/add-product', {
        pageTitle: 'Add-Product'
    });
};

exports.getProduct = (req, res, next) => {
    res.render('Admin/product', {
        pageTitle: 'Add-Product'
    });
};