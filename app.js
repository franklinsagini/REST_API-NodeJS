var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./models/bookModel');
var bookRouter = require('./Routes/bookRoutes')(Book);
var app = express();
var port = process.env.PORT || 3000;

// if(process.env.ENV === 'Test'){
// 	var db = mongoose.connect('mongodb://localhost/bookAPI_test');
// } else {
	var db = mongoose.connect('mongodb://localhost/bookAPI');
//}

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',function(req,res){
   res.send('Welcome to my API');
});

app.use('/api/books',bookRouter);

app.listen(port,function(){
    console.log('Server running on port '+port);
});

module.exports = app; 