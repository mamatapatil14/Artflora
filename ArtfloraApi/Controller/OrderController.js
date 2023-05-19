const Order = require("../Model/Order")

exports.Addorder = (req, res) => {
    const ordobj = new Order({
        Orderdate:req.body.orderdate,
        Orderamount:req.body.orderamount ,
        OrderItems:req.body.orderitems ,
        Artistid:req.body.artistid,
        Customerid:req.body.customerid ,
        Orderstatus: req.body.orderstatus
    })

    ordobj.save()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
        })
}

exports.Allorder=(req,res)=>{
    Order.find()
        .populate("Customerid")
        .populate(
            {path:'OrderItems',
            populate:[{
                path:'Art',
                populate:{
                    path:'Artistid',
                    model:'Artist'
                }
            }]
        })
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
        })
}

exports.Orderbyartistid=(req,res)=>{
    const artid=req.body.artistid
    Order
        .where("Artistid")
        .equals(artid)
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.Ordrbycustomerid=(req,res)=>{
    const cusid=req.body.customerid
    Order
        .where("Customerid")
        .equals(cusid)
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.Orerbystatus=(req,res)=>{
    const status=req.body.orderstatus
    Order   
        .where("Orderstatus")
        .equals(status)
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.Updatestatus=(req,res)=>{
    Order.findByIdAndUpdate(
        {_id:req.body.id},
        {Orderstatus:req.body.orderstatus},
        {new:true}
    ).then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).json(err)
    });
}