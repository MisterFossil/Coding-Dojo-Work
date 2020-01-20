const Joke = require('../models/Joke.model');

class JokesController {
    // get all the jokes
    getAll(req,res) {
        Joke.find({})
            .then(jokes => res.json(jokes))
            .catch(err => res.json(err));
    }

    // create a new joke
    create(req,res) {
        let newJoke = new Joke(req.body);
        newJoke.save()
            .then(() => res.json({msg: "joke created"}))
            .catch(err => res.json(err));
    }

    // grab a single joke
    getSingle(req,res) {
        Joke.findOne()
            .then(joke => res.json(joke))
            .catch(err => res.json(err));
    }

    // find one single specific joke
    // ONLY works if you know the ridiculous _id string of a specific joke
    findOneSingleJoke(req,res) {
        console.log(req.params.setup);
        Joke.findOne({_id: req.params.id})
            .then(oneSingleJoke => res.json({joke: oneSingleJoke}))
            .catch(err => res.json({message: "Something went wrong", error: err}));
    }

    // Update existing joke
    updateExistingJoke(req,res) {
        Joke.findOneAndUpdate({_id:req.params.id}, req.body, {new: true})
            .then(updatedJoke => res.json({joke: updatedJoke}))
            .catch(err => res.json({message: "Something went wrong", error: err}));

    }

    // Delete a joke
    deleteExistingJoke(req,res) {
        Joke.deleteOne({ _id: req.params.id })
            .then(result => res.json({result: result}))
            .catch(err => res.json({message: "Something went wrong", error: err}));
    }

    // grab a random joke - (may need more? - apparently in big databases i may need to specify the max num of documents? My research took me weird places probably)
    getRandom(req,res) {
        Joke.aggregate([
            {$sample: {size: 1}}
        ])
            .then(joke => res.json(joke))
            .catch(err => res.json(err));
    }

    updateJoke(req,res){
        Joke.updateOne(
            {setup: req}
        )
        .then(joke => res.json(joke))
        .catch(err => res.json(err));
    }

}

module.exports = new JokesController();