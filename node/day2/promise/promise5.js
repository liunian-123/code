// async function xx(){
//     var b = getData();
//     if(b){
//         console.log(1);
//     }
// }
//如果getData 是个异步函数 则 b 一直为假 之后的代码一直运行不了
//需要把 getData 变为同步并且阻塞


async function getData(){
    return "这是一个数据"
}

async function test(){
//  var d=getData();//输出结果为：Promise { '这是一个数据' }
    var d = await getData();//await 只能在函数体内应用 输出结果为：这是一个数据
    console.log(d);
}
test();
