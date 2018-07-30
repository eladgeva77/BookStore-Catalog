const express = require('express');
const router = express.Router();
const Book = require('../models/book');
var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/bookStoreLog.log', {flags : 'w'});
var log_stdout = process.stdout;

//out initial database of books in the catalog
var booksInCatalog = [
    {
        'title': 'Moby Dick',
        'description': 'The book is sailor Ishmael\'s narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on Moby Dick, the white whale that on the ship\'s previous voyage bit off Ahab\'s leg at the knee.',
        'isbn': 1122334455,
        'author': 'Herman Melville',
        'date': '18/10/1851',
        'genre':'Drama',
        'price': 10
    },
    {
        'title': 'The Lord Of The Rings',
        'description': 'This tale of two young hobbits who take an adventure to destroy the ring that rules all.',
        'isbn': 995244,
        'author': '	J. R. R. Tolkien',
        'date': '29/07/1954',
        'genre':'Adventure',
        'price': 10
        }
  ];

  //This method checks if a given isbn number exists in our database
  function checkIfIsbnExists(isbn)
  {
    let existingBook = booksInCatalog.find((x) => x.isbn === isbn);
    return !(existingBook === undefined || existingBook === null);
  }

//get the list of all books from database
router.get('/books', function(req, res){
    log("User made request to get catalog");
    res.send(booksInCatalog);
});

//get a specific book with the given isbn
router.get('/books/:id', function(req, res){
    let isbnOfBook = parseInt(req.params.id);
    if(checkIfIsbnExists(isbnOfBook))
    {
        log("User made request to get book with isbn #" + isbnOfBook);
        res.send(booksInCatalog.find((x) => x.isbn === isbnOfBook));
    }
    else
    {
        log("User made request to get book with invalid isbn #" + isbnOfBook);
        res.status(422).send({error: 'Book with given isbn does not exists'});
    }
});

//add a new book to catlog
router.post('/books', function(req, res, next){
    if(checkIfIsbnExists(req.body.isbn))
    {
        //user can't add a book with an isbn number that already exists
        log("User made request to add book with existing isbn #" + req.body.isbn);
        res.status(422).send({error: 'Book with given isbn already exists'});
    }
    else
    {
        log("User made request to add new book isbn #" + req.body.isbn);
        booksInCatalog.push(req.body);
        res.send(req.body);
    }
});

//remove book from catlog
router.delete('/books/:id', function(req, res){
    let isbnOfBookToDelete = parseInt(req.params.id);
    log("User made request to add book with existing isbn #" + isbnOfBook);
    booksInCatalog = booksInCatalog.filter((x) => x.isbn !== isbnOfBookToDelete);
    res.send(booksInCatalog);
});

log = function(dataToLog)
{
    var date = new Date();
    log_file.write(date + ": "  + util.format(dataToLog) + '\n');
    log_stdout.write(date + ": "  + util.format(dataToLog) + '\n');
}

//exporting our api router
module.exports = router;