console.log('NAMAN')

const fs=require("fs")

fs.readFile("abc.txt","utf-8",function(err,d){
    if(err){
        console.log("Error ho gaya")
    }else{
        console.log(d)
    }
})

function outer(x,y){
    return inner
}

function inner(){
    const hello=outer(function a(){
        console.log("a")
    },function b(){
        console.log("b")
    })
    return hello
}

console.log(inner())