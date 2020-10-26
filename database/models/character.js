const mongoose = require('mongoose')

const CharacterSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            unique: true,
            required: true
        },
        name: String,
        nickname: String,
        occupation: String,
        clan: String,
        picture: String,
        status: String,
        seasons: [Number],
        actor: String
    }
)

const Character = mongoose.model('Character', CharacterSchema)

module.exports = Character

