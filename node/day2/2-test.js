console.log("start");//同步
for(var i = 0;i<5;i++){//for循环是同步的
  setTimeout(function(){  //异步->进入事件队列中 1 2 3 4 5    等待同步完成后才能进行异步操作
    console.log(i);
  },0);
}
console.log("end");
//输出结果  start end 55555  同步程序作用域空闲（当前进程空闲）
//出发异步函数方法执行满足两个条件
//1.当前进程空闲
//2.触发条件 --时间IO 磁盘IO(本地 网络) 自定义事件(on、once、addListener)
//事件(自定义事件，原生-第三方木块自带事件(data、end、connection、drain))

