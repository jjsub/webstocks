'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('I want to test more');
});

app.listen(3000);
