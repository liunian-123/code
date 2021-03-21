function demo(callback){
setTimeout(function() {
    var name = "lichangchang";
    callback(name);
})
}
demo(function(name){
    console.log(name)
})