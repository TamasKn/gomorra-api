const express = require('express')
const router = new express.Router()

const Episodes = require('../data/episodes')

/**
 Return: All episodes
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

/**
 Return: Episode by id
 URI: domain/episodes/{id}
 **/

/**
 Return: All episodes by season
 URI: domain/episodes/season/{integer}
 **/

/**
 Return: Episode by season and episode
 URI: domain/episodes/search?season={integer}&episode={integer}
 **/

/**
 Return: Episode by title
 URI: domain/episodes/search?title={string}
 **/


module.exports = router