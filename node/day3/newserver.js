var http=require("http");
var fs=require("fs");
var url=require("url");

http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    if(pathname=="/" || pathname=="/index"){
        goIndex(res);
    }
}).listen(3000);

console.log("newserver start port 3000");

function goIndex(res){
    var indexPath=__dirname+'/statics/'+url.parse("index.html").pathname;
    var indexData=fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(indexData);
}