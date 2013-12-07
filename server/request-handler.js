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

  if ( request.method === "OPTIONS") {

  }

  response.writeHead(statusCode, headers);


  console.log("Serving request type " + request.method + " for url " + request.url);

  /* Without this line, this server wouldn't work. See the note
   * below about CORS. */


   if (request.method === "GET") {
    response.writeHead(statusCode, headers);
  }




  headers['Content-Type'] = "text/plain";

  /* .writeHead() tells our server what HTTP status code to send back */
  // response.writeHead(statusCosssde, headers);

  if (request.method === "POST") {
    request.on('data', function (message){
      results.push(message);
    });
    console.log(request);
  }
  /* Make sure to always call response.end() - Node will not send
   * anything back to the client until you do. The string you pass to
   * response.end() will be the body of the response - i.e. what shows
   * up in the browser.*/
  response.end("[" + messageStorage + "]");
};

  var defaultCorsHeaders = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "HEAD, GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": 10 // Seconds.
  };

  var results = [];
  var messageStorage = results;
exports.handleRequest = handleRequest;
/* These headers will allow Cross-Origin Resource Sharing (CORS).
 * This CRUCIAL code allows this server to talk to websites that
 * are on different domains. (Your chat client is running from a url
 * like file://your/chat/client/index.html, which is considered a
 * different domain.) */
