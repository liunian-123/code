var http=require("http");
var fs=require("fs");
var url=require("url");

http.createServer(function(req,res){
    //通过浏览器发送的请求包来加载demo.html
    // console.log(req);

    // console.log(req.method);
    // console.log(req.headers);
    
    // console.log(req.url);
    // console.log(url.parse(req.url));

    console.log(__dirname);

    var pathname=url.parse(req.url).pathname;
    if(pathname=="/" || pathname=="/index"){
        //读取当前文件到内存 当前文件的路径
        var indexPath=__dirname+"/static/"+url.parse("demo.html").pathname;
        // console.log(indexPath);
        //读取当前文件到内存
        var indecData = fs.readFileSync(indexPath);
        //把内存数据打成数据包(包头，包体)
        res.writeHead(200,{"Content-type":"text/html"});
        res.end(indecData);
        fs.readFile(indexPath,"utf-8",function(err,indexData){
          if(err){
            console.log(err);
            return false;
          }else{
            res.writeHead(200,{"Content-type":"text/html"});
            resizeBy.end(indexData);
          }
        })
      }
    


}).listen(3000);
console.log("server start port 3000");