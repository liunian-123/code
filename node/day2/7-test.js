//如何把异步转换为同步-使用原生的转换方式
for(var i=0;i<10;i++){
  var m = i;
  /*
  setTimeout(function(){
    console.log(m);
  },200);
  */
 
  // exec(m);

  exec(m,function(m){
    console.log(m);
  })
}
//输出结果为 9 9 9 9 ......
//使输出结果为 0-9
//同步函数内嵌套异步

/*
function exec(m){
  setTimeout(function(){
    console.log(m)
  },200);
}
*/
function exec(param,callback){
  setTimeout(function(){
    callback(param);
  },200)
}