const express=require("express")
require("dotenv").config()
const connectDB=require("./config/db")
const app=express()
const accountRoutes=require("./routes/account.routes")
const userRoutes=require("./routes/user.routes")
const PORT=process.env.PORT || 6000
const cors=require("cors")

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send("Hello")
})
app.use(cors({ origin: 'http://localhost:5173' }))

app.use('/api/v1',userRoutes)
app.use('/api/v1',accountRoutes)




app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})