var fs = require('fs');
var path = require('path');
var http = require("http");
var url = require('url');
var mime = require("./type").types;

function pictures(request, response) {

    fs.readFile("pictures/1.jpg", "binary", function(error, file) {
        if (error) {
            response.writeHead(500, {
                "Content-Type": "text/plain"
            });
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {
                "Content-Type": "image/png"
            });
            response.write(file, "binary");
            response.end();
        }
    });
}

function articals(request, response) {
    fs.readFile("articals/artical.html", "binary", function(error, file) {
        if (error) {
            response.writeHead(500, {
                "Content-Type": "text/plain"
            });
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.write(file, "binary");
            response.end();
        }
    });
}

function about(request, response) {
    fs.readFile("about.html", "binary", function(error, file) {
        if (error) {
            response.writeHead(500, {
                "Content-Type": "text/plain"
            });
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.write(file, "binary");
            response.end();
        }
    });
}

function start(request, response) {
    var indexPath = './index.html';
    fs.exists(indexPath, function(exists) {
        fs.readFile(indexPath, function(err, data) {
            if (err) {
                throw err;
            } else {
                var pathname = url.parse(request.url).pathname;
                var extname = path.extname(pathname);
                var type = extname.slice(1);
                if (extname === '') {
                    response.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    response.write(data);
                    response.end();
                } else {
                    filesLoad("./", type, request, response);
                }
            }
        })
    })
}

function putJs(request, response) {
    var type = "js";
    filesLoad("./index.js", type, request, response);
}

function putCss(request, response) {
    var type = "css";
    filesLoad("./style.css", type, request, response);
}

function filesLoad(filePath, type, req, res) {
    fs.exists(filePath, function(exists) {
        if (!exists) {
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            res.end();
        } else {
            fs.readFile(filePath, 'binary', function(err, file) {
                if (err) {
                    res.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    res.end();
                } else {
                    res.writeHead(200, {
                        'Content-Type': mime[type]
                    });
                    res.write(file, 'binary');
                    res.end();
                }
            });
        }
    })
}



exports.start = start;
exports.abort = about;
exports.putJs = putJs;
exports.putCss = putCss;
exports.filesLoad = filesLoad;
exports.pictures = pictures;
exports.articals = articals;