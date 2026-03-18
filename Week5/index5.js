let p = new Promise((resolve)=>{
    resolve("9")
    resolve("10")
    resolve("11")
})

p.then((data)=>{
    console.log("PROMISE RESOLVED "+ data)
})

