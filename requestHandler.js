//
// requestHandler.js
//
// Written by leezhm(c)126.com, 22nd March, 2012.
//
// Copyright (c) leezhm(c)126.com. All Right Reserved.
//
// Last modified by leezhm(c)126.com on 22nd March, 2012.
//

function start(){
  console.log("Request handler 'start' was called ... ");

  // sleep
  function sleep(milliSecond){
    var startTime = new Date().getTime();
    console.log(startTime.toString() + " Begin to waiting ...");
    while (new Date().getTime() < startTime + milliSecond){
      console.log("Now is " + new Date().getTime().toString() +  " Just waiting ... ");
    }
  }

  // let start function wait 10 second.
  sleep(10000);

  return "Hello Start ... ";
}

function upload(){
  console.log("Request handler 'upload' was called ... ");
  return "Hello Update ... "
}

exports.start = start;
exports.upload = upload;