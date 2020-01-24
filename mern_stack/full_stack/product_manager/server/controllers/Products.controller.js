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

    getProduct(req,res) {
        // console.log("REQUEST" + req.params.id);
        Product.findOne({_id: req.params._id})
            .then(product => res.json(product))
            .catch(err => res.json(err));
    }

    updateProduct(req,res) {
        // console.log("REQUEST" + req.params.id);
        Product.updateOne({_id: req.params._id}, req.body, {runValidators: true})
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => res.json(err));
    }

    deleteProduct(req,res) {
        Product.deleteOne({_id: req.params._id})
            .then(delConf => res.json(delConf))
            .catch(err => res.json(err))
    }
    
}

module.exports = new ProductsController();