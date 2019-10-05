const fs = require('fs'); // import module filesystem
const path = require('path'); //import module path for directory 

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'product.json'
); //make a variable p for descript the path data/json data

const getProductFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([])
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    constructor(title, imgUrl, price, description) {
        this.title = title;
        this.imgUrl = imgUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        getProductFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }
    static fetchAll(cb) {
        getProductFromFile(cb);
    }
};