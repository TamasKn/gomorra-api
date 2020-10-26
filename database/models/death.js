const mongoose = require('mongoose')

const DeathSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            unique: true,
            required: true
        },
        victim: String,
        cause: String,
        perpetrator: String,
        season: Number,
        episode: Number
    }
)

const Death = mongoose.model('Death', DeathSchema)

module.exports = Death