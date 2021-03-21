//讲解 宏任务 和 微任务
process.nextTick(()=>console.log(1));
Promise.resolve().then(()=>console.log(2));
process.nextTick(()=>console.log(3));
Promise.resolve().then(()=>console.log(4));
//输出结果 1 3 2 4
//同步最快--> promise同步跟随代码---->(同步--异步切换)---->process.nextTick
//promise的异步---->setTimeout setInterva -->setImmdiate