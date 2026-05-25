const mongoose=require("mongoose")

require("dotenv").config()


async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("Database connected successfully")
        })
    } catch (error) {
        console.error("Database connection error")
        throw new Error("Error in establishing DB connection.")
    }
}

module.exports=connectDB