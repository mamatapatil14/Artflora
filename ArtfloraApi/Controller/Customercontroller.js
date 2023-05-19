const Customer = require("../Model/Customer")

exports.AddCustomer = (req, res) => {
    const custobj = new Customer({
        Customername: req.body.customername,
        Customermobno: req.body.customermobno,
        Customeraddress: req.body.customeaddress,
        City: req.body.city,
        State: req.body.state,
        Pincode: req.body.pincode,
        Email:req.body.email,
        Profile: req.body.profile
    })
    custobj.save()
        .then((result)=>{
            res.status(200).json(result)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })

}

exports.AllCustomer=(req,res)=>{
    Customer.find()
        .then((result)=>{
            res.status(200).json(result)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
}

exports.UpdateCustomer=(req,res)=>{
    Customer.findByIdAndUpdate(
        {_id:req.body.id},
        {
            Customeraddress:req.body.customeraddress,
            City:req.body.city,
            Pincode:req.body.pincode,
            State:req.body.state
        },
        {new:true}
    ).then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
}

exports.Customerbyid=(req,res)=>{
    Customer.findById({_id:req.body.id})
        .then((result)=>{
            res.status(200).json(result)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
}