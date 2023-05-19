const express=require("express")
const mongoose=require("mongoose")
const bodyparser=require("body-parser")
const cors=require("cors")
const path=require("path")
const multer=require("multer")

//Create an app
const app=express()

//Use app
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

//Conecting Database

mongoose.connect("mongodb://127.0.0.1:27017/ArtFloraDatabase",{useNewUrlParser:true})
    .then((result)=>{
        console.log("Database Connected")    
    })
    .catch((err)=>{
        console.log("Dtabase not connected")
    })



//path of file when page requested
require("./Routes/ArtistRoutes")(app)
require("./Routes/CustomerRoutes")(app)
require("./Routes/ArtworkRoutes")(app)
require("./Routes/OrderRoutes")(app)
require("./Routes/UserRoutes")(app)




//File storage
const imagestore=multer.diskStorage({
    destination:"Image",
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }    
})

//Image Upload

const imageupload=multer({
    storage:imagestore,
    filefilter(req,file,cb){
      if(!file.originalname.match(/\.(png|jpg|jpeg|jfif)$/)) {
        return cb(new Error("please upload valid image.."))
    } 
      cb(undefined,true)   
    }    
})

//Image post request

app.post("/UploadImage",
    imageupload.single("image"),
    (req,res)=>{
        res.status(200).json({filepath:"/images/".concat(req.file.filename),uploaded:true})
    },
    (err,req,res,next)=>{
        res.status(400).send({error:err.message})
    }
)


app.get("/",(req,res)=>{
    res.send("Home page")
})

app.use("/images",express.static("Image"))


//Start server

app.listen(5000,()=>{
    console.log("Server Started")    
})