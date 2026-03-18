const fs=require('fs')


function fsReadFilePromisifeid(filePath,encoding,callback){

}

function cb(err,result){
    if(err) console.log("ERROR")
        console.log(result)
}

fs.readFile("aaa.txt","utf-8",cb)

setTimeout(function(){
    console.log('hello')
    setTimeout(function(){
        console.log('hello2')
        setTimeout(() => {
            console.log('Heelo3')
        }, 3000);
    },2000)
},3000)

fetch('https://api.github/users/Naman501').then(
    r=>r.json()
).then(d=>

    console.log(d)
)