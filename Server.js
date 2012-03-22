//
// server.js
//
// We will build a small website for sharing our images
// This is the source file of server
//
// Written by leezhm(c)126.com, 21st March, 2012.
//
// Copyright (c) leezhm(c)126.com. All Right Reserved.
//
// Last modified by leezhm(c)126.com on 22nd March, 2012.
//

// load the http module
/*
var http = require("http");
http.createServer(function(request, response){
	console.log("A new request received ... ");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello, Welcome to access my website");
	response.end();
}).listen(8068, 'localhost');

console.log('Server running at http://localhost:8068/');
*/

// load the http module
var http = require("http");

// load the url module
var url = require("url");

function start(route){
	function onRequest(request, response){
		console.log("A new remote request received ... ");

		// show route messages
		route(pathname);

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello, Welcome to visit our sample website ... ");
		response.end();
	}

	// create server and start server
	http.createServer(onRequest).listen(8068);
	console.log("Server has started ... ");
}

// export function start
exports.start = start;