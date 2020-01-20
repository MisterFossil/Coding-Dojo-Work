const mongoose = require('mongoose');
// From the internet about storing and using price:

// Getter
// ItemSchema.path('price').get(function(num) {
//     return (num / 100).toFixed(2);
//   });
  
//   // Setter
//   ItemSchema.path('price').set(function(num) {
//     return num * 100;
//   });

const ProductSchema = new mongoose.Schema({
    // fields go here
    title: {
        type: String,
    },
    price: {
        type: Number,
        min: [0, "Price must be positive."],
    },
    description: {
        type: String,
    },
}, {timestamps:true})

module.exports = mongoose.model('Product', ProductSchema);