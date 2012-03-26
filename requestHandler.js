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
var fs = require("fs");
var formidable = require("formidable");

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
function start(response){
  console.log("Request handler 'start' was called ... ");

  var body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; ' + 'charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" enctype="multipart/form-data" ' + 'method="post">' +
    '<input type="file" name="upload" multiple="multiple">' +
    '<input type="submit" value="Upload file" />' +
    '</from>' +
    '</body>' +
    '</html>';

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
}


function upload(response, request){
  console.log("Request handler 'upload' was called ... ");

  // using formidable
  var form = new formidable.IncomingForm();

  // set
  //form.uploadDir = "tmp";
  console.log("about to parse ... ");
  form.parse(request, function(error, fields, files){
    console.log("parsing done ... ");

    var filename = fields['filename'];
    console.log("filename = " + filename);

    try{
      fs.renameSync(files.upload.path, "/tmp/test.png");
    }catch(e){
      console.log(e);
    }

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("received image:<br/>");
    response.write("<img src='/show' />"); // send show request
    response.end();
  })
}

// Show a image
function show(response){
  console.log("Request handler 'show' was called ... ");

  fs.readFile("/tmp/test.png", "binary", function(error, file){
    if(error){
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    }else{
      response.writeHead(200, {"Content-Type": "Image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;