//
// index.js
//
// Written by leezhm(c)126.com, 22nd March, 2012.
//
// Copyright (c) leezhm(c)126.com. All Right Reserved.
//
// Last modified by leezhm(c)126.com on 22nd March, 2012.
//

var server = require("./server");
var router = require("./router");
var handle = require("./requestHandler");

server.start(router.route, handle);