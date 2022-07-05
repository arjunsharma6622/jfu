const router = require("express").Router()
const Store = require("../Models/Store")

router.get("/store_data", async (req, res) => {
    const store = await Store.find().sort({"storeName" : 1})
    try{
        res.status(200).json(store)
    }
    catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})


router.post("/register", async (req, res) => {

    const newStore = new Store({

        storeName : req.body.storeName,
        landmark : req.body.landmark,
        place : req.body.place,
        city_pin : req.body.city_pin,
        contact_1 : req.body.contact_1,
        contact_2 : req.body.contact_2,
        Coordinates : req.body.Coordinates
    })

    try{
        const store = await newStore.save()
        res.status(200).json(store)
    }
    catch(err){
        res.status(500).json(err)
    }
}) 


router.delete("/:id", async (req, res) => {
    try{
        await Store.findByIdAndDelete(req.params.id)
        res.status(200).json("The store has been deleted")
    }
    catch(err){
        res.status(500).json(err)
    }
})


router.delete("/delete_stores", async (req, res) => {
    try{
        await Store.deleteMany()
        res.status(200).json("The stores have been deleted successfully")
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router