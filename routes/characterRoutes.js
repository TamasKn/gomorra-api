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
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const data = await Characters.find((el) => el.id === parseInt(id))

    try {
        if(data){
            res.send({success: true, data: data})
        } else {
            res.status(401).send({success: false, message: 'No entry with this ID'})
        }

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