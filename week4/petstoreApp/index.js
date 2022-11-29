var express = require('express');
var app = express();

var Animal = require('./Animal.js');
var Toy = require('./Toy.js');

//---------------------------------------------

app.use('/findToy',(req, res)=>{	
	if(req.query.id)var id=req.query.id;
    else res.json({});

	Toy.find({id:id},(err,toy)=>{
		if(err){
		    res.type('html').status(500);
		    res.send('Error: '+err);
        }else if(!toy)res.json({});
        else res.json(toy);
	});
})

app.use('/findAnimals',(req,res)=>{
    if(!req.query.species&&!req.body.gender&&!req.query.trait)res.json({});
    else{
        var terms=[];
        if(req.query.species)terms.push({species:req.query.species});
        if(req.body.gender)terms.push({gender:req.query.gender});
        if(req.query.trait)terms.push({traits:req.query.trait});
        // if(req.query.trait)var trait={traits:req.query.trait};
    
        // var query={$or:terms};

	    Animal.find(terms,(err,animals)=>{
		    if(err){
		        res.type('html').status(500);
		        res.send('Error: '+err);
		    }else if(animals.length==0)res.json({});
	        else{ 
                var foundAnimals=[];
                animals.forEach((animal)=>{foundAnimals.push({name:animal.name,species:animal.species,breed:animal.breed,gender:animal.gender,age:animal.age})});
                res.json(foundAnimals);
            }
        })
    }
})

app.use('/animalsYoungerThan',(req,res)=>{	
	if(!req.query.age)res.json({});
    else{
        var age=req.query.age;
        Animal.find({age:{$lt:age}},(err,animals)=>{
            if(err){
                res.type('html').status(500);
                res.send('Error: '+err);
            }else if(animals.length==0)res.json({count:0})
            else{
                var names=[];
                animals.forEach((animal)=>{names.push(animal.name)});
                res.json({count:animals.length,names:names});
            }
        });
    }
})

app.use('/calculatePrice',(req,res)=>{
    var idlength=req.query.id.length;
	if(idlength>0&&idlength==req.query.qty.length){
        var id=[];
        var qty=[];
        for(let i=0;i<idlength;i++){
            id[i]=req.query,id[i];
            qty[i]=req.query.id[i];
        }
        Toy.find({id:id},(err,toys)=>{
            if(err){
                res.type('html').status(500);
                res.send('Error: '+err);
            }else if(!toys)res.json({})
            else{
                var toreturn={};
                var totalPrice=0;
                var items=[];
                var subtotal;
                var price;

                for(let c=0;c<idlength;c++){
                    subtotal=
                }
                                
                .forEach((animal)=>{names.push(animal.name)});
                res.json({count:animals.length,names:names});
            }
        });

    }else res.json({});

})


//---------------------------------------------

app.use('/', (req, res) => {
	res.json({ msg : 'It works!' });
    });


app.listen(3000, () => {
	console.log('Listening on port 3000');
    });



// Please do not delete the following line; we need it for testing!
module.exports = app;