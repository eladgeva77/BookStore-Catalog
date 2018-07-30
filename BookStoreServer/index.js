const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express
const serverApp = express();

//connect to the database
mongoose.connect('mongodb://localhost/bookgo');
mongoose.Promise = global.Promise;

serverApp.use(bodyParser.json());
//use the routes
serverApp.use('/api',routes);

//error handling
serverApp.use(function(err, req, res, next){
    res.status(422).send({error: err.message})
});

//listen to requests
serverApp.listen(process.env.port || 3000, function(){
    console.log('Bookstore server listening for requrests...');
});