const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const mongoose = require("mongoose")
const routers = require("./routers/routers.products.js")

//Some middleware to do some interesting stuff I have little clue about
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// Router
app.use("/api/products", routers)












const runServer = async (req, res) => {
    try{
        const dB = await mongoose.connect(process.env.MONGOOSE_API)
        console.log(`Connected to dB`)

        app.listen(3000, () => {
            console.log("We're fired up 🔥")
        })
    }catch(error){
        console.log(error.message)
    }
    
}

runServer()





