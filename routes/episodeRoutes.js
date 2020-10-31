const express = require('express')
const router = new express.Router()

const Episodes = require('../data/episodes')

/**
 Route: All episodes
 URI: domain/episodes/
 **/
router.get('/', async (req, res) => {
    const data = Episodes

    try {
        res.send({success: true, data: data})
    } catch {
        res.status(500).send({success: false, message: 'Server error'})
    }
})

// Episode by id
// All episodes by season
// Episode by season and episode
// Episode by title

module.exports = router