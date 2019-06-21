var couchbase = require('couchbase');
var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Couchbase driver loaded");

});

var port = process.env.PORT || 3000;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

/*
WSL:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
(managing multiple NPM, node etc)

nvm install 8.9
nvm alias default 8.9

npm init
npm install --save couchbase

On Azure App Service for Linux
Select code + node.js 8.9 (or LTS as per 2019-06-21)

Warning! Repository contains node_modules
*/