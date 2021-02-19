var firecount = 0;
var start = new Date();
var timer = setInterval(function(){
  if (new Date()-start>1000){
    clearInterval();
    console.log(firecount);
    return;
  }

  firecount++;

},0)
//setInterval setTimeout
//定时不是真正的定时 node定时来自于process.netTick允许将时间调度尽可能快触发
//setInterval setTimeout process.netTick rquestAnimationFrame
//有些异步函数可以间接取回来（不是通过时间列处理回调）--Promise 对象或Pubsub模式