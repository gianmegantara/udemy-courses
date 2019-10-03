exports.getError = (req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Not Found'
    });
};

exports.get404 = (req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found',
        path: '/404'
    });
};