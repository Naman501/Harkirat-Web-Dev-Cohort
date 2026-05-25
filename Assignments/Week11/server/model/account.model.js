const mongoose=require("mongoose")
const Schema = mongoose.Schema;

const accountSchema = new mongoose.Schema({
 balance:{
    type:Number,
    required:true
 },
 userId:{
    type: Schema.Types.ObjectId,
    ref:'User'
 }
})

const accountModel=mongoose.model("Account",accountSchema)

module.exports=accountModel