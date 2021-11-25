//<!--File: Assignment2 Name: Petra Jeffers Student number: 301130225 Date: November 25, 2021-->//
let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: String
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);