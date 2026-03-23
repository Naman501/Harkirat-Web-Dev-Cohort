const express=require('express')
const app=express()
const path=require('path')

const notes=[]
const users=[]

app.use(express.json())

app.post('/create',(req,res)=>{
const note=req.body.note
notes.push(note);
res.json({
    msg:"DONE"
})
})

app.get('/notes',(req,res)=>{
    res.json({
        notes
    })
})

app.get('/',(req,res)=>{
     res.sendFile(path.join(__dirname,'./frontend/index.html'))
})

app.post('/signup',(req,res)=>{
const {username,password}=req.body
const userExists=users.find(user=>user.username===username)

if(userExists){
    return res.status(400).json({
        message:"User with this username already exists."
    })
}

users.push({
    username,password
})

res.json({
    message:"You have signedup successfully"
})
})

app.post('/signin',(req,res)=>{
    const {username,password}=req.body

    const userExists=users.find(user=>user.username===username && user.password===password)

    if(!userExists){
        return res.status(403).json({
            message:"Invalid username or password"
        })
    }
})

app.listen(5000,()=>{
    console.log("Server running on port 5000")
})