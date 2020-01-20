const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [4, "Setup must be 4 characters or longer."],
        unique: [true, "That setup has been done before"],
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [4, "Punchline must be at least 4 characters."],
    },

}, {timestamps:true});

module.exports = mongoose.model("Joke", JokeSchema);