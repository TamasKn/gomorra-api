const express = require('express')
const path = require("path")
require("dotenv").config({path: path.join(__dirname, '.env')})
const logger = require("morgan")
const bodyParser = require("body-parser")

const app = express()
const PORT = 4000

const characterRoutes = require('./routes/characterRoutes')
const episodeRoutes = require('./routes/episodeRoutes')
const deathRoutes = require('./routes/deathRoutes')


/** Middlewares **/

// Logger
app.use(logger(":date[iso]"))
app.use(logger("dev"))
app.use(logger(":user-agent"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


/** Routes **/
app.use('/characters', characterRoutes)
app.use('/episodes', episodeRoutes)
app.use('/deaths', deathRoutes)

app.get('/', (req, res) => {
    res.send('Gomorra API')
})

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`)
})