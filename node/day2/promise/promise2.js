//创建promise
//Promise 同步时 不会因为 reseolve 和 reject 阻塞  async/await会阻塞
var p = new Promise(function(resolve,reject){
    var name = "changchang";
    if(Math.random()<0.7){
        console.log(123);
        resolve(name);
        console.log(456);
        //输出结果：123 456 changchang
    }else{
        reject('失败');
    }
})
//成功执行
p.then(function(name){
    console.log(name);
})