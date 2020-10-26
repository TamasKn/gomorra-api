const episodes = require('../raw/episodes')
const characters = require('../raw/characters')
const deaths = require('../raw/deaths')

const Episodes = require('../database/models/episode')
const Characters = require('../database/models/character')
const Deaths = require('../database/models/death')

function creator() {
    for(let item of characters) {
        Characters.create({
            id: item.id,
            name: item.name,
            nickname: item.nickname,
            occupation: item.occupation,
            clan: item.clan,
            picture: item.picture,
            status: item.status,
            seasons: item.seasons,
            actor: item.actor
        })
    }
}

module.exports = creator
