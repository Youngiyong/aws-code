const express = require('express');
const app = express()

app.get('/', function(req, res){
    res.send('Hello world!');
})


var server = app.listen(80, function() {
    var port = server.address().port;

    console.log('Server is working : PORT - ',port);
})