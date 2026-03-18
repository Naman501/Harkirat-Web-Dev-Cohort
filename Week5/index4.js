const fs=require("fs")

// const p=new Promise((resolve,reject)=>reject)
// console.log(p)

function fsReadFilePromise(fileName,encoding){
    return new Promise(function(resolve,reject){
        fs.readFile(fileName,encoding,function(err,data){
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

fsReadFilePromise("abcd.txt","utf-8")
.then(
    function(dataa){
        console.log(dataa)
    }
)
.catch(
    function(err){
        console.log(err)
    }
)



function setTimeoutPromise(delay){
return new Promise(function(resolve,reject){ 
setTimeout(()=>{
   resolve()
},delay)
})
}

setTimeoutPromise(4000)
.then(function(){
    console.log("4_NAMAN")
})

