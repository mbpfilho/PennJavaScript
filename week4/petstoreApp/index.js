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
        // var terms=[];
        // if(req.query.species)terms.push({species:req.query.species});
        // if(req.body.gender)terms.push({gender:req.query.gender});
        // if(req.query.trait)terms.push({traits:req.query.trait});
        // // if(req.query.trait)var trait={traits:req.query.trait};
    
        // // var query={$or:terms};

	    Animal.find((err,animals)=>{
		    if(err){
		        res.type('html').status(500);
		        res.send('Error: '+err);
		    }//else if(animals.length==0)res.json({});
	        else{ 
                var foundAnimals=[];

                animals.forEach((animal)=>{
                    if((!req.query.species||req.query.species==animal.species)&&(!req.query.gender||req.query.gender==animal.gender)&&(!req.query.trait||animal.traits.includes(req.query.trait))){
                        foundAnimals.push({name:animal.name,species:animal.species,breed:animal.breed,gender:animal.gender,age:animal.age});
                        //[{"name":"Cooper","species":"Dog","breed":"Catahoula","gender":"male","age":11},{"name":"Felix","species":"Cat","breed":"Tuxedo","gender":"male","age":98}]
                    }   
                });
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
        const idSet=new Set();
        var terms=[];
        for(let i0=0;i0<idlength;i0++){
            idSet.add(req.query.id[i0]);
            terms.push({id:req.query.id[i0]});
        }
        var id=Array.from(idSet);
        var qty=[];
        var j;
        for(let i=0;i<idlength;i++){
            if((req.query.qty[i])>0){
                j=id.indexOf(req.query.id[i]);
                qty[j]+=Number(req.query.qty[i]);
            }
        }

        Toy.find({$or:terms},(err,toys)=>{
            if(err){
                res.type('html').status(500);
                res.send('Error: '+err);
            }
            // else if(!toys)res.json({})
            else{
                var totalPrice=0;
                var items=[];
                var subtotal;
                var c;

                toys.forEach((toy)=>{
                    c=id.indexOf(toy.id);
                    if(c>=0){
                        subtotal=toy.price*qty[c];
                        items.push({item:id[c],qty:qty[c].toString(),subtotal:subtotal});
                        totalPrice+=subtotal;
                    }
                })
                res.json({items:items,totalPrice:totalPrice});
                //{"items":[{"item":"123","qty":"1","subtotal":10.99}],> "totalPrice":10.99}
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