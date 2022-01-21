const { request, response } = require("express")
const express = require("express")
const routes = require('./routes/main')

const app = express()

app.use('', routes)

app.get("/", (request, response) => {
    response.send("This is data from server")
})

app.listen(process.env.PORT | 5556, () => {
    console.log("Server started")
})