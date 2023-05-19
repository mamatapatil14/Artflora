const mongoose=require("mongoose")
const userschema=mongoose.Schema({
    Username:String,
    Useremailid:String,
    Userpassword:String,
    Usermobno:Number,
    Usertype:String
})
module.exports=mongoose.model("User",userschema)