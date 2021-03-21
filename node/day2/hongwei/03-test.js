// setTimeout(function C(){
//     console.log(3);
// },0);

// process.nextTick(function A(){
//     console.log(1);
//     process.nextTick(function B(){
//         console.log(2);
//     })
//     console.log(4);
// })
//输出结果为：1423

setTimeout(function C(){
    console.log(3);
},0);

process.nextTick(function A(){
    console.log(1);
    setTimeout(function(){
        process.nextTick(function B(){
            console.log(2);
        })
    })
    console.log(4);
})

//输出结果为：1432