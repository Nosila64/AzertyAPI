var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors');
    router = require('./router');

app.listen(3000);
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api',router);


console.log('todo list RESTful API server started on: 3000');