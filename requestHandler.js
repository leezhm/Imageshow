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
}

function upload(){
		console.log("Request handler 'upload' was called ... ");
}

exports.start = start;
exports.upload = upload;