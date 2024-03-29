const express = require("express")
const { createUser, doAuthorisation } = require("../service/api.service")
const route = express.Router()

route.post("/reg", async function (req, res) {
    try {
        const { email, pwd } = req.body
        await createUser(email, pwd)
        res.status(200).send("succes")
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.post("/auth", async function (req, res) {
    try {
        const { email, pwd } = req.body
        await doAuthorisation(email, pwd);
        res.status(200).send("succes")
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = route