const { request, response } = require('express')
const express = require('express')
const routes = require('./routes/main')
const hbs = require('hbs')
const mongoose = require('mongoose')

const app = express()

app.use('/static', express.static("public"))
app.use('', routes)

app.set('view engine', 'hbs')
app.set('views', 'views')
hbs.registerPartials("views/partials")

mongoose.connect("mongodb://localhost/admin", () => {
    console.log("Successfully connected to the database.")
})

app.get("/", (request, response) => {
    response.send("This is data from server")
})

app.listen(process.env.PORT | 5556, () => {
    console.log("Server started")
})