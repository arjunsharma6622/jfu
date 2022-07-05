const mongoose = require("mongoose")

const BannerSchema = new mongoose.Schema({
    banner : {type : String},
    destination : {type:String}
})

module.exports = mongoose.model('Banner', BannerSchema)