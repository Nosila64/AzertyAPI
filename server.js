var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    router = require('./router');

app.listen(3000);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/',router);


console.log('todo list RESTful API server started on: 3000');