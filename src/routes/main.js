const express = require('express')
const { route } = require('express/lib/application')
const res = require('express/lib/response')
const async = require('hbs/lib/async')
const Detail = require('../models/Detail')

const routes = express.Router()

routes.get("/", async(req, res) => {
    const details = await Detail.findOne({"_id":"61ed73e69ff9fc70a1addb92"})
    console.log(details)
    res.render("index", {
        details: details
    })
})

routes.get("/gallery", (req, res) => {
    res.render("gallery")
})

module.exports=routes