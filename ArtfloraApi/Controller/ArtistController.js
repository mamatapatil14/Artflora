const Artist = require("../Model/Artist")

exports.Addartist = (req, res) => {
    const artistobj = new Artist({
        Artistfullname: req.body.artistfullname,
        Artistage: req.body.artistage,
        Artistaddress: req.body.artistaddress,
        City: req.body.city,
        State: req.body.state,
        Pincode: req.body.pincode,
        Artistadharcard: req.body.artistadharcard,
        Artisthandicapcer: req.body.artisthandicapcer,
        Artistprofile: req.body.artistprofile,
        Isverified: req.body.isverified
    })

    artistobj.save()
        .then((result)=>{
            res.status(200).json(result)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
}

exports.AllArtist=(req,res)=>{
    Artist.find()
        .then((result)=>{
            res.status(200).json(result)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
}

exports.UpdateArtist=(req,res)=>{
    Artist.findByIdAndUpdate(
        {_id:req.body.id},
        {
            Artistaddress:req.body.artistaddress,
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

exports.ArtistDeleteById=(req,res)=>{
    Artist.findByIdAndDelete(
        {_id:req.body.id}
    ).then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
}

exports.updateverify=(req,res)=>{
    Artist.findByIdAndUpdate(
        {_id:req.body.id},
        {Isverified:req.body.isverified}
    ).then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).json(err)
    });
}