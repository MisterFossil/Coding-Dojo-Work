const Products = require('./controllers/Products.controller');

module.exports = app => {
    // add routes here
    app.get("/api", Products.index);
    app.get("/api/products", Products.getAll);
    app.post("/api/products", Products.createProduct);
    app.get("/api/products/:_id", Products.getProduct);
    app.put("/api/products/:_id", Products.updateProduct);
    app.delete("/api/products/:_id", Products.deleteProduct);
}