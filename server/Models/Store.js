const mongoose = require("mongoose")


const StoreSchema = new mongoose.Schema({
    "storeName" : {type : String},
    "landmark" : {type : String},
    "place" : {type : String},
    "city_pin" : {type : String},
    "contact_1" : {type : String},
    "contact_2" : {type : String},
    "Coordinates" : {type : Array}
})


module.exports = mongoose.model("Store", StoreSchema)