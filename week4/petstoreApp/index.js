var express = require('express');
var app = express();

var Animal = require('./Animal.js');
var Toy = require('./Toy.js');

//---------------------------------------------

app.use('/findToy', (req, res) => {
	
	
	if (req.query.id) var id = req.query.id;
    else res.json({});

	Toy.findOne({id:id}, (err, toy) => {
		if (err) {
		    res.type('html').status(500);
		    res.send('Error: ' + err);
        }else if (!toy) res.json({});
        else res.json(toy);
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