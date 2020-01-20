const Product = require('../models/Product.model');

// Getter
// ItemSchema.path('price').get(function(num) {
//     return (num / 100).toFixed(2);
//   });
  
//   // Setter
//   ItemSchema.path('price').set(function(num) {
//     return num * 100;
//   });

class ProductsController {
    index(req,res) {
        res.json({
            message: "Hello World!",
        });
    }
    // all query functions go here
    // get all products
    getAll(req,res) {
        Product.find({})
            .then(prods => res.json(prods))
            .catch(err => res.json(err));
    }

    createProduct(req,res) {
        let newProd = new Product(req.body);
        newProd.save()
            .then(() => res.json({msg: "product created"}))
            .catch(err => res.json(err));
    }
    
}

module.exports = new ProductsController();