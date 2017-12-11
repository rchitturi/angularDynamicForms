/**
 * Created by Philip on 10/26/15.
 */

var url         = require('url'),
    traverse    = require('traverse'),
    bodyParser  = require('body-parser'),
    fs          = require('fs'),
    request     = require('request');

module.exports = new function() {

    var found = false,
        filePath = '',
        loadDelay,
        mapping,
        jsonDir,
        api = {
            found: false
        },
        urlObj,
        reqUrl,
        app,
        switchPort;

    this.init = function( options ) {
        //console.log('Init');
        mapping = options.API;
        jsonDir = options.jDir;
        switchPort = options.switchPort;
        app = options.app;
    };

    this.run = function(req, res) {
        urlObj = url.parse(req.url);
        reqUrl = urlObj.pathname;
        console.log('req: ', reqUrl);
        //console.log('query: ' + JSON.stringify(req.query));

        if(req.params && Object.keys(req.params).length > 0) {
            // console.log('params:', req.params);
            // console.log('key:', Object.keys(req.params));
            for(var i = 0; i < Object.keys(req.params).length; i++) {
                reqUrl = reqUrl.replace(req.params[Object.keys(req.params)[i]], ':' + Object.keys(req.params)[i]);
            }
        }

        traverse(mapping).forEach(function(node){

            if (node.url === reqUrl && node.method === req.method && matchHeaders(node, req.headers) && matchParams(node.param, req.query)) {
                api = loadAPI(node, getPath(node), req);
            } else {

            }
        });

        if (api.found && !api.newPort) {
            fs.readFile(filePath, 'utf8', function(err, data) {
                if (err) {
                    console.log("Error: ", err);
                    res.send({
                        "code": 404
                    });
                } else {
                    if (loadDelay!== undefined) {
                        if(isNaN(loadDelay) && loadDelay.indexOf('-') >= 0) {
                            var range = loadDelay.split('-'),
                                min   = parseInt(range[0]),
                                max   = parseInt(range[1]),
                                random = Math.random();

                            var loadDelayTime = Math.floor((random*(max-min+1))+min);
                        } else {
                            var loadDelayTime = loadDelay*1000;
                        }
                        setTimeout(function(){ res.send(data); }, loadDelayTime);
                    } else {
                        res.send(data);
                    }
                }

            });
        } else if(api.found && api.newPort) {
            var path;
            if (api.newPort.toString().length === 4) {
                path = 'http://localhost:' + api.newPort + api.filePath;
            } else {
                path = api.newPort + api.filePath;
            }
            request({
                uri: path,
                URI: path,
                method: 'POST',
                body: JSON.stringify(req.body) || {},
                headers: {
                    'Content-Type': 'application/json'
                }
            },  function(error, response, body) {
                if (error) { console.log(error); }
                else {
                    res.headers = {
                        'content-type': 'application/json'
                    };
                    //console.log(res.headers);
                    res.json(JSON.parse(response.body));
                    //console.log(res);
                }

            });
            // console.log('path ----------------------------> ', path);
            // app.post(path, function(request, resp) {
            //     console.log(request);
            //     res.send(resp);
            // });

        } else {
            console.log("not found", filePath);
            res.send({
                "code": 404
            });
        }
	    /**
         * Reset api.found to false for next call
         * @type {boolean}
         */
        api.found = false;
    };

    loadAPI = function(node, path, req) {
        // console.log('PATH -----------------------> ', path);
        // console.log('found: ', reqUrl);
        //console.log('headers: ', req.headers);

        found = true;
        filePath = path; //node.path
        //console.log("raw", node.delay);
        loadDelay = node.delay;

        if(node.header) {

        }
        if (node.path.indexOf('.') < 0) {

            if(node.suffix && (node.suffix !== null || node.suffix !== "")) {
                filePath = filePath + '_' + req.params[node.suffix] + '.json';
            } else if(node.prefix && (node.prefix !== null || node.prefix !== "")) {
                filePath = req.params[node.suffix] + '_' + filePath + '.json';
            } else {
                filePath = filePath + '.json';
            }

        }
        if (node.pathRoot) {
            filePath = node.pathRoot + filePath;
        } else {
            filePath = jsonDir + filePath;
        }
        //console.log('pre: ', filePath , found);

        return {
            found: found,
            filePath: filePath,
            loadDelay: loadDelay
        }
    };

    getPath = function( node ) {
        var path;
        if (node.alt) {
            // check if node.condition evaluates to true
            if (!req.body[node.condition]) {
                path = node.alt;
                console.log('ALT ---------------------------------> ' + node.alt);
            } else {
                path = node.path;
            }
        } else {
            path = node.path;
        }
        // console.log("NODE:",node);
        // console.log(node.path);
        return path;
    };

    matchHeaders = function(node, reqHeaders) {
        if(!node.headers) {
            return true;
        }
        var match = [];
        node.headers.forEach(function(o){
            var pKey = Object.keys(o)[0],
                subMatch = false;
            traverse(reqHeaders).forEach(function(nv){
                if(this.key !== undefined && pKey.toLowerCase() === this.key.toLowerCase() && o[pKey].toLowerCase() === nv.toLowerCase()) {
                    subMatch = true;
                }
            });
            subMatch ? match.push(true) : match.push(false);
        });

        if(match.indexOf(false) === -1) {
            return true;
        }
        return false;
    };

    matchParams = function(params, query) {
        var foundSeq = [];

        if(params !== undefined && query !== undefined) {
            if(params.length !== Object.keys(query).length) {
                return false;
            }

            if(query && Object.keys(query).length > 0) {
                for(var i = 0; i < Object.keys(query).length; i++) {
                    if(params[i] === Object.keys(query)[i]) {
                        foundSeq.push(true);
                    } else {
                        foundSeq.push(false);
                    }
                }
            }

            if(foundSeq.indexOf(false) > -1) {
                return false;
            }
            return true;
        } else {
            return true;
        }
    };

    switchAPI = function(node, req) {
        console.log('PATH -----------------------> ' + node.url);
        console.log('found: ' + reqUrl);
        found = true;
        filePath = 'http://localhost:' + switchPort + '/' + node.url;
        loadDelay = node.delay;
        return {
            found: found,
            filePath: node.url,
            loadDelay: loadDelay,
            newPort: switchPort
        }
    };
};