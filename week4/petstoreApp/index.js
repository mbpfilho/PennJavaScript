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
        if(req.query.trait)var trait={traits:req.query.trait};
    
        var query={$or:[terms,trait]};

	    Animal.find(query,(err,animals)=>{
		    if(err){
		        res.type('html').status(500);
		        res.send('Error: '+err);
		    }else if(!animals)res.json({});
	        else{ 
                fanimals=[];
                animals.forEach((animal)=>{fanimals.push({name:animal.name,species:animal.species,breed:animal.breed,gender:animal.gender,age:animal.age})});
                res.json({fanimals});

            }
        })
    }
})

app.use('/animalsYoungerThan',(req,res)=>{	
	if(req.query.age)var age=req.query.age;
    else res.json({});

	Animal.find({age:{$lt:age}},(err,animals)=>{
		if(err){
		    res.type('html').status(500);
		    res.send('Error: '+err);
        }else if(!animals)res.json({count:0})
        else{
            names=[];
            animals.forEach((animal)=>{names.push(animal.name)});
            res.json({count:animals.length,names:names});
        }
	});
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