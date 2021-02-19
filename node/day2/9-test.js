var http = requrie("http");

urls = ["www.qq.com","www.baidu.com","www.sohu.com"];

function fetchPage(url){
  var start = new Date();
  http.get({host:url},function(res){
    console.log("got respone from" +url);
    console.log("Request took:",new Date-start,'ms');
  })
}

for (var i = 0;i<urls.length;i++){
  fetchPage(urls[i]);
}

//http四大关键字 get post put delete
//符合网络协议  http https ftp smtp pop3 dns
