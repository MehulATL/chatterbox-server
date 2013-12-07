/* You should implement your request handler function in this file.
 * And hey! This is already getting passed to http.createServer()
 * in basic-server.js. But it won't work as is.
 * You'll have to figure out a way to export this function from
 * this file and include it in basic-server.js so that it actually works.
 * *Hint* Check out the node module documentation at http://nodejs.org/api/modules.html. */

var http = require('http');
var path = require('path');
var handleRequest = function(request, response) {
  /* the 'request' argument comes from node's http module. It includes info about the
  request - such as what URL the browser is requesting. */


  /* Documentation for both request and response can be found at
   * http://nodemanual.org/0.8.14/nodejs_ref_guide/http.html */
  var headers = defaultCorsHeaders;
  var statusCode = 200;

  console.log("Serving request type " + request.method + " for url " + request.url);

  if (request.method === "GET") {
  }

  headers['Content-Type'] = "application/json";
  //set this to json;

  if (request.method === "POST") {
    statusCode = 201;
    request.on('data', function (message){
      results.push(message);
    });
  }

  if (request.url === "http://127.0.0.1:8080/arglebargle" ){
    statusCode = 404;
  }

  if (request.url === "/arglebargle" ){
    statusCode = 404;
  }

  /* Make sure to always call response.end() - Node will not send
   * anything back to the client until you do. The string you pass to
   * response.end() will be the body of the response - i.e. what shows
   * up in the browser.*/

  response.writeHead(statusCode, headers);
  response.end("[" + messageStorage + "]");
};

  var defaultCorsHeaders = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "HEAD, GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": 300 // Seconds.
  };

  var results = [];
  var messageStorage = results;
exports.handleRequest = handleRequest;
/* These headers will allow Cross-Origin Resource Sharing (CORS).
 * This CRUCIAL code allows this server to talk to websites that
 * are on different domains. (Your chat client is running from a url
 * like file://your/chat/client/index.html, which is considered a
 * different domain.) */
