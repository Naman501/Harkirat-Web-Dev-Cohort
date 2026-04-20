// username, password
// organisations
// boards
// issues

let USERS_ID=1;
let ORGANIZATION_ID=1;
let BOARDS_ID=1;
let ISSUES_ID=1;


const express=require("express")
const app=express();

const users=[];
const organisations=[];
const boards=[];
const issues=[];

const jwt=require("jsonwebtoken")

app.use(express.json())
// Create
app.post('/signup',(req,res)=>{
const {username,password}=req.body
if(!username || !password){
    return res.status(201).json({
        message:"Email and password are required."
    })
}
const userExists=users.find(user=>user.username==username)
if(userExists){
    return res.status(411).json({
        message:"User with this email already exists"
    })
}
users.push({username,
    password,
    id:USERS_ID++
})

return res.status(200).json({
    message:"User signed-up successfully!"
})

})

app.post('/signin',(req,res)=>{
const {username,password}=req.body

const userExists=users.find(user=>user.username==username && user.password===password)

if(!userExists){
return res.status(403).json({
    message:"Invalid username or password"
})
}

const token=jwt.sign({
    userId:userExists.id
},"secret")

res.json({
    message:"SIGN-IN",
    token
})

})

app.post('/organization',(req,res)=>{

})

app.post('/add-memeber-to-organization',(req,res)=>{})


app.post('/board',(req,res)=>{

})

app.post('/issue',(req,res)=>{

})

// Read

app.get('/boards',(req,res)=>{

})


app.get('/issues',(req,res)=>{

})

app.get('/issues',(req,res)=>{

})

app.get('/members',(req,res)=>{

})

// Update
app.put('/issues',(req,res)=>{

})

// Delete

app.delete('/members',(req,res)=>{
    
})

app.listen(5000,()=>{
    console.log('Server running on port 5000')
})
