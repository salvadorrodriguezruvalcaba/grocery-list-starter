const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const grocerySchema = new Schema({
    'code' : String,
    'name' : String,
    'quantity' : Number,
    'price' : Number
});

module.exports = mongoose.model('grocery', grocerySchema);
