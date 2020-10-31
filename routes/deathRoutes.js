const express = require('express')
const router = new express.Router()

const Deaths = require('../data/deaths')

/**
 Return: All deaths
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

/**
 Return: Death by id
 URI: domain/deaths/{id}
 **/

/**
 Return: Death by victim
 URI: domain/deaths/search?victim={string}
 **/

/**
 Return: Deaths by perpetrator
 URI: domain/deaths/search?perpetrator={string}
 **/

/**
 Return: Deaths by season
 URI: domain/deaths/season/{integer}
 **/

/**
 Return: Deaths by season and episode
 URI: domain/deaths/search?season={integer}&episode={integer}
 **/


module.exports = router