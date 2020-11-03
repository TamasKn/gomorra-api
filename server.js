const express = require('express'),
    path = require("path"),
    logger = require("morgan"),
    bodyParser = require("body-parser"),
    cors = require('cors'),
    rateLimit = require('express-rate-limit'),

    app = express(),
    PORT = process.env.PORT || 4000;

require("dotenv").config({path: path.join(__dirname, '.env')})

const characterRoutes = require('./routes/characterRoutes'),
    episodeRoutes = require('./routes/episodeRoutes'),
    deathRoutes = require('./routes/deathRoutes');


/** Middlewares **/

app.use(logger(":date[iso]"))
app.use(logger("dev"))
app.use(logger(":user-agent"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({credentials: true, origin: '*'}))

app.enable('trust proxy')

// Request limiter
const limiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 24 hrs
    max: 3000,
    message: 'API is limited to 3000 requests per day. You can try again after 24 hours.',
    headers: true,
});

app.use(limiter);

app.use(express.static(__dirname + '/pictures'));

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