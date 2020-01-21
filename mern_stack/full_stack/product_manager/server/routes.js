const Products = require('./controllers/Products.controller');

module.exports = app => {
    // add routes here
    app.get("/api", Products.index);
    app.get("/api/products/all", Products.getAll);
    app.post("/api/products/create", Products.createProduct);
    app.get("/api/products/details/:id", Products.getProduct);
}