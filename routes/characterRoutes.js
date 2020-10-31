const express = require('express')
const router = new express.Router({ mergeParams: true })

const Characters = require('../data/characters')

/**
 Return: All characters
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

/**
 Return: Character by id
 URI: domain/characters/{id}
 **/
router.get('/:id', (req, res) => {
    const { id } = req.params
    // return undefined if 'id' passed, works well if hardcoded variable passed
    const data = Characters.find((el) => el.id === id)

    try {

        res.send({success: true, data: data})

    } catch {
        res.status(500).send({success: false, message: 'Server error'})
    }
})

/**
 Return: Character by name or nickname
 URI: domain/characters/{name}
 **/

/**
 Return: Characters by clan
 URI: domain/characters/{clan}
 **/

/**
 Return: Characters by status
 URI: domain/characters/{deceased || alive}
 **/

/**
 Return: Characters by season
 URI: domain/characters/season/{integer}
 **/


module.exports = router