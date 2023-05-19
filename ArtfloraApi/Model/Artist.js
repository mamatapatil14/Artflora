const mongoose=require("mongoose")
const artistschema=mongoose.Schema({
    Artistfullname:String,
    Artistage:Number,
    Artistaddress:String,
    City:String,
    State:String,
    Pincode:Number,
    Artistadharcard:String,
    Artisthandicapcer:String,
    Artistprofile:String,
    Isverified:Boolean
})
module.exports=mongoose.model("Artist",artistschema)