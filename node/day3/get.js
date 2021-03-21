// http://localhost/test?name=lichangchang&age=21
// url.parse--->object   query=name=laofeng&age=19  pathname=/test
var http=require("http");
var url=require("url");
var querystring=require("querystring");

//把对象变成串 序列化 反之则为反序列化
//json.parse json.stringfy
http.createServer(function(req,res){
    /*
    var paramStr=url.parse(req.url).query;
    // console.log(paramStr);
    var paramObj=paramStr.split("&");
    // console.log(paramObj);
    var arrobj=paramObj[0].split("=")
    console.log(arrobj[1]);
    */

    var paramStr=url.parse(req.url).query;

    var paramObj=querystring.parse(paramStr);
    console.log(paramObj);
}).listen(3000);

console.log("get.js serve start port 3000");