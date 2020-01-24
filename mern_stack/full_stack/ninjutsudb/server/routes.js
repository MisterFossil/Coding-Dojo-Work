const Ninjutsus = require('./controllers/Ninjutsus.controller');

module.exports = app => {
    // add routes here
    app.get("/api", Ninjutsus.index);
    app.post("/api/create", Ninjutsus.create);
    app.get("/api/ninjas", Ninjutsus.allNinjas);
    app.put("/api/ninjas/:_id", Ninjutsus.updateNinja);
    app.get("/api/ninjas/:_id", Ninjutsus.ninjaInfo);
    app.post("/api/ninjas/:_id/add", Ninjutsus.addTechnique);
    app.put("/api/technique/:_id", Ninjutsus.removeTechnique);
}