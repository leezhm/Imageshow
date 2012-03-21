//
// Server.js
//
// We will build a small website for sharing our images
// This is the source file of server
//
// Written by leezhm(c)126.com, 21st March, 2012.
//
// Copyright (c) leezhm(c)126.com. All Right Reserved.
//
// Last modified by leezhm(c)126.com on 21st March, 2012.
//

// load the http module
var http = require("http");

http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello, Welcome to access my website");
	response.end();
}).listen(8068, 'localhost');

console.log('Server running at http://localhost:8068/');
