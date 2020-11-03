const express = require('express')
const router = new express.Router()
const { SendData, BadRequest, ServerError} = require('../utils/responses')
const { Helper } = require('../utils/helper')

const Deaths = require('../data/deaths')

/**
 Return: All deaths
 URI: domain/deaths/
 **/
router.get('/', (req, res) => {

    const data = Deaths

    try {
        SendData(res, data)
    } catch {
        ServerError(res)
    }
})

/**
 Return: Death by id
 URI: domain/deaths/id/{id}
 **/
router.get('/id/:id', async (req, res) => {
    const { id } = req.params

    try {
        const data = await Deaths.find((el) => el.id === parseInt(id))
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
 Return: Death by victim
 URI: domain/deaths/victim/{name}
 **/
router.get('/victim/:name', async (req, res) => {
    const { name } = req.params
    const query = Helper.Sanitize(name)

    try{
        const data = await Deaths.filter( el => {
            if(Helper.Sanitize(el.victim).includes(query)) {

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
 Return: Deaths by perpetrator
 URI: domain/deaths/perpetrator/{name}
 **/
router.get('/perpetrator/:name', async (req, res) => {
    const { name } = req.params
    const query = Helper.Sanitize(name)

    try{
        const data = await Deaths.filter( el => {
            if(Helper.Sanitize(el.perpetrator).includes(query)) {

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
 Return: Deaths by season
 URI: domain/deaths/season/{integer}
 **/
router.get('/season/:season', async (req, res) => {
    const { season } = req.params

    try{
        const data = await Deaths.filter( el => el.season === parseFloat(season))

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
 Return: Deaths by season and episode
 URI: domain/deaths/season/{integer}/episode/{integer}
 **/
router.get('/season/:season/episode/:episode', async (req, res) => {
    const { season, episode } = req.params

    try{
        const data = await Deaths.filter( el => el.season === parseFloat(season) && el.episode === parseFloat(episode))

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