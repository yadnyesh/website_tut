const express = require('express')
const { route } = require('express/lib/application')
const res = require('express/lib/response')

const routes = express.Router()

routes.get("/", (req, res) => {
    res.send("This message is served from routes")
})

routes.get("/gallery", (req, res) => {
    res.send("This message is served from gallery")
})

module.exports=routes