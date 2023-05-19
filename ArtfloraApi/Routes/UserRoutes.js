module.exports=((app)=>{
    const usercontrol=require("../Controller/UserController")
    app.get("/Alluser",usercontrol.Alluser)
    app.post("/Adduser",usercontrol.Adduser)
    app.post("/Userbyid",usercontrol.Userbyid)
    app.post("/Userbytype",usercontrol.Userbytype)
    app.post("/Userbyemailandpass",usercontrol.Userbyemailandpass)
})