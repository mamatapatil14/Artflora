module.exports=((app)=>{
    const customercontrol=require("../Controller/Customercontroller")
    app.post("/AddCustomer",customercontrol.AddCustomer)
    app.get("/AllCustomer",customercontrol.AllCustomer)
    app.post("/UpdateCustomer",customercontrol.UpdateCustomer)
    app.post("/Customerbyid",customercontrol.Customerbyid)
})