const mongoose = require('mongoose'), 
      Author = mongoose.model('Author');

const authors = require('../controllers/authors.js')

module.exports = function(app){

    //  root
    app.get('/authors', function(req, res){
        authors.index(req, res);
    });

    // create
    app.post('/author/', function(req, res){
        console.log("I am at routes.js - create");
        authors.create(req, res);
    });

    // show
    app.get('/author/:id/', function(req, res){
        authors.show(req, res);
    });

    // remove
    app.delete('/author/:id', function(req, res){
        authors.remove(req, res);
    });

     // update
     app.put('/author/', function(req, res){
        console.log("I am at routes.js - update");
        authors.update(req, res);
    });

}        