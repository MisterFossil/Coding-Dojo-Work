const Jokes = require('./controllers/Jokes.controller');


module.exports = app => {
    app.get("/api/jokes", Jokes.getAll);
    app.post("/api/jokes", Jokes.create);
    app.get("/api/ajoke", Jokes.getSingle);
    app.get("/api/rand", Jokes.getRandom);
    app.get("/api/jokes/:id", Jokes.findOneSingleJoke);
    app.put("/api/jokes/update/:id", Jokes.updateJoke);
    app.delete("/api/jokes/delete/:id", Jokes.deleteJoke);
}