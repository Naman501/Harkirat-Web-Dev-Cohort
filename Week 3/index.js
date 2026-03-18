const fs=require("fs");
const { Readline } = require("readline/promises");

const contents=fs.readFileSync("a.txt","utf-8");

console.log(contents)

const sum=(a,b)=>{
    return a+b;
}
const sub=(b,a)=>{
    return a-b
}
function dotask(a,b,whatToDo){
   return whatToDo(a,b)
}
const ans=dotask(1,2,sum)
const ans2=dotask(1,2,sub)
console.log(ans," ",ans2)

// let a=Readline('hello1')
// let b=Readline('hello2')
// console.log(a+b)


let counter=0;
function call(){
    console.log(counter);
    counter+=1;
}

setInterval(call,1000)

let e=0
for(let i=0;i<300;i++){
    e=e+i;
}
    console.log(e)
