const express = require('express')
const router = new express.Router

const sendEnquiry = require('../emails/sendEnquiry.js')


router.post('/sendEnquiry', async (req, res) => {
    try {
        await sendEnquiry(req.body)
        res.status(200).send()
    } catch (e) {
        res.status(400).send(e)
    }
})


module.exports = router