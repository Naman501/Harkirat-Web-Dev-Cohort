const express=require("express")
const app=express()
const path=require("path")

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))
})

// => /sum?a=1&b=2 =>Query params
app.get('/sum',(req,res)=>{
   const a=parseFloat(req.query.a)
   const b=parseInt(req.query.b)

   sum=a+b;
   return res.status(200).json({
    msg:"Sum",
    ans:sum
   })
})

app.get('/multiply/:a/:b',(req,res)=>{
const x=parseFloat(req.params.a)
const y=parseFloat(req.params.b)

const multiply =x*y

return res.json({
    msg:"params multiply",
    ans:multiply
})
})

app.get('/div',(req,res)=>{
   const a=parseFloat(req.query.a)
   const b=parseInt(req.query.b)

  let divide=a/b;
   return res.status(200).json({
    msg:"Divide",
    ans:divide
   })
})

app.get('/dummy',(req,res)=>{
    res.send('<html><b>WELCOME CALC</b></html>')
})

app.get("/sub/:a/:b",(req,res)=>{
    const{ a,b}=req.params

    const x=parseInt(a)
    const y=parseInt(b)

    const sub=x-y

  return  res.json({
        ans:sub
    })
})

app.listen(5000,()=>{
    console.log("Server running on port 5000")

})