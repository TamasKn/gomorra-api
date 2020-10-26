const express = require('express')
const path = require("path")
require("dotenv").config({path: path.join(__dirname, '.env')})
const logger = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const PORT = 4000

const characterRoutes = require('./routes/characters')
const episodeRoutes = require('./routes/episodes')
const deathRoutes = require('./routes/deaths')

const mongoConnect = require('./database/mongo')

// Temporary data injector to DB
const creator = require('./raw/creator')

/** Middlewares **/

//Cross-Origin Resource Sharing
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

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
    mongoConnect()

    // creator()
})