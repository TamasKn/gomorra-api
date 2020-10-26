const express = require('express')
const router = new express.Router()

const Characters = require('../database/models/character')

// All characters
router.get('/', async (req, res) => {
    const data = await Characters.find()

    try {
        res.send({success: true, data: data})
    } catch {
        res.status(500).send({success: false, message: 'Server error'})
    }
})

// Character by name or nickname
// Character by id
// Characters by clan
// Characters by status
// Characters by season

module.exports = router