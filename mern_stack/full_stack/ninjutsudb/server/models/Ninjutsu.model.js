const mongoose = require('mongoose');

const NinjutsuSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "Ninja Name must be 3 characters."],
        required: true,
    },
    description: {
        type: String,
        minlength: [10, "Description must be at least 10 characters."],
    },
    imageURL: {
        type: String,
    },
    ninjutsu: [],
}, {timestamps: true})

module.exports = mongoose.model('Ninjutsu', NinjutsuSchema);