/**
 * Created by Philip on 10/26/15.
 */
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Express
const express   = require('express'),

// Plugins
    argv        = require('yargs').argv,
    bodyParser  = require('body-parser'),
    findAPI     = require('./server-init/findAPI'),
    fs          = require('fs');

process.on('uncaughtException', function(err) {
    console.error('uncaughtException');
    console.error(err.stack);
});

var project     = argv.p || 'sample',
    serverPort  = argv.s,
    switchPort  = argv.t,

// Config
    config          = require('./server-init/config'),
    routes          = require("./server-init/routes.js"),
    JSON            = "./server-init/JSON/",
    PROJECTPATH     = config.PROJECTPATH + config.APPPATH;

console.log('');
console.log('-----------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------');
console.log(' - PROJECT WORKING PATHS: ');
console.log("JSON Path:         " + JSON);
console.log("config.json Path:  " + "./projects/" + project + "/" + config.LOCAL.MAPPING_FILE);
console.log("Routes Path:       " + "./projects/" + project + "/routes.js");
if (switchPort) {
    console.log("API Forwarding:    " + switchPort);
}
console.log('-----------------------------------------------------------------------------');
console.log('-----------------------------------------------------------------------------');
console.log('');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, content-type, contentType, Accept");
    res.header('Access-Control-Allow-Methods', 'HEAD, POST, GET, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');

    next();
};

/*
 * Config Server
 */
var app = express();
app.disable('etag');
app.set('port', process.env.PORT || serverPort || config.LOCAL.EXPRESS.PORT || 3099);
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

findAPI.init({
    API: [
        routes.API
    ],
    jDir: JSON,
    switchPort: switchPort,
    app: app
});

/**
 * API Handler
 */
for(var i = 0; i < routes.API.length; i++) {
    app.all(routes.API[i].url, findAPI.run);
}

/**
 * Start Server
 */
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Server listening at http://localhost:%s', port);
    console.log('');
    console.log('-----------------------------------------------------------------------------');
    console.log('-----------------------------------------------------------------------------');
});

module.exports = app;
