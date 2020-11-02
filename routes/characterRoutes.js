const express = require('express')
const router = new express.Router({ mergeParams: true })
const { SendData, BadRequest, ServerError} = require('../utils/responses')
const { Helper } = require('../utils/helper')

const Characters = require('../data/characters')

/**
 Return: All characters
 URI: domain/characters/
 **/
router.get('/', async (req, res) => {

    try {
        const data = Characters
        SendData(res, data)
    } catch {
        ServerError()
    }
})

/**
 Return: Character by id
 URI: domain/characters/{id}
 **/
router.get('/id/:id', async (req, res) => {
    const { id } = req.params

    try {
        const data = await Characters.find((el) => el.id === parseInt(id))
        if(data){
            SendData(res, data)
        } else {
            BadRequest(res)
        }
    } catch {
        ServerError(res)
    }
})

/**
 Return: Character by name or nickname
 URI: domain/characters/{name/nickname}
 **/
router.get('/name/:name', async (req, res) => {
    const { name } = req.params
    const query = Helper.Sanitize(name)

    try{
        const data = await Characters.filter( el => {
            if(Helper.Sanitize(el.name).includes(query) ||
                Helper.Sanitize(el.nickname).includes(query)) {

                return el
            }
        })

        if(data.length !== 0){
            SendData(res, data)
        } else {
            BadRequest(res)
        }

    } catch {
        ServerError(res)
    }
})

/**
 Return: Characters by clan
 URI: domain/characters/clan/{clan}
 **/
router.get('/clan/:clan', async (req, res) => {
    const { clan } = req.params
    const query = Helper.Sanitize(clan)

    try{
        const data = await Characters.filter( el => Helper.Sanitize(el.clan).includes(query))

        if(data.length !== 0){
            SendData(res, data)
        } else {
            BadRequest(res)
        }

    } catch {
        ServerError(res)
    }
})

/**
 Return: Characters by status
 URI: domain/characters/{deceased || alive}
 **/

/**
 Return: Characters by season
 URI: domain/characters/season/{integer}
 **/


module.exports = router