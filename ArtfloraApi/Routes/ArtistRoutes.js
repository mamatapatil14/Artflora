module.exports=((app)=>{
    const artistcontrol=require("../Controller/ArtistController")
    app.get("/AllArtist",artistcontrol.AllArtist)
    app.post("/AddArtist",artistcontrol.Addartist)
    app.post("/ArtistUpdate",artistcontrol.UpdateArtist)
    app.post("/ArtistDeleteById",artistcontrol.ArtistDeleteById)
    app.post("/Updateverify",artistcontrol.updateverify)

})