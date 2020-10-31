const express = require('express')
const router = new express.Router()

const Characters = require('../data/characters')

/**
 Route: All characters
 URI: domain/characters/
 **/
router.get('/', async (req, res) => {
    const data = Characters

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