const mongoose = require('mongoose'),
Author = mongoose.model('Author');

module.exports = 
{
    index: function(req, res){
        Author.find({}, function(err, authors){
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err})
            }
            else {
                res.json({message: " Show all, Success", data: authors})
            }
        })
    },

    create: function(req, res){
        var author = new Author();
        console.log(req.body); // for using the submit form, we use req.body not req.params
        author.name = req.body.name;
        console.log(req.body.name);

        author.save(function(err){
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            }
            else
            {
                res.json({message:"New author added" ,data: author});
            }
        })
    },

    show: function(req, res){
        console.log('req.parmas', req.params);
        Author.findOne({_id: req.params.id}, function(err, data){
            if(err){
                console.log("Got an error", err.message);
                res.json({message: "Error", error: err});
            } else if(!data) {
                res.json({message: "MongoDB could not find one."});
            }
            else {
                res.json({message:"Success", info:data});
            }
        })
    },

    remove: function(req, res){
        // console.log('req.parmas', req.params);
        Author.remove({_id: req.params.id}, function(err, data){
            if(err){
                console.log("Got an error", err.message);
                res.json({message: "Error", error: err});
            } else {
                res.json({message:"Success", info:data});
            }
        })
    },
    
    update: function(req, res){
        console.log('req.body', req.body);
        Author.findOne({_id: req.body.id}, function(err, data){
            if(err){
                console.log("Got an error", err.message);
                res.json({message: "Error", error: err});
            } else if(!data) {
                res.json({message: "MongoDB could not find one."});
            } else {
                data.name = req.body.name;                
                data.save(function(err){
                    if(err){
                        console.log("Got an error", err.message);
                        res.json({message: "Error", error: err});
                    } else {
                        res.json({message:"Success", info:data});
                    }
                })
            }
        })
    },
}

