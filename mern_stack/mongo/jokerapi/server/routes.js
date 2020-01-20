const Jokes = require('./controllers/Jokes.controller');


module.exports = app => {
    app.get("/api/jokes", Jokes.getAll);
    app.post("/api/jokes", Jokes.create);
}