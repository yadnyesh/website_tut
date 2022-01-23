const { request, response } = require('express')
const express = require('express')
const routes = require('./routes/main')
const hbs = require('hbs')
const mongoose = require('mongoose')
const Detail = require("./models/Detail")

const app = express()

app.use('/static', express.static("public"))
app.use('', routes)

app.set('view engine', 'hbs')
app.set('views', 'views')
hbs.registerPartials("views/partials")

mongoose.connect("mongodb://localhost/admin", () => {
    console.log("Successfully connected to the database.")
    // Detail.create({
    //     brandName: "YotaByte Tech",
    //     brandIconUrl: "https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f7f9e5ecc6e0633ecbc0_logo-example3.svg",
    //     links: [
    //         {
    //             label: "Home",
    //             url: "/"
    //         },
    //         {
    //             label: "Services",
    //             url: "/services"
    //         },
    //         {
    //             label: "Gallery",
    //             url: "/gallery"
    //         },
    //         {
    //             label: "About",
    //             url: "/about"
    //         },
    //         {
    //             label: "Contact Us",
    //             url: "/contactus"
    //         }
    //     ]
    // })
})

app.get("/", (request, response) => {
    response.send("This is data from server")
})

app.listen(process.env.PORT | 5556, () => {
    console.log("Server started")
})