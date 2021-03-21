function haveLaunch(food,drink,callback){
    console.log("Having lunch of "+food+''+drink);
    if(callback && typeof(callback)==='function'){
        setTimeout(function () {
            callback();
        },5000)
    }
}
haveLaunch('Toast','coffe',function() {
    //听5S显示finshed lunch
    console.log("Finshed Lunch");
})