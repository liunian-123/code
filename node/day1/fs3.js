var fs = require('fs');
var http = require('http');
http.createServer(function(req,res){
  // var data = fs.readFileSync('./fs1.txt','utf-8');
  // res.writeHead(200,{"Content-type":"text/plan"});
  // fs.createReadStream("./fs1.txt").pipe(res);
  fs.createReadStream("./fs1.txt").pipe(process.stdout);


}).listen(3000);

console.log("server start port 3000");