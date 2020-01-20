const Joke = require('../models/Joke.model');


class JokesController {
    getAll(req,res) {
        // TODO: get all the jokes
        Joke.find({})
            .then(jokes => res.json(jokes))
            .catch(err => res.json(err));
    }

    create(req,res) {
        let newJoke = new Joke(req.body);
        newJoke.save()
            .then(() => res.json({msg: "joke created"}))
            .catch(err => res.json(err));
    }

}

module.exports = new JokesController();