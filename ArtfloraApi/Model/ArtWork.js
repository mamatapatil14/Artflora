const mongoose=require("mongoose")
const Artist = require("./Artist")
const artworkschema=mongoose.Schema({
    Artwokname:String,
    Artworktype:String,
    Artworkimage:String,
    ArtworkPrice:Number,
    Artistid:{type:mongoose.Schema.Types.ObjectId,ref:'Artist'},
    Artworkframesize:String,
    Artworkcnvastype:String
})

module.exports=mongoose.model("ArtWork",artworkschema)