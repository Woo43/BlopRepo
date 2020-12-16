var express = require('express');
var path = require('path');
var favicon = require('serve-favicon')
const bodyParser = require("body-parser")

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/thing.html'));
});

app.listen(8080);