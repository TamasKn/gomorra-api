const express = require('express')
const router = new express.Router()

const Deaths = require('../data/deaths')

/**
 Route: All deaths
 URI: domain/deaths/
 **/
router.get('/', async (req, res) => {

    const data = Deaths

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