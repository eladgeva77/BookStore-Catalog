const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create our book schema + model
const bookSchema = new Schema({
    'title': {
        type: String,
        required : [true, 'Title is required']
    },
    'description': {
        type: String,
        required : [true, 'Book description is required']
    },
    'isbn': {
        type: String,
        required : [true, 'Isbn number is required']
    },
    'author': {
        type: String,
        required : [true, 'Author is required']
    },
    'date': {
        type: String,
        required : [true, 'Publication date is required']
    },
    'genre':String,
    'price': String
});

//add our book scheme to mongo db
const BookModel = mongoose.model('book', bookSchema);

//exporting the book model
module.exports = BookModel;