const Ninjutsu = require('../models/Ninjutsu.model');

class NinjutsusController {
    // add query methods here
    index(req,res) {
        res.json({
            msg: "Hello Ninjutsu World!",
        });
    }

    create(req,res) {
        let newNin = new Ninjutsu(req.body);
        newNin.save()
            .then(() => res.json({msg: 'ninja created'}))
            .catch(err => res.json(err));
    }

    allNinjas(req,res) {
        Ninjutsu.find({}).sort({'ninjutsu': -1})
        .then(nin => res.json(nin))
        .catch(err => res.json(err));
    }

    updateNinja(req,res) {
        Ninjutsu.updateOne({_id: req.params._id}, req.body, {runValidators: true})
            .then(upNin => res.json(upNin))
            .catch(err => res.json(err));
    }

    ninjaInfo(req,res) {
        Ninjutsu.findOne({_id: req.params._id})
            .then(ninja => res.json(ninja))
            .catch(err => res.json(err));
    }

    addTechnique(req,res) {
        Ninjutsu.updateOne(
            {_id: req.params._id},
            {$push: {ninjutsu: req.body.technique}}
        )
            .then(() => res.json({msg: "technique added"}))
            .catch(err => res.json(err));
    }

    removeTechnique(req,res) {
        Ninjutsu.updateOne({_id: req.params._id},
            {$pull: {ninjutsu: req.body.technique}})
            .then(() => res.json({msg: "technique removed"}))
            .catch(err => res.json(err));
    }
}

module.exports = new NinjutsusController();