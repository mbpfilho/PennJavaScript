var mongoose = require('mongoose');

// where does the db name come from? I just made this up
mongoose.connect('mongodb+srv://user:admin@cluster0.22kghxc.mongodb.net/?retryWrites=true&w=majority');
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://user:admin@cluster0.22kghxc.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

var Schema = mongoose.Schema;

var authorSchema = new Schema({
	name: String,
	affiliation: String
    });

var bookSchema = new Schema({
	title: {type: String, required: true, unique: true},
	year: Number,
	authors: [authorSchema]
    });


module.exports = mongoose.model('Book', bookSchema);

