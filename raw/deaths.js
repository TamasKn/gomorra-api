const deaths = [
    {
        id: 1,
        victim: 'Toupé Collettore',
        cause: 'Multiple shots in the back',
        perpetrator: 'Conte hitman',
        season: 1,
        episode: 1
    },
    {
        id: 2,
        victim: 'Alfredo A\'Lisca',
        cause: 'Multiple shots through car window',
        perpetrator: 'Conte clan member',
        season: 1,
        episode: 1
    },
    {
        id: 3,
        victim: 'Conte clan member',
        cause: 'Shot in the chest and head',
        perpetrator: 'Ciro Di Marzio',
        season: 1,
        episode: 1
    },
    {
        id: 4,
        victim: 'Lino Centocapelli',
        cause: 'Multiple shots in the chest',
        perpetrator: 'Conte clan member',
        season: 1,
        episode: 1
    },
    {
        id: 5,
        victim: 'Aniello L\'Africano',
        cause: 'Shot in the head',
        perpetrator: 'Conte clan member',
        season: 1,
        episode: 1
    },
    {
        id: 6,
        victim: 'Attilio Diotallevi',
        cause: 'Shot in the chest',
        perpetrator: 'Conte clan member',
        season: 1,
        episode: 1
    },
    {
        id: 7,
        victim: 'Felice',
        cause: 'Shot in the chest and head',
        perpetrator: 'Ciro Di Marzio',
        season: 1,
        episode: 2
    },
    {
        id: 8,
        victim: 'Parisi\'s mistress',
        cause: 'Shot in the chest',
        perpetrator: 'Malammore',
        season: 1,
        episode: 2
    },
    {
        id: 9,
        victim: 'Augusto Parisi',
        cause: 'Multiple shots',
        perpetrator: 'Malammore',
        season: 1,
        episode: 2
    },
    {
        id: 10,
        victim: 'Renato Bolleta',
        cause: 'Fatal head trauma',
        perpetrator: 'Pietro Savastano',
        season: 1,
        episode: 2
    },
    {
        id: 11,
        victim: 'Pasqualino',
        cause: 'Hanged by the neck',
        perpetrator: 'Suicide',
        season: 1,
        episode: 3
    },
    {
        id: 12,
        victim: 'Multiple africans',
        cause: 'Shooting',
        perpetrator: 'Ciro Di Marzio, Malammore, Zecchinetta',
        season: 1,
        episode: 4
    },
    {
        id: 13,
        victim: 'Franco Musi',
        cause: 'Jumped out from his patio',
        perpetrator: 'Suicide by pressure of Immacolata',
        season: 1,
        episode: 5
    },
    {
        id: 14,
        victim: 'Enzo Giacobone',
        cause: 'Shot in the head',
        perpetrator: 'Suicide',
        season: 1,
        episode: 7
    },
    {
        id: 15,
        victim: 'Franco Martucci',
        cause: 'Shot in the back and neck',
        perpetrator: 'Malammore',
        season: 1,
        episode: 7
    },
    {
        id: 16,
        victim: 'Savastano dealer',
        cause: 'Car explosion',
        perpetrator: 'Unknown',
        season: 1,
        episode: 7
    },
    {
        id: 17,
        victim: 'Martone brothers',
        cause: 'Shot in the back',
        perpetrator: 'O\'Pisciavindola',
        season: 1,
        episode: 7
    },
    {
        id: 18,
        victim: 'Marta Giacobone',
        cause: 'Multiple shots in the chest',
        perpetrator: 'Unknown',
        season: 1,
        episode: 7
    },
    {
        id: 19,
        victim: 'Imma\'s Dog',
        cause: 'Shot',
        perpetrator: 'Gennaro Savastano',
        season: 1,
        episode: 7
    },
    {
        id: 20,
        victim: 'Mino Magliavacca',
        cause: 'Multiple shots in the chest',
        perpetrator: 'Gennaro Savastano',
        season: 1,
        episode: 8
    },
    {
        id: 21,
        victim: '4 staff member of Romano Car Salon',
        cause: 'Multiple shots in the chest',
        perpetrator: 'Ciro Di Marzio, Rosario O\'Nano',
        season: 1,
        episode: 9
    },
    {
        id: 22,
        victim: 'Antonino Russo',
        cause: 'Multiple shots in the chest',
        perpetrator: 'Daniele',
        season: 1,
        episode: 9
    },
    {
        id: 23,
        victim: 'Manu',
        cause: 'Tortured and shot',
        perpetrator: 'Ciro Di Marzio',
        season: 1,
        episode: 9
    },
    {
        id: 24,
        victim: 'Daniele',
        cause: 'Shot in the head',
        perpetrator: 'Salvatore Conte',
        season: 1,
        episode: 10
    },
    {
        id: 25,
        victim: 'Massimo',
        cause: 'Shot and bleed',
        perpetrator: 'Salvatore Conte',
        season: 1,
        episode: 10
    },
    {
        id: 26,
        victim: 'Zecchinetta',
        cause: 'Shot in the head',
        perpetrator: 'O\'Track',
        season: 1,
        episode: 11
    },
    {
        id: 27,
        victim: 'Tonino Spiderman',
        cause: 'Multiple shots in the chest',
        perpetrator: 'O\'Pisciavindola',
        season: 1,
        episode: 11
    },
    {
        id: 28,
        victim: 'Immacolata Savastano',
        cause: 'Multiple shots in the back',
        perpetrator: 'Hitman of Ciro',
        season: 1,
        episode: 11
    },
    {
        id: 29,
        victim: 'Marina',
        cause: 'Shot or trauma in the head',
        perpetrator: 'Rosario O\'Nano',
        season: 1,
        episode: 11
    },
    {
        id: 30,
        victim: 'Baroncino',
        cause: 'Shot in the head',
        perpetrator: 'Pino',
        season: 1,
        episode: 12
    },
    {
        id: 31,
        victim: 'O\'Pisciavindola',
        cause: 'Shot in the back and head',
        perpetrator: 'Hitman of Genny',
        season: 1,
        episode: 12
    },
    {
        id: 32,
        victim: 'O\'Zingaro',
        cause: 'Multiple shots',
        perpetrator: 'O\'Cardillo',
        season: 1,
        episode: 12
    },
    {
        id: 33,
        victim: 'O\'Fringuello',
        cause: 'Multiple shots',
        perpetrator: 'O\'Cardillo',
        season: 1,
        episode: 12
    },
    {
        id: 34,
        victim: 'Neymar (Diego\'s Dog )',
        cause: 'Multiple shots',
        perpetrator: 'O\'Pop',
        season: 1,
        episode: 12
    },
    {
        id: 35,
        victim: 'Pino',
        cause: 'Multiple shots',
        perpetrator: 'Conte gang member',
        season: 1,
        episode: 12
    },
    {
        id: 36,
        victim: 'O\'Pop',
        cause: 'Multiple shots',
        perpetrator: 'Conte gang member',
        season: 1,
        episode: 12
    },
    {
        id: 37,
        victim: 'Several member of Genny\'s gang',
        cause: 'Multiple shots',
        perpetrator: 'Conte gang member',
        season: 1,
        episode: 12
    },
    {
        id: 38,
        victim: 'Bystander at the school choir',
        cause: 'Shot in the back',
        perpetrator: 'Ciro Di Marzio',
        season: 1,
        episode: 12
    },
    {
        id: 39,
        victim: '4 prison guards',
        cause: 'Multiple shots',
        perpetrator: 'Savastano enforcers',
        season: 1,
        episode: 12
    },

]

module.exports = deaths