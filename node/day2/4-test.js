//ali题目
setTimeout(function(){
  console.log(123)
},1);
setTimeout(function(){
  console.log(456)
},0);
//运行结果   123 456  逻辑为 456 123 但是 setTimeout 0ms和1ms都是同于 0 故1243先进入队列456后进入队列 123 先进入先输出