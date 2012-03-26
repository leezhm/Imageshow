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
// Last modified by leezhm(c)126.com on 26th March, 2012.
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

function start(route, handle){
  function onRequest(request, response){
    console.log("A new remote request received ... ");

    // get url pathname
    var pathname = url.parse(request.url).pathname;
    // remove '/' from current string pathname
    pathname = pathname.replace(/\//g, "");
    console.log("Request for " + pathname + " received ... ");

/*
    // write head
    response.writeHead(200, {"Content-Type": "text/plain"});

    //
    var content = route(handle, pathname);
    response.write(content);

    response.end();
*/
/*
    // Use respone to return content
    route(handle, pathname, response);
*/
/*
    var postData = "";
    request.setEncoding("utf-8");

    //
    request.addListener("data", function(postDataChunk){
      postData += postDataChunk;
      Console.log("Received POST data Chunk '" + postDataChunk + "' ... ");
    });

    //
    request.addListener("end", function(){
      route(handle, pathname, response, postData);
    });
*/
    // for uploading image from our own machine
    route(handle, pathname, response, request);
  }

  // create server and start server
  http.createServer(onRequest).listen(8068);
  console.log("Server has started ... ");
}

// export function start
exports.start = start;
