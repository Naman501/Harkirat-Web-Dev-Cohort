const express=require("express")
const app=express()

app.get('/',()=>{
    console.log("Hello")
})

app.listen(5000,()=>{
    console.log("Server running on port 5000")

})