const express = require('express')
const router = new express.Router()

const Death = require('../database/models/death')

// All deaths
router.get('/', async (req, res) => {

    const data = await Death.find()

    try {
        res.send({success: true, data: data})
    } catch {
        res.status(500).send({success: false, message: 'Server error'})
    }
})

// Death by id
// Death by victim
// Deaths by perpetrator
// Deaths by season
// Deaths by season and episode

module.exports = router