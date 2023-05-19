const mongoose = require("mongoose")

const orderschema = mongoose.Schema({
    Orderdate: { type: Date, default: new Date() },
    Orderamount: Number,
    OrderItems: [{ Art: { type: mongoose.Schema.Types.ObjectId, ref: "ArtWork" }, qty: Number }],
    Artistid: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist' },
    Customerid: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    Orderstatus: String

})

module.exports = mongoose.model("Order", orderschema)