var express = require('express')
var app = express()
app.use('/',(req,res) => {
    var method = req.method ;
    var url = req.url ;
    var agent = req.headers ['user-agent']
    agent = req.get ('User-Agent')
    res.status(200)
    res.type('html')
    res.write('Hello world!');
    res.write('<p>')
    res.write('<b>Have a nice day</b>')
    res.end()
});
app.use('/about', (req , res) =>{
    res.send('This is the about page.')
});
app.use('/login', (req , res) =>{
    res.send('This is the login page.')
});
app.use( /*default*/ (req , res) =>{
    res.status(404).send('Not found!')
});
app.listen(3000 , () =>{
    console.log('Listening on port 3000');
});