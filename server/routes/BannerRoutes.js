const router = require("express").Router()
const Banner = require("../Models/Banner")
const multer = require("multer")

const date = new Date()


//note: multer file uploading
const storage = multer.diskStorage({
    
    destination : (req, file, cb) => {
        cb(null, "./public/Images")
    },
    filename : (req, file, cb) => {
        cb(null, date.getDate()+"_"+date.getHours()+"_"+date.getMinutes()+"_"+date.getSeconds() + "_" +file.originalname)
    }

})

const upload = multer({storage : storage})

router.post("/upload", upload.single("image"), async (req, res) => {
    const date = new Date()
    const file_name = date.getDate()+"_"+date.getHours()+"_"+date.getMinutes()+"_"+req.file.originalname
    try{
        const banner_data = new Banner({
            banner : file_name,
            destination : req.file.destination
        })
        const saved_details = await banner_data.save()

        res.status(200).json(saved_details)
    }

    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router