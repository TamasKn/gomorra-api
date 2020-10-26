const characters = [
    {
        id: 1,
        name: 'Ciro Di Marzio',
        nickname: 'Immortale',
        occupation: 'Enforcer, Boss',
        clan: 'Savastano, Di Marzio',
        picture: '',
        status: 'Alive',
        seasons: [1],
        actor: 'Marco D\'Amore'
    },
    {
        id: 2,
        name: 'Gennaro Savastano',
        nickname: 'Genny',
        occupation: 'Boss',
        clan: 'Savastano',
        picture: '',
        status: 'Alive',
        seasons: [1],
        actor: 'Salvatore Esposito'
    },
    {
        id: 3,
        name: 'Pietro Savastano',
        nickname: 'Don Pietro',
        occupation: 'Boss',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Fortunato Cerlino'
    },
    {
        id: 4,
        name: 'Immacolata Savastano',
        nickname: 'Donna Imma',
        occupation: 'Wife of Pietro Savastano, Acting Boss',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Maria Pia Calzone'
    },
    {
        id: 5,
        name: 'Salvatore Conte',
        nickname: 'Don Salvatore',
        occupation: 'Boss',
        clan: 'Conte',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Marco Palvetti'
    },
    {
        id: 6,
        name: 'Attilio Diotallevi',
        nickname: 'O\'Trovatello',
        occupation: 'Enforcer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Antonio Milo'
    },
    {
        id: 7,
        name: 'Debora Di Marzio',
        nickname: '',
        occupation: 'Wife of Ciro',
        clan: '',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Pina Turco'
    },
    {
        id: 8,
        name: 'Maria Rita Di Marzio',
        nickname: '',
        occupation: 'Daughter of Ciro',
        clan: '',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Claudia Veneziano'
    },
    {
        id: 9,
        name: 'Aniello L\'Africano',
        nickname: 'Africa',
        occupation: 'Enforcer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Claudio Corinaldesi'
    },
    {
        id: 10,
        name: 'Zecchinetta',
        nickname: '',
        occupation: 'Enforcer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Massimiliano Rossi'
    },
    {
        id: 11,
        name: 'O\'Cardillo',
        nickname: '',
        occupation: 'Dealer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Christian Giroso'
    },
    {
        id: 12,
        name: 'O\'Track',
        nickname: '',
        occupation: 'Dealer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Carmine Monaco'
    },
    {
        id: 13,
        name: 'Noemi',
        nickname: '',
        occupation: 'Mistress of Gennaro',
        clan: '',
        picture: '',
        status: 'Alive',
        seasons: [1],
        actor: 'Elena Starace'
    },
    {
        id: 14,
        name: 'Renato Bolleta',
        nickname: '',
        occupation: 'Enforcer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Mimmo Esposito'
    },
    {
        id: 15,
        name: 'Augusto Parisi',
        nickname: '',
        occupation: 'Boss',
        clan: 'Casavatore',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Rosario D\'Angelo'
    },
    {
        id: 16,
        name: 'Malammore',
        nickname: '',
        occupation: 'Enforcer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Fabio De Caro'
    },
    {
        id: 17,
        name: 'Salvo Nunziata',
        nickname: '',
        occupation: 'Police, Informer of Pietro',
        clan: '',
        picture: '',
        status: 'Alive',
        seasons: [1],
        actor: 'Gino Romano'
    },
    {
        id: 18,
        name: 'Franco Musi',
        nickname: '',
        occupation: 'Banker of Pietro',
        clan: '',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Antonio Zavatteri'
    },
    {
        id: 19,
        name: 'Rino',
        nickname: '',
        occupation: 'Prison guard',
        clan: '',
        picture: '',
        status: 'Alive',
        seasons: [1],
        actor: 'Tommaso Palladino'
    },
    {
        id: 20,
        name: 'Pasqualino',
        nickname: '',
        occupation: 'Prisoner in Poggioreale',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'David Power'
    },
    {
        id: 21,
        name: 'Tonino',
        nickname: 'Spiderman',
        occupation: 'Dealer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Alessio Gallo'
    },
    {
        id: 22,
        name: 'Antonio',
        nickname: '',
        occupation: 'Prisoner in Poggioreale',
        clan: 'Savastano',
        picture: '',
        status: 'Alive',
        seasons: [1],
        actor: 'Francesco Murolo'
    },
    {
        id: 23,
        name: 'Tokumbo',
        nickname: '',
        occupation: 'Gang leader',
        clan: 'Associate of clan Savastano',
        picture: '',
        status: 'Alive',
        seasons: [1],
        actor: 'Sidy Diop'
    },
    {
        id: 24,
        name: 'Rosario',
        nickname: 'O\'Nano',
        occupation: 'Enforcer',
        clan: 'Savastano, Di Marzio',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Lino Musella'
    },
    {
        id: 25,
        name: 'Vitaly Eremenko',
        nickname: '',
        occupation: 'Boss',
        clan: 'Russian mob',
        picture: '',
        status: 'Alive',
        seasons: [1],
        actor: 'Rinat Khismatouline'
    },
    {
        id: 26,
        name: 'Baroncino',
        nickname: '',
        occupation: 'Drug deal broker',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Gaetano di Vaio'
    },
    {
        id: 27,
        name: 'Massimo',
        nickname: '',
        occupation: 'Driver of Salvatore Conte',
        clan: 'Conte',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Domenico Balsamo'
    },
    {
        id: 28,
        name: 'Marta Giacobone',
        nickname: 'Luca',
        occupation: 'Associate of Immacolata',
        clan: '',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Susy Benedetto'
    },
    {
        id: 29,
        name: 'Franco Martucci',
        nickname: 'Leccalecca',
        occupation: 'Loan shark',
        clan: '',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Nuccio Siano'
    },
    {
        id: 30,
        name: 'Michele Casillo',
        nickname: '',
        occupation: 'Politician',
        clan: 'Savastano',
        picture: '',
        status: 'Alive',
        seasons: [1],
        actor: 'Ivan Boragine'
    },
    {
        id: 31,
        name: 'Daniele',
        nickname: '',
        occupation: 'Mechanic, Associate of Ciro',
        clan: '',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Vincenzo Sacchettino'
    },
    {
        id: 32,
        name: 'Capaebo',
        nickname: '',
        occupation: 'Dealer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Giovanni Buselli'
    },
    {
        id: 33,
        name: 'Gessica',
        nickname: '',
        occupation: 'Mistress of Gennaro',
        clan: '',
        picture: '',
        status: 'Alive',
        seasons: [1],
        actor: 'Antonietta Carillo'
    },
    {
        id: 34,
        name: 'Antonino Russo',
        nickname: 'Tonino',
        occupation: 'Associate of Conte',
        clan: 'Conte',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Pietro Juliano'
    },
    {
        id: 35,
        name: 'Manu',
        nickname: '',
        occupation: 'Hairdresser, Friend of Daniele',
        clan: '',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Denise Perna'
    },
    {
        id: 36,
        name: 'Vincenzo',
        nickname: 'Pitbull',
        occupation: 'Enforcer',
        clan: 'Savastano, Di Marzio',
        picture: '',
        status: 'Alive',
        seasons: [1],
        actor: 'Vincenzo Fabricino'
    },
    {
        id: 37,
        name: 'O\'Pop',
        nickname: '',
        occupation: 'Dealer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Emanuele Vicorito'
    },
    {
        id: 38,
        name: 'Pino',
        nickname: '',
        occupation: 'Dealer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Carmine Battaglia'
    },
    {
        id: 39,
        name: 'Carluccio',
        nickname: 'O\'Pisciavindola',
        occupation: 'Enforcer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Walter Lippa'
    },
    {
        id: 40,
        name: 'Giovanni',
        nickname: 'O\'Zingaro',
        occupation: 'Enforcer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Giovanni Allocca'
    },
    {
        id: 41,
        name: 'O\'Fringuello',
        nickname: '',
        occupation: 'Enforcer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Alfonso Postiglione'
    },
    {
        id: 42,
        name: 'Marina',
        nickname: '',
        occupation: 'Driver of Immacolata',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Luisa Esposito'
    },
    {
        id: 43,
        name: 'Diego',
        nickname: '',
        occupation: 'Schoolboy',
        clan: '',
        picture: '',
        status: 'Alive',
        seasons: [1],
        actor: 'Francesco Borragine'
    },
]

module.exports = characters