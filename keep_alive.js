var http = require('http');

http.createServer(function (req, res){
  res.write("Lwezy & Usta");
  res.end();
}).listen(8080);