const User = require("../Model/User")

exports.Adduser = (req, res) => {
    const userobj = new User({
        Username: req.body.username,
        Useremailid: req.body.useremailid,
        Userpassword:req.body.userpassword,
        Usermobno: req.body.usermobno,
        Usertype: req.body.usertype
    })
    userobj.save()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.Alluser=(req,res)=>{
    User.find()
        .then((result) => {
             res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
         });
}

exports.Userbyid=(req,res)=>{
    User.findById({_id:req.body.id})
        .then((result) => {
             res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.Userbytype=(req,res)=>{
    const type=req.body.usertype
    User.find({Usertype:type})
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
}

exports.Userbyemailandpass=(req,res)=>{
    const email=req.body.useremailid
    const password=req.body.userpassword
    User.find({Useremailid:email,Userpassword:password})
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
}