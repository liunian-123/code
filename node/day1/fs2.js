//解决 fs 读取较大文件速度过慢
//文件流处理文件    文件读取流 和   文件写入流
const fs = require('fs');
var rs = fs.createReadStream('./fs1.txt');
var ws = fs.createWriteStream('./fs2.txt');
//管道符
rs.pipe(ws);
/*
//原生写法
rs.on("data",function(chunk){
  console.log(chunk.length);
  ws.write(chunk);
})
rs.on("end",function(){
  console.log("结束文件流操作");
  ws.end();
})
*/