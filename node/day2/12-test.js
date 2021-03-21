//等待5秒 输出人名  function_name同步回调
function waitFive(name,function_name){
 var pus = 0;
 var currentDate = new Date();
 //空跑5000毫秒
 while(pus<5000){
    var now = new Date();
    pus = now - currentDate;
 }
    function_name(name);//同步执行callback
}

function echo(name){
    console.log(name);
}

//等待5秒的函数方法  （人名字，回调方法callback）
waitFive("sword",echo);
console.log("its over");