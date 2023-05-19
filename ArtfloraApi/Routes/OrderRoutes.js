module.exports=((app)=>{
    const ordercontrol=require("../Controller/OrderController")
    app.get("/Allorder",ordercontrol.Allorder)
    app.post("/Addorder",ordercontrol.Addorder)
    app.post("/Orderbystatus",ordercontrol.Orerbystatus)
    app.post("/Updatestatus",ordercontrol.Updatestatus)
    app.post("/Orderbyartistid",ordercontrol.Orderbyartistid)
    app.post("/Orderbtcustomerid",ordercontrol.Ordrbycustomerid)
})
