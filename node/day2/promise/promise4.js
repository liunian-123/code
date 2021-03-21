//node 处理回调深渊 bluebird async(waterfall) 异步变成同步
//new Promisr --- async return new Promise.then() --- async/awaie

async function getData(){//返回一个Promis对象 里面包含 "这是一个数据"
    return "这是一个数据";
}
 var p = getData();

 p.then(function(data){
    console.log(data);//输出结果为： 这是一个数据
 })

//console.log(p)//输出结果为：Promise { '这是一个数据' }