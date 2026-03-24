const express=require('express')
const app=express()
const path=require('path')
const jwt=require("jsonwebtoken")
const {authMiddleware}=require("./middleware")

const notes=[{username:"naman",note:"Sleep"}]
const users=[
  {  username:"naman",
    password:"1234567"
  }

]

app.use(express.json())

app.post('/create',authMiddleware,(req,res)=>{
   
const note=req.body.note
notes.push({note,username});
res.json({
    msg:"DONE"
})
})

app.get('/notes',authMiddleware,(req,res)=>{

    

    const userNotes=notes.filter(note=>note.username)
console.log(users)
    res.json({
        notes
    })
})

app.get('/',(req,res)=>{
     res.sendFile(path.join(__dirname,'./frontend/index.html'))
})

app.get('/signup',(req,res)=>{
     res.sendFile(path.join(__dirname,'./frontend/signup.html'))
})

app.get('/signin',(req,res)=>{
     res.sendFile(path.join(__dirname,'./frontend/signin.html'))
})

app.post('/signup',(req,res)=>{
const {username,password}=req.body
const userExists=users.find(user=>user.username===username)

  if (!username || !password) {
        return res.status(400).json({
            message: "Username and password are required"
        });
    }

if(userExists){
    return res.status(400).json({
        message:"User with this username already exists."
    })
}

users.push({
   username: username,password:password
})

return res.json({
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

//token

const token=jwt.sign({
    username:username
},"SECRET123456789")


res.json({
    token:token
})

})

app.listen(5000,()=>{
    console.log("Server running on port 5000")
})