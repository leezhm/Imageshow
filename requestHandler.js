//
// requestHandler.js
//
// Written by leezhm(c)126.com, 22nd March, 2012.
//
// Copyright (c) leezhm(c)126.com. All Right Reserved.
//
// Last modified by leezhm(c)126.com on 23rd March, 2012.
//

var exec = require("child_process").exec;

function start(){
  console.log("Request handler 'start' was called ... ");

  var content = "empty";

  exec("ls-lah", function(error, stdout, stderr){
    content = stdout;
  });

  return content;
}

function upload(){
  console.log("Request handler 'upload' was called ... ");
  return "Hello upload";
}

exports.start = start;
exports.upload = upload;