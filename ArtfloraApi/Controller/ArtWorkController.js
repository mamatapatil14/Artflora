const ArtWork = require("../Model/ArtWork")

exports.Addartwork = (req, res) => {
    const artworkobj = new ArtWork({
        Artwokname: req.body.artworkname,
        Artworktype: req.body.artworktype,
        Artworkimage: req.body.artworkimage,
        ArtworkPrice: req.body.artworkprice,
        Artistid: req.body.artistid,
        Artworkframesize: req.body.artworkframesize,
        Artworkcnvastype: req.body.artworkcanvastype
    })

    artworkobj.save()
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

exports.Allartwork = (req, res) => {
    ArtWork.find()
        .populate("Artistid")
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json(err)
        })

}

exports.Artworkbyartistid = (req, res) => {
    const artid=req.body.artistid
    ArtWork
        .where("Artistid")
        .equals(artid)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

exports.Artworkbytype = (req, res) => {
    const type = req.body.artworktype
    ArtWork
        .where("Artworktype")
        .equals(type)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

exports.Artworkbyid = (req, res) => {
    ArtWork.findById({ _id: req.body.id })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

exports.Artworkbyframesize = (req, res) => {
    const framesize = req.body.artworkframesize
    ArtWork
        .where("Artworkframesize")
        .equals(framesize)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

exports.Artworkbycanvastype = (req, res) => {
    const canvastype = req.body.artworkcanvastype
    ArtWork
        .where("Artworkcnvastype")
        .equals(canvastype)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

exports.Updateartworkprice = (req, res) => {
    ArtWork.findByIdAndUpdate(
        { _id: req.body.id },
        { ArtworkPrice: req.body.artworkprice },
        { new: true }

    ).then((result) => {
        res.status(200).json(result)
    })
        .catch((err) => {
            res.status(500).json(err)
        })
}

exports.Deletebyidartwork = (req, res) => {
    ArtWork.findByIdAndDelete({ _id: req.body.id })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

exports.Artworkbetnpricerange=(req,res)=>{
    const first=req.body.firstprice
    const last=req.body.lastprice
    ArtWork
        .where("ArtworkPrice")
        .gte(first)
        .where("ArtworkPrice")
        .lte(last)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json(err)
        })

module.exports=mongoose.model("ArtWork",artworkschema)
}

