const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const cors = require("cors")

dotenv.config()

//Variables
const PORT = process.env.PORT || 8000
const mongoDBUrl = process.env.mongoDBUrl

//middlewares
app.use(cors())
app.use(bodyParser.json())

//routes
const storeRoutes = require("./routes/StoreRoutes")
app.use("/api/store", storeRoutes)
const bannerRoutes = require("./routes/BannerRoutes")
app.use("/api/banner", bannerRoutes)


//connecting to Database
mongoose.connect(mongoDBUrl, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => {console.log("DB connected")})
.catch((err) => {`DB Error : ${err}`})






//listening to the server
app.listen(PORT , (req, res) => {
    console.log(`The server is running on PORT ${PORT}`)
})