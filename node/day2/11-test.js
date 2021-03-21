//JS回调--同步回调、异步回调
function Person(){
    this.think = function(callback){
    console.log("thinking ~~~~~")  
    setTimeout(function(){
        callback();
      },5000)
    }

    this.answer = function(){
        console.log("i am answering other question");
    }
}


var person = new Person();
person.think(function(){
    console.log("thinking 5 seconds")
});
person.answer();