// username, password
// organisations
// boards
// issues

const express=require("express")
const app=express();

const users=[];
const organisations=[];
const boards=[];
const issues=[];

// Create
app.post('/signup',(req,res)=>{

})

app.post('/signin',(req,res)=>{

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
