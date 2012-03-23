//
// router.js
//
// Written by leezhm(c)126.com, 22nd March, 2012.
//
// Copyright (c) leezhm(c)126.com. All Right Reserved.
//
// Last modified by leezhm(c)126.com on 23rd March, 2012.
//


function route(handle, pathname){
  console.log("About to route a request for " + pathname);

  if('function' == typeof handle[pathname]){
    return handle[pathname]();
  }
  else{
    console.log("No request handler found for " + pathname);
    return "404 Not Found";
  }
}

// export function route
exports.route = route;
