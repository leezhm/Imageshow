//
// requestHandler.js
//
// Written by leezhm(c)126.com, 22nd March, 2012.
//
// Copyright (c) leezhm(c)126.com. All Right Reserved.
//
// Last modified by leezhm(c)126.com on 29th March, 2012.
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

  // set form encoding as utf-8
  form.encoding = "utf-8";

  var path = process.cwd();
  if("win32" == process.platform){
    path += "\\tmp\\";
  } else {
    path += "/tmp/";
  }

  console.log("Current Work Directory -> " + process.cwd());
  console.log("Current Operator System -> " + process.platform);
  console.log("Current File Path -> " + path);

  // set default upload folder
  form.uploadDir = path;

  console.log("about to parse ... ");
  form.parse(request, function(error, fields, files){
    console.log("parsing done ... ");

    var filename = files.upload.name;
    console.log("filename = " + filename);

    try{
      fs.renameSync(files.upload.path, path + filename);
    }catch(e){
      console.log("Rename Exception --> " + e);
    }

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("received image:<br/>");

    var link = '<img src=\'/show?filename=' + path + filename + '\'/>';

    response.write(link); // send show request
    response.end();
  })
}

// Show a image
function show(response, request){
  console.log("Request handler 'show' was called ... ");

  var args = request.url.split("?");
  var fields = String(args[1]).split("=");
  console.log("Original -> " + fields[1]);

  fs.readFile(fields[1], "binary", function(error, file){
    if(error){
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    }else{
      response.writeHead(200, {"Content-Type": "Image/png,Image/jpeg"});
      response.write(file, "binary");
      response.end();
    }
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;