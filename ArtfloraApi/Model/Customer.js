const mongoose=require("mongoose")
const customerschema=mongoose.Schema({
    Customername:String,
    Customermobno:Number,
    Customeraddress:String,
    City:String,
    State:String,
    Pincode:Number,
    Email:String,
    Profile:String
})
module.exports=mongoose.model("Customer",customerschema)