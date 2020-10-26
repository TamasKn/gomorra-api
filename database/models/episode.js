const mongoose = require('mongoose')

const EpisodeSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            unique: true,
            required: true
        },
        title: String,
        season: Number,
        episode: Number
    }
)

const Episode = mongoose.model('Episode', EpisodeSchema)

module.exports = Episode