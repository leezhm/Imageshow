//
// router.js
//
// Written by leezhm(c)126.com, 22nd March, 2012.
//
// Copyright (c) leezhm(c)126.com. All Right Reserved.
//
// Last modified by leezhm(c)126.com on 26th March, 2012.
//

/*
function route(handle, pathname, response, postData){
  console.log("About to route a request for " + pathname);

  if('function' == typeof handle[pathname]){
    handle[pathname](response, postData);
  }
  else{
    console.log("No request handler found for " + pathname);

    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not Found ... ");
    response.end();
  }
}
*/

function route(handle, pathname, response, request){
  console.log("About to route a request for " + pathname);

  if('function' == typeof handle[pathname]){
    handle[pathname](response, request);
  }
  else{
    console.log("No request handler found for " + pathname);

    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 Not Found ... ");
    response.end();
  }
}

// export function route
exports.route = route;
