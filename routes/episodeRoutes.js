const express = require('express')
const router = new express.Router()
const { SendData, BadRequest, ServerError} = require('../utils/responses')
const { Helper } = require('../utils/helper')

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
 Return: All episodes by season
 URI: domain/episodes/season/{integer}
 **/
router.get('/season/:season', async (req, res) => {
    const { season } = req.params

    try{
        const data = await Episodes.filter( el => el.season === parseFloat(season))

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
 Return: Episode by season and episode
 URI: domain/episodes/season/{integer}/episode/{integer}
 **/
router.get('/season/:season/episode/:episode', async (req, res) => {
    const { season, episode } = req.params

    try{
        const data = await Episodes.filter( el => el.season === parseFloat(season) && el.episode === parseFloat(episode))

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
 Return: Episode by title
 URI: domain/episodes/title/{string}
 **/
router.get('/title/:title', async (req, res) => {
    const { title } = req.params
    const query = Helper.Sanitize(title)

    try{
        const data = await Episodes.filter( el => Helper.Sanitize(el.title).includes(query))

        if(data.length !== 0){
            SendData(res, data)
        } else {
            BadRequest(res)
        }

    } catch {
        ServerError(res)
    }
})


module.exports = router