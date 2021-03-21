setTimeout(function(){
    console.log(123);
},0);

process.nextTick(()=>console.log(1));

new Promise(function(resolve){//promise 在 setTimeout 之前
    console.log(456);//promise 同步跟随代码
    resolve();
}).then(()=>console.log(2));

process.nextTick(()=>console.log(3));
Promise.resolve().then(()=>console.log(4));
console.log("end");

//输出结果为： 456 end 1 3 2 4 123