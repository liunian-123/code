/*
function getData(){
    return new Promise(function(resolve,reject){
        var username = "lichangchang";
        resolve(username);
    },1000)
}

var p = getData();
p.then(function(data){
    console.log(data);
})
*/


function getData(){
    return new Promise(function(resolve,reject){
        var username = "lichangchang";
        resolve(username);
    },1000)
}

async function test(){
    var data = await getData();
    console.log(data);
}
test();