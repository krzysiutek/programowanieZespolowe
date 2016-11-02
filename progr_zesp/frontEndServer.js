var express = require('express');

var path = require('path');
var bodyParser = require('body-parser');
var serverApp = express();

serverApp.use(bodyParser.json());
serverApp.use(bodyParser.urlencoded({extended: false}));
serverApp.use(express.static(path.join(__dirname, '')));

/* GET home page. */
serverApp.get('/', function(req, res, next) {
  //Path to your main file
  res.status(200).sendFile(path.join(__dirname+'/indexy.html')); 
  console.log("paf " + path.join(__dirname+'/indexy.html'));
});

serverApp.listen(3000, function () {
  console.log('Example serverApp listening on port 3000!. Hosting from: ' + __dirname);
});

module.exports = serverApp;