var http = require('http');
var fs = require('fs');
var port = 8080;


var server = http.createServer(function (req, res) {

    let data;

    if (req.url == "/") {
        data = fs.readFileSync('home.html', 'utf8');
    } else if (req.url == "/Contact") {
        data = fs.readFileSync('contact.html', 'utf8');
    } else if (req.url == "/Profile") {
        data = fs.readFileSync('profile.html', 'utf8');
    }

    res.end(data);


})

server.listen(port);
console.log("Server Run");


