//文件较大时 使用fs读取就会很慢
var fs = require("fs");//加载fs模块
console.log("同步");//同步处理文件  产生阻塞
var data1 = fs.readFileSync("./fs.txt");
var data2 = fs.readFileSync("./fs.txt","utf-8");
console.log("data1",data1);
console.log("data2",data2);
console.log("end");
//不对16进制进行编码  则输出  <Buffer 20 77 6f 20 6a 69 61 6f 20 6c 69 63 68 61 6e 67 63 68 61 6e 67>
console.log("异步");//异步  当前进程空闲  达到出发条件
//磁盘IO  时间IO  自定义事件(捕获事件)
fs.readFile("./fs.txt","utf-8",function(err,data){
  if(err){
    console.log(err);
    return false;
  }else{
    console.log(data1);
  }
})
console.log("end")  //此句为同步  先执行同步 再执行异步