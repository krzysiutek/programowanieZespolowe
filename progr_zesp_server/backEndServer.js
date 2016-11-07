var CONFIG = {
    port: 8001,
    allowedOrigins: ['http://localhost:3000', 'http://127.0.0.1:3000']
};

var express = require('express');
var bodyParser = require('body-parser');
var serverApp = express();

var database = require('./mySqlConnection.js');
database.setConnectionInfo();

serverApp.use(bodyParser.urlencoded({
    extended: false
}));

// parse serverApplication/json
serverApp.use(bodyParser.json());

// Add headers
serverApp.use(function(req, res, next) {

    // To allow requests from multiple websites
    var origin = req.headers.origin;

    if (CONFIG.allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
        res.setHeader('Access-Control-Allow-Origin', '*');
    }

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

require('./routes/users')(serverApp, database);
require('./routes/registration')(serverApp, database);
require('./routes/login')(serverApp, database);
require('./routes/curators')(serverApp, database);
// require('./routes/materials')(serverApp, models);
// require('./routes/price')(serverApp, models);

var server = serverApp.listen(CONFIG.port, function() {
    console.log("Server is running on port " + CONFIG.port);
});