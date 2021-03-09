//前面的触发方式都是时间IO 触发方式 磁盘IO（本地 网络）
//读取 file.txt 停2s 然后再结束  本地IO 
var fs = require("fs");

fs.readFile('./file.txt',"utf-8",function(err,data){
  if(err){
    console.log(err);
  }else{
    getData(data);
  }
});

function getData(data){
   setTimeout(function(){
     console.log(data);
   },2000);  
}