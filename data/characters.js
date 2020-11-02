/** Listed every appearing character who has some sort of impact on the story
 * or had more than few minutes screen time, if I was able to identify
 * by the story, IMDB, Search engines etc.
 **/

const characters = [
    {
        id: 1,
        name: 'Ciro Di Marzio',
        nickname: 'Immortale',
        occupation: 'Enforcer, Boss',
        clan: 'Savastano, Di Marzio',
        picture: '',
        status: 'Alive',
        seasons: [1,2,3,4.5],
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
        seasons: [1,2,3,4,4.5],
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
        seasons: [1,2],
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
        seasons: [1,2],
        actor: 'Marco Palvetti'
    },
    {
        id: 6,
        name: 'Attilio Diotallevi',
        nickname: '\'O Trovatello',
        occupation: 'Enforcer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1,4.5],
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
        seasons: [1,2],
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
        seasons: [1,2],
        actor: 'Claudia Veneziano'
    },
    {
        id: 9,
        name: 'Aniello',
        nickname: 'L\'Africano',
        occupation: 'Enforcer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Claudio Corinaldesi'
    },
    {
        id: 10,
        name: '',
        nickname: 'Zecchinetta',
        occupation: 'Enforcer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Massimiliano Rossi'
    },
    {
        id: 11,
        name: 'Carmeniello',
        nickname: '\'O Cardillo',
        occupation: 'Dealer, Enforcer',
        clan: 'Savastano, Ragazzi del Vicolo',
        picture: '',
        status: 'Deceased',
        seasons: [1,2,3],
        actor: 'Christian Giroso'
    },
    {
        id: 12,
        name: '',
        nickname: '\'O Track',
        occupation: 'Dealer, Boss',
        clan: 'Savastano, Ragazzi del Vicolo',
        picture: '',
        status: 'Deceased',
        seasons: [1,2],
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
        name: '',
        nickname: 'Malammore',
        occupation: 'Enforcer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1,2,3],
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
        clan: '',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'David Power'
    },
    {
        id: 21,
        name: 'Antonino',
        nickname: 'Tonino Spiderman',
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
        clan: '',
        picture: '',
        status: 'Alive',
        seasons: [1],
        actor: 'Francesco Murolo'
    },
    {
        id: 23,
        name: 'Tokumbo',
        nickname: '',
        occupation: 'Enforcer',
        clan: 'Africans',
        picture: '',
        status: 'Alive',
        seasons: [1],
        actor: 'Sidy Diop'
    },
    {
        id: 24,
        name: 'Rosario Ercolano',
        nickname: '\'O Nano',
        occupation: 'Enforcer, Boss',
        clan: 'Savastano, Di Marzio, Ercolano',
        picture: '',
        status: 'Deceased',
        seasons: [1,2],
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
        name: '',
        nickname: 'Baroncino',
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
        seasons: [1,3,4],
        actor: 'Ivan Boragine'
    },
    {
        id: 31,
        name: 'Daniele',
        nickname: '',
        occupation: 'Mechanic, Associate of Ciro',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Vincenzo Sacchettino'
    },
    {
        id: 32,
        name: '',
        nickname: 'Capaebomba',
        occupation: 'Dealer, Enforcer',
        clan: 'Savastano, Ragazzi del Vicolo',
        picture: '',
        status: 'Deceased',
        seasons: [1,2,3],
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
        name: 'Lorenzo',
        nickname: 'Pitbull',
        occupation: 'Enforcer',
        clan: 'Savastano, Di Marzio',
        picture: '',
        status: 'Alive',
        seasons: [1,2],
        actor: 'Vincenzo Fabricino'
    },
    {
        id: 37,
        name: '',
        nickname: '\'O Pop',
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
        nickname: '\'O Pisciavindola',
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
        nickname: '\'O Zingaro',
        occupation: 'Enforcer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Giovanni Allocca'
    },
    {
        id: 41,
        name: '',
        nickname: '\'O Fringuello',
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
    {
        id: 44,
        name: 'Fernando',
        nickname: '',
        occupation: 'Enforcer',
        clan: 'Di Marzio, Savastano',
        picture: '',
        status: 'Alive',
        seasons: [2,3,4],
        actor: 'Gianni Spezzano'
    },
    {
        id: 45,
        name: 'Annalisa Magliocca',
        nickname: 'Scianel',
        occupation: 'Boss, Sister of Zecchinetta',
        clan: 'Savastano, Alleanza Secondigliano, Magliocca',
        picture: '',
        status: 'Deceased',
        seasons: [2,3],
        actor: 'Cristina Donadio'
    },
    {
        id: 46,
        name: '',
        nickname: 'Lello',
        occupation: 'Enforcer',
        clan: 'Di Marzio',
        picture: '',
        status: 'Alive',
        seasons: [2],
        actor: 'Daniele Vicorito'
    },
    {
        id: 47,
        name: 'Gabriele',
        nickname: '\'O Principe',
        occupation: 'Drug dealer, Boss',
        clan: 'Conte, Alleanza Secondigliano',
        picture: '',
        status: 'Deceased',
        seasons: [2],
        actor: 'Antonio Folletto'
    },
    {
        id: 48,
        name: 'Joaquin',
        nickname: '',
        occupation: 'Honduras drug trafficker',
        clan: '',
        picture: '',
        status: 'Deceased',
        seasons: [2,3],
        actor: 'Alfredo Herrera'
    },
    {
        id: 49,
        name: 'Giuseppe Avitabile',
        nickname: 'Don Giuseppe',
        occupation: 'Boss',
        clan: 'Avitabile',
        picture: '',
        status: 'Deceased',
        seasons: [2,3],
        actor: 'Gianfranco Gallo'
    },
    {
        id: 50,
        name: 'Azzurra Avitabile',
        nickname: '',
        occupation: 'Wife of Genny',
        clan: 'Savastano',
        picture: '',
        status: 'Alive',
        seasons: [2,3,4],
        actor: 'Ivana Lotito'
    },
    {
        id: 51,
        name: 'Mico Rinda',
        nickname: '',
        occupation: 'Gang leader',
        clan: '\'Ndrangheta',
        picture: '',
        status: 'Deceased',
        seasons: [2],
        actor: 'Francesco Meoni'
    },
    {
        id: 52,
        name: 'Toto',
        nickname: '\'O Mulatto',
        occupation: 'Drug dealer, Boss',
        clan: 'Conte, Alleanza Secondigliano',
        picture: '',
        status: 'Deceased',
        seasons: [2],
        actor: 'Luca Gallone'
    },
    {
        id: 53,
        name: 'Gennaro',
        nickname: '\'O Zingariello',
        occupation: 'Boss',
        clan: 'Savastano, Alleanza Secondigliano',
        picture: '',
        status: 'Deceased',
        seasons: [2],
        actor: 'Gianluca Di Gennaro'
    },
    {
        id: 54,
        name: 'Nina',
        nickname: '',
        occupation: 'Singer, Mistress of Salvatore Conte',
        clan: '',
        picture: '',
        status: 'Alive',
        seasons: [2],
        actor: 'Alessandra Langella'
    },
    {
        id: 55,
        name: 'Renata',
        nickname: '',
        occupation: 'Sister of Nina',
        clan: '',
        picture: '',
        status: 'Alive',
        seasons: [2],
        actor: 'Raffaella Anzalone'
    },
    {
        id: 56,
        name: 'Marinella',
        nickname: '',
        occupation: 'Daughter in Law of Scianel',
        clan: '',
        picture: '',
        status: 'Alive',
        seasons: [2,3],
        actor: 'Denise Capezza'
    },
    {
        id: 57,
        name: 'Patrizia Santore',
        nickname: '',
        occupation: 'Boss',
        clan: 'Savastano, Secondigliano',
        picture: '',
        status: 'Deceased',
        seasons: [2,3,4],
        actor: 'Cristiana Dell\'Anna'
    },
    {
        id: 58,
        name: 'Raffaele Magliocca',
        nickname: 'Leluccio',
        occupation: 'Gang member, Son of Scianel',
        clan: 'Savastano, Alleanza Secondigliano',
        picture: '',
        status: 'Deceased',
        seasons: [2],
        actor: 'Vincenzo Pirozzi'
    },
    {
        id: 59,
        name: 'Mario Cantapane',
        nickname: '',
        occupation: 'Driver of Scianel, Lover of Marinella',
        clan: 'Alleanza Secondigliano',
        picture: '',
        status: 'Deceased',
        seasons: [2],
        actor: 'Michele Rosiello'
    },
    {
        id: 60,
        name: 'Angelo Sepino',
        nickname: '',
        occupation: 'Associate of Pietro Savastano',
        clan: 'Savastano',
        picture: '',
        status: 'Alive',
        seasons: [2],
        actor: 'Vincenzo Nemolato'
    },
    {
        id: 61,
        name: 'Aniello Pastore',
        nickname: 'Don Aniello',
        occupation: 'Boss',
        clan: 'Confederati, Pastore',
        picture: '',
        status: 'Deceased',
        seasons: [2,3,4,4.5],
        actor: 'Nello Mascia'
    },
    {
        id: 62,
        name: 'Alfredo',
        nickname: '\'A Lisca',
        occupation: 'Enforcer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Emilio Vacca'
    },
    {
        id: 63,
        name: 'Lino',
        nickname: 'Centocapelli',
        occupation: 'Enforcer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [1],
        actor: 'Carlo Giutto'
    },
    {
        id: 64,
        name: '',
        nickname: '\'O Boxer',
        occupation: 'Enforcer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [2],
        actor: 'Giuseppe Fonzo'
    },
    {
        id: 65,
        name: 'Angioletto',
        nickname: '',
        occupation: 'Enforcer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [2],
        actor: 'Arturo Sepe'
    },
    {
        id: 66,
        name: 'Nicola',
        nickname: '',
        occupation: 'Enforcer',
        clan: 'Ragazzi del Vicolo, Secondigliano',
        picture: '',
        status: 'Deceased',
        seasons: [2,3,4],
        actor: 'Riccardo Ciccarelli'
    },
    {
        id: 67,
        name: 'Fausto',
        nickname: '',
        occupation: 'Enforcer',
        clan: 'Ragazzi del Vicolo',
        picture: '',
        status: 'Alive',
        seasons: [2],
        actor: 'Enzo Mazzarella'
    },
    {
        id: 68,
        name: 'Tommaso Natale',
        nickname: '',
        occupation: 'Enforcer',
        clan: 'Avitabile',
        picture: '',
        status: 'Deceased',
        seasons: [2,3],
        actor: 'Luigi Pisani'
    },
    {
        id: 69,
        name: 'Azmera',
        nickname: '',
        occupation: 'Shop owner, Mistress of \'O Principe',
        clan: '',
        picture: '',
        status: 'Alive',
        seasons: [2],
        actor: 'Liana Balogun'
    },
    {
        id: 70,
        name: 'Manolo',
        nickname: '',
        occupation: 'Associate of \'O Nano',
        clan: 'Alleanza Secondigliano, Ercolano',
        picture: '',
        status: 'Deceased',
        seasons: [2],
        actor: 'Ivan Improta'
    },
    {
        id: 71,
        name: 'Teresa',
        nickname: '',
        occupation: 'Wife of \'O Nano',
        clan: '',
        picture: '',
        status: 'Alive',
        seasons: [2],
        actor: 'Irene Maiorino'
    },
    {
        id: 72,
        name: 'Domenico',
        nickname: '',
        occupation: 'Enforcer of Scianel',
        clan: 'Alleanza Secondigliano, Magliocca',
        picture: '',
        status: 'Deceased',
        seasons: [2,3],
        actor: 'Francesco Verde'
    },
    {
        id: 73,
        name: 'Sandro',
        nickname: '',
        occupation: 'Enforcer',
        clan: 'Ragazzi del Vicolo',
        picture: '',
        status: 'Alive',
        seasons: [2],
        actor: 'Ciro Cipullo'
    },
    {
        id: 74,
        name: '',
        nickname: '\'O Puledro',
        occupation: 'Enforcer',
        clan: 'Savastano',
        picture: '',
        status: 'Alive',
        seasons: [2,3],
        actor: 'Giovanni Rienzo'
    },
    {
        id: 75,
        name: 'Alessio',
        nickname: '',
        occupation: 'Brother of Patrizia',
        clan: '',
        picture: '',
        status: 'Alive',
        seasons: [2,4],
        actor: 'Davide Iacono'
    },
    {
        id: 76,
        name: 'Sergio',
        nickname: '',
        occupation: 'Enforcer',
        clan: 'Savastano',
        picture: '',
        status: 'Alive',
        seasons: [2,3],
        actor: 'Luca Varone'
    },
    {
        id: 77,
        name: 'Rosario',
        nickname: '',
        occupation: 'Enforcer',
        clan: 'Alleanza Secondigliano, Savastano',
        picture: '',
        status: 'Alive',
        seasons: [2,3],
        actor: 'Elvis Esposito'
    },
    {
        id: 78,
        name: 'Alfredo Natale',
        nickname: '',
        occupation: 'Enforcer',
        clan: 'Avitabile',
        picture: '',
        status: 'Deceased',
        seasons: [2],
        actor: 'Alessio Lapice'
    },
    {
        id: 79,
        name: '',
        nickname: '\'A Lince',
        occupation: 'Enforcer',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [2,3],
        actor: 'Antonio Ciccone'
    },
    {
        id: 80,
        name: '',
        nickname: '\'A Zeppola',
        occupation: 'Enforcer',
        clan: 'Savastano',
        picture: '',
        status: 'Alive',
        seasons: [2,3,4],
        actor: 'Pasquale Russo'
    },
    {
        id: 81,
        name: 'Don Ruggiero',
        nickname: '\'O Stregone',
        occupation: 'Boss',
        clan: 'Confederati',
        picture: '',
        status: 'Deceased',
        seasons: [3],
        actor: 'Carlo Cerciello'
    },
    {
        id: 82,
        name: 'Eduardo Arenella',
        nickname: '\'O Sciarmant',
        occupation: 'Boss',
        clan: 'Confederati',
        picture: '',
        status: 'Deceased',
        seasons: [3],
        actor: 'Pasquale Esposito'
    },
    {
        id: 83,
        name: 'Elia Capaccio',
        nickname: '\'O Diplomato',
        occupation: 'Boss',
        clan: 'Confederati',
        picture: '',
        status: 'Alive',
        seasons: [3,4],
        actor: 'Andrea Di Maria'
    },
    {
        id: 84,
        name: 'Ferdinando Capaccio',
        nickname: '\'O Crezi',
        occupation: 'Boss',
        clan: 'Confederati',
        picture: '',
        status: 'Deceased',
        seasons: [3,4],
        actor: 'Carlo Caracciolo'
    },
    {
        id: 85,
        name: 'Gege',
        nickname: '',
        occupation: 'Accountant of Genny',
        clan: 'Savastano',
        picture: '',
        status: 'Deceased',
        seasons: [3],
        actor: 'Edoardo Sorgente'
    },
    {
        id: 86,
        name: 'Silvano Romini',
        nickname: '',
        occupation: 'Lover of Gege',
        clan: '',
        picture: '',
        status: 'Alive',
        seasons: [3],
        actor: 'Daniele Monterosi'
    },
    {
        id: 87,
        name: 'Mladen Simeonov',
        nickname: '',
        occupation: 'Underboss, Son of Valentin',
        clan: 'Bulgarian mob',
        picture: '',
        status: 'Deceased',
        seasons: [3],
        actor: 'Alexander Sano'
    },
    {
        id: 88,
        name: 'Valentin Simeonov',
        nickname: '',
        occupation: 'Boss',
        clan: 'Bulgarian mob',
        picture: '',
        status: 'Deceased',
        seasons: [3],
        actor: 'Stilian Ivanov'
    },
    {
        id: 89,
        name: 'Elvana',
        nickname: '',
        occupation: 'Forced prostitute',
        clan: 'Bulgarian mob',
        picture: '',
        status: 'Alive',
        seasons: [3],
        actor: 'Boryana Manoilova'
    },
    {
        id: 90,
        name: 'Tatiana',
        nickname: '',
        occupation: 'Club dancer',
        clan: 'Bulgarian mob',
        picture: '',
        status: 'Alive',
        seasons: [3],
        actor: 'Diana Kostova'
    },
    {
        id: 91,
        name: 'Enzo Villa',
        nickname: 'Sangue Blu',
        occupation: 'Boss',
        clan: 'Villa',
        picture: '',
        status: 'Alive',
        seasons: [3,4],
        actor: 'Arturo Muselli'
    },
    {
        id: 92,
        name: '',
        nickname: '\'A Golia',
        occupation: 'Enforcer',
        clan: 'Villa',
        picture: '',
        status: 'Deceased',
        seasons: [3,4],
        actor: 'Francesco Capriello'
    },
    {
        id: 93,
        name: '',
        nickname: '\'O Belle\'Bbuon',
        occupation: 'Enforcer',
        clan: 'Villa',
        picture: '',
        status: 'Alive',
        seasons: [3,4],
        actor: 'Alessandro Palladino'
    },
    {
        id: 94,
        name: 'Roberto',
        nickname: 'Ronni',
        occupation: 'Enforcer',
        clan: 'Villa',
        picture: '',
        status: 'Alive',
        seasons: [3,4],
        actor: 'Roberto Olivieri'
    },
    {
        id: 95,
        name: 'Biagio Misati',
        nickname: '',
        occupation: 'Boss',
        clan: '\'Ndrangheta',
        picture: '',
        status: 'Alive',
        seasons: [3],
        actor: 'Enzo Saponara'
    },
    {
        id: 96,
        name: 'Maria',
        nickname: '',
        occupation: 'Waitress, Lover of Enzo',
        clan: 'Villa',
        picture: '',
        status: 'Deceased',
        seasons: [3,4],
        actor: 'Gina Amarante'
    },
    {
        id: 97,
        name: 'Carmela Villa',
        nickname: '',
        occupation: 'Pizzeria owner, Sister of Enzo',
        clan: 'Villa',
        picture: '',
        status: 'Deceased',
        seasons: [3],
        actor: 'Angela J. Ciaburri'
    },
    {
        id: 98,
        name: 'Cosimo',
        nickname: '',
        occupation: 'School boy, Son of Carmela',
        clan: '',
        picture: '',
        status: 'Alive',
        seasons: [3],
        actor: 'Domenico Cuomo'
    },
    {
        id: 99,
        name: 'Valerio Misano',
        nickname: '\'O Vocabula',
        occupation: 'Associate of Enzo',
        clan: 'Villa',
        picture: '',
        status: 'Deceased',
        seasons: [3,4],
        actor: 'Loris De Luna'
    },
    {
        id: 100,
        name: 'Branka',
        nickname: '',
        occupation: 'Drug deal broker, Interpreter',
        clan: 'Russian mob',
        picture: '',
        status: 'Alive',
        seasons: [3],
        actor: 'Marija Skaricic'
    },
    {
        id: 101,
        name: 'Gaetano Sanni',
        nickname: '',
        occupation: 'Laundry owner, Associate of Gennaro',
        clan: '',
        picture: '',
        status: 'Alive',
        seasons: [3],
        actor: 'Agostino Chiummariello'
    },
    {
        id: 102,
        name: 'Luca Galori',
        nickname: '',
        occupation: 'Laundry worker',
        clan: '',
        picture: '',
        status: 'Deceased',
        seasons: [3],
        actor: 'Bruno Tramice'
    },
    {
        id: 103,
        name: '',
        nickname: 'Restenente',
        occupation: 'Enforcer of Arenella',
        clan: 'Confederati',
        picture: '',
        status: 'Deceased',
        seasons: [3],
        actor: 'Gabriele Guerra'
    },
    {
        id: 104,
        name: 'Sasa',
        nickname: 'Topmodel',
        occupation: 'Enforcer',
        clan: 'Villa',
        picture: '',
        status: 'Deceased',
        seasons: [3,4],
        actor: 'Roberto Russo'
    },
    {
        id: 105,
        name: '',
        nickname: '\'O Cantonese',
        occupation: 'Enforcer',
        clan: 'Villa',
        picture: '',
        status: 'Alive',
        seasons: [3,4],
        actor: 'Mariano Coletti'
    },
    {
        id: 106,
        name: '',
        nickname: 'MMA',
        occupation: 'Enforcer',
        clan: 'Villa',
        picture: '',
        status: 'Alive',
        seasons: [3,4],
        actor: 'Francesco Da Vinci'
    },
    {
        id: 107,
        name: '',
        nickname: '\'O Mullett',
        occupation: 'Enforcer',
        clan: 'Villa',
        picture: '',
        status: 'Alive',
        seasons: [3,4],
        actor: 'Emanuele Lasco'
    },
    {
        id: 108,
        name: 'Eliuccio',
        nickname: '',
        occupation: 'Enforcer',
        clan: 'Villa',
        picture: '',
        status: 'Deceased',
        seasons: [3,4],
        actor: 'Eugenio Marzella'
    },
    {
        id: 109,
        name: '',
        nickname: 'Susetta',
        occupation: 'Enforcer',
        clan: 'Villa',
        picture: '',
        status: 'Deceased',
        seasons: [3,4],
        actor: 'Luigi Imperato'
    },
    {
        id: 110,
        name: '',
        nickname: '\'O Frisbi',
        occupation: 'Enforcer',
        clan: 'Villa',
        picture: '',
        status: 'Deceased',
        seasons: [3,4],
        actor: 'Marcello Gravina'
    },
    {
        id: 111,
        name: '',
        nickname: '\'O Selfi',
        occupation: 'Enforcer',
        clan: 'Villa',
        picture: '',
        status: 'Deceased',
        seasons: [3,4],
        actor: 'Livio Cori'
    },
    {
        id: 112,
        name: '',
        nickname: '\'O Panzerotto',
        occupation: 'Enforcer',
        clan: 'Villa',
        picture: '',
        status: 'Alive',
        seasons: [3,4],
        actor: 'Massimiliano Palumbo'
    },
    {
        id: 113,
        name: '',
        nickname: '\'O Pezzato',
        occupation: 'Enforcer',
        clan: 'Villa',
        picture: '',
        status: 'Alive',
        seasons: [3,4],
        actor: 'Salvatore Nicolella'
    },
    {
        id: 114,
        name: '',
        nickname: '\'O Reie',
        occupation: 'Enforcer',
        clan: 'Villa',
        picture: '',
        status: 'Alive',
        seasons: [3,4],
        actor: 'Gaetano Rispoli'
    },
    {
        id: 115,
        name: 'Gerlando Levante',
        nickname: 'Don Gerlando',
        occupation: 'Boss',
        clan: 'Levante',
        picture: '',
        status: 'Deceased',
        seasons: [4],
        actor: 'Gianni Parisi'
    },
    {
        id: 116,
        name: 'Francesco Levante',
        nickname: 'Ciccio',
        occupation: 'Enforcer, Son of Gerlando',
        clan: 'Levante',
        picture: '',
        status: 'Alive',
        seasons: [4],
        actor: 'Gennaro Apicella'
    },
    {
        id: 117,
        name: 'Saro Levante',
        nickname: '',
        occupation: 'Enforcer, Son of Gerlando',
        clan: 'Levante',
        picture: '',
        status: 'Alive',
        seasons: [4],
        actor: 'Antonio Gargiulo'
    },
    {
        id: 118,
        name: 'Michelangelo Levante',
        nickname: 'Mickey',
        occupation: 'Businessman, Son of Gerlando',
        clan: '',
        picture: '',
        status: 'Deceased',
        seasons: [4],
        actor: 'Luciano Giugliano'
    },
    {
        id: 119,
        name: 'Alberto Resta',
        nickname: '',
        occupation: 'CEO of the Airport project',
        clan: '',
        picture: '',
        status: 'Deceased',
        seasons: [4],
        actor: 'Andrea Renzi'
    },
    {
        id: 120,
        name: 'Tiziana Palumbo',
        nickname: '',
        occupation: 'Assistant of Alberto Resta',
        clan: '',
        picture: '',
        status: 'Alive',
        seasons: [4],
        actor: 'Daniela Ioia'
    },
    {
        id: 121,
        name: 'Walter Ruggieri',
        nickname: '',
        occupation: 'Prosecutor',
        clan: '',
        picture: '',
        status: 'Alive',
        seasons: [4],
        actor: 'Gennaro Maresca'
    },
    {
        id: 122,
        name: 'Giovanni',
        nickname: '',
        occupation: 'Land owner',
        clan: '',
        picture: '',
        status: 'Alive',
        seasons: [4],
        actor: 'Luigi Credendino'
    },
    {
        id: 123,
        name: 'Leena',
        nickname: '',
        occupation: 'Investment advisor',
        clan: '',
        picture: '',
        status: 'Deceased',
        seasons: [4],
        actor: 'Louise Brealey'
    },
    {
        id: 124,
        name: 'Patrick',
        nickname: '',
        occupation: 'Con artist',
        clan: '',
        picture: '',
        status: 'Deceased',
        seasons: [4],
        actor: 'Barry Ward'
    },
    {
        id: 125,
        name: 'Gaetano',
        nickname: '',
        occupation: 'Driver of Gennaro in London',
        clan: '',
        picture: '',
        status: 'Alive',
        seasons: [4],
        actor: 'Pierluigi Gigante'
    },
    {
        id: 126,
        name: 'Lino',
        nickname: '',
        occupation: 'Enforcer',
        clan: 'Secondigliano',
        picture: '',
        status: 'Deceased',
        seasons: [4],
        actor: 'Alessio Galati'
    },
    {
        id: 127,
        name: 'Benedetta Levante',
        nickname: '',
        occupation: 'Wife of Gerlando, Cousin of Immacolata',
        clan: 'Levante',
        picture: '',
        status: 'Deceased',
        seasons: [4],
        actor: 'Autilia Ranieri'
    },
    {
        id: 128,
        name: 'Graziana Levante',
        nickname: '',
        occupation: 'Daughter of Gerlando',
        clan: '',
        picture: '',
        status: 'Alive',
        seasons: [4],
        actor: 'Claudia Tranchese'
    },
    {
        id: 129,
        name: 'Evelina',
        nickname: '',
        occupation: 'Fashion brand representative, Mistress of Saro Levante',
        clan: '',
        picture: '',
        status: 'Deceased',
        seasons: [4],
        actor: 'Alice Attala'
    },
    {
        id: 130,
        name: 'Annalaura',
        nickname: '',
        occupation: 'Cell mate of Patrizia',
        clan: '',
        picture: '',
        status: 'Alive',
        seasons: [4],
        actor: 'Marcella Granito'
    },
    {
        id: 131,
        name: '',
        nickname: '\'O Snicher',
        occupation: 'Enforcer',
        clan: 'Villa',
        picture: '',
        status: 'Deceased',
        seasons: [4],
        actor: 'Riccardo Marotta'
    },
    {
        id: 132,
        name: 'Raffaele',
        nickname: '',
        occupation: 'Enforcer',
        clan: 'Mistral',
        picture: '',
        status: 'Alive',
        seasons: [4],
        actor: 'Ciro Esposito'
    },
    {
        id: 133,
        name: 'Yuri Dobeshenko',
        nickname: '',
        occupation: 'Boss',
        clan: 'Russian mob',
        picture: '',
        status: 'Deceased',
        seasons: [4.5],
        actor: 'Aleksey Guskov'
    },
    {
        id: 134,
        name: 'Bruno',
        nickname: '',
        occupation: 'Crew leader',
        clan: 'Pastore',
        picture: '',
        status: 'Alive',
        seasons: [4.5],
        actor: 'Salvatore D\'Onofrio'
    },
    {
        id: 135,
        name: 'Emils',
        nickname: '',
        occupation: 'Boss',
        clan: 'Latvian mob',
        picture: '',
        status: 'Deceased',
        seasons: [4.5],
        actor: 'Gatis Gaga'
    },
    {
        id: 136,
        name: 'Virgilio',
        nickname: '',
        occupation: 'Assistant of Bruno',
        clan: 'Pastore',
        picture: '',
        status: 'Deceased',
        seasons: [4.5],
        actor: 'Gennaro Di Colandrea'
    },
    {
        id: 137,
        name: 'Vera',
        nickname: '',
        occupation: 'Dressmaker, Wife of Virgilio',
        clan: 'Pastore',
        picture: '',
        status: 'Alive',
        seasons: [4.5],
        actor: 'Marianna Robustelli'
    },
    {
        id: 138,
        name: 'Stella',
        nickname: '',
        occupation: 'Singer, Ex-lover of Bruno',
        clan: '',
        picture: '',
        status: 'Deceased',
        seasons: [4.5],
        actor: 'Martina Attanasio'
    },
    {
        id: 139,
        name: 'Dimitri',
        nickname: '',
        occupation: 'Enforcer, Boss',
        clan: 'Russian mob',
        picture: '',
        status: 'Alive',
        seasons: [4.5],
        actor: 'Anatolijs Fecins'
    },
    {
        id: 140,
        name: 'Nunzio',
        nickname: '',
        occupation: 'Former associate of Bruno',
        clan: '',
        picture: '',
        status: 'Deceased',
        seasons: [4.5],
        actor: 'Nunzio Coppola'
    },
    {
        id: 141,
        name: '',
        nickname: '\'O Mierlo',
        occupation: 'Boss',
        clan: 'Unknown',
        picture: '',
        status: 'Alive',
        seasons: [4.5],
        actor: 'Salvio Simeoli'
    },
    {
        id: 142,
        name: 'Andris',
        nickname: '',
        occupation: 'Enforcer, Boss',
        clan: 'Latvian mob',
        picture: '',
        status: 'Deceased',
        seasons: [4.5],
        actor: 'Kaspars Karklins'
    },

]

const baseURI = 'http://localhost:4000'

for(let i of characters) {
    i.picture = `${baseURI}/${i.id}.JPG`
}

module.exports = characters