//
// requestHandler.js
//
// Written by leezhm(c)126.com, 22nd March, 2012.
//
// Copyright (c) leezhm(c)126.com. All Right Reserved.
//
// Last modified by leezhm(c)126.com on 26th March, 2012.
//

var exec = require("child_process").exec;
var querystring = require("querystring");

/*
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
*/

//
// Recoding function start for POST requset
//
function start(response, postData){
  console.log("Request handler 'start' was called ... ");

  var body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/plain; charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<from action="/upload" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' +
    '<input type="submit" value="Submit text" />' +
    '</from>' +
    '</body>' +
    '</html>';

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
}


function upload(response, postData){
  console.log("Request handler 'upload' was called ... ");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello, Uploading ... \nYou've Sent: " + querystring.parse(postData).text);
  response.end();
}

exports.start = start;
exports.upload = upload;