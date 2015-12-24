
var express = require('express');
var bookRouter = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./models/bookModel');

var app = express();
var port = process.env.PORT || 3000;

app.get('/',function(req,res){
   res.send('Welcome to my API');
});

bookRouter.route('/books')
		.get(function(req,res){
			Book.find(function(err,books){
				if (err) 
					res.status(500).send(err);
				else
					res.json(books);
			});
		});

app.use('/api',bookRouter);

app.listen(port,function(){
    console.log('Server running on port '+port);
});