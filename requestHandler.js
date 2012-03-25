//
// requestHandler.js
//
// Written by leezhm(c)126.com, 22nd March, 2012.
//
// Copyright (c) leezhm(c)126.com. All Right Reserved.
//
// Last modified by leezhm(c)126.com on 25th March, 2012.
//

var exec = require("child_process").exec;

function start(response){
  console.log("Request handler 'start' was called ... ");

  var content = "empty";

  exec("find/",
    {timeout : 10000, maxBuffer : 20000 * 1024},
    function(error, stdout, stderr){
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write(stdout);
    response.end();
  });

  return content;
}

function upload(response){
  console.log("Request handler 'upload' was called ... ");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello, Uploading ... ");
  response.end();
}

exports.start = start;
exports.upload = upload;