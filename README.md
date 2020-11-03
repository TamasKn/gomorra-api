# Gomorra API
Based on the Italian TV-show Gomorra: La serie and the spin-off film L'immortale

## Documentation

### Base URI

`https://gomorra-api.herokuapp.com/`

### Endpoints
`Characters` `Deaths` `Episodes`

### Characters

| Attribute | Type | Description |
|---|---|---|
| id | integer | Unique ID for each character |
| name | string | Formal name of the character |
| nickname | string | Nickname, pet name of a character |
| occupation | string | Job title or position in a clan/gang |
| clan | string | Name of the clan(s) what the character has relation |
| picture | string | Image URI of character |
| status | string  | Character alive or dead `Alive` or `Deceased` |
| seasons | array | List of integer which season has the character appearance |
| actor | string | Name of the actor/actress the character portrayed by |

Get all characters

`/characters`

Characters placeholder. Returns 10 random characters. Use as a placeholder in development project.

`/characters/placeholder`

Get single character by ID

`/characters/id/1`

```
{
     "success": true,
     "data": {
         "id": 1,
         "name": "Ciro Di Marzio",
         "nickname": "Immortale",
         "occupation": "Enforcer, Boss",
         "clan": "Savastano, Di Marzio",
         "picture": "https://gomorra-api.herokuapp.com/1.JPG",
         "status": "Alive",
         "seasons": [
             1,
             2,
             3,
             4.5
         ],
         "actor": "Marco D'Amore"
     }
 }
 ```

Get character(s) by name.
It will search in both name and nickname.

`/characters/name/track`

```
{
    "success": true,
    "data": [
        {
            "id": 12,
            "name": "",
            "nickname": "'O Track",
            "occupation": "Dealer, Boss",
            "clan": "Savastano, Ragazzi del Vicolo",
            "picture": "https://gomorra-api.herokuapp.com/12.JPG",
            "status": "Deceased",
            "seasons": [
                1,
                2
            ],
            "actor": "Carmine Monaco"
        }
    ]
}
```

Get character(s) by their clan name.

`/characters/clan/conte`

Get character(s) by their status.
Status route accepts only `alive` or `deceased` words.

`/characters/status/alive`

Get characters by which season had appearance.

`/characters/season/2`

### Deaths

| Attribute | Type | Description |
|---|---|---|
| id | integer | Unique ID for each death event |
| victim | string | Name or nickname of the character has been deceased |
| cause | string | Reason of death |
| perpetrator | string | Name or nickname of the the character who caused directly or indirectly |
| body_count | integer | Number of dead happened during the event |
| season | integer | Season number where the event occured |
| episode | integer | Episode number where the event occured |

Get all deaths.

`/deaths`

Get certain death by ID.

`/deaths/id/56`

```
{
    "success": true,
    "data": {
        "id": 56,
        "victim": "'O Mulatto",
        "cause": "Multiple shots in the chest",
        "perpetrator": "Rosario",
        "body_count": 1,
        "season": 2,
        "episode": 11
    }
}
```

Get death(s) by the victim's name or nickname.

`/deaths/victim/capae`

```
{
    "success": true,
    "data": [
        {
            "id": 75,
            "victim": "Capaebomba",
            "cause": "Shot in the head",
            "perpetrator": "'Ndrangheta member",
            "body_count": 1,
            "season": 3,
            "episode": 4
        }
    ]
}
```

Get death(s) by perpetrator's name or nickname.

`/deaths/perpetrator/pietro`

Get death(s) by certain season.

`/deaths/season/4`

Get death(s) by the season and episode number.

`/deaths/season/4/episode/9`

### Episodes

| Attribute | Type | Description |
|---|---|---|
| id | integer | Unique ID for each episodes |
| title | string | Title of the episode |
| season | integer | Season number |
| episode | integer | Episode number |

Get all episodes.

`/episodes`

Get episodes by season number.

`/episodes/season/3`

Get episode by the season and episode number.

`/episodes/season/2/episode/9`

```
{
    "success": true,
    "data": [
        {
            "id": 21,
            "title": "Sette anni",
            "season": 2,
            "episode": 9
        }
    ]
}
```

Get episode by its title.

`/episodes/title/uccidere`

```
    "success": true,
    "data": [
        {
            "id": 11,
            "title": "Cento modi per uccidere",
            "season": 1,
            "episode": 11
        }
    ]
}
```

### Usage and Contribution

The API is free to use with the limit of 3000 requests/day. 
If exceeds it will send the 429 status code.

Feel free to make Pull Request if you like to add or correct content.

### Running locally

1. `npm install`
2. `npm run dev`
3. Open `localhost:4000`

#### Error fix
1. Open a new issue
2. Assign yourself
3. Include the issue number in the PR
4. Make the Pull request

#### Copyright
Images of characters belong to HBO. Names, logos, titles, events etc. regarding to the show are properties of
Fandango, Cattleya and BETA. The series distributed by SKY Vision.

The software is under BSD license which means you can use or modify the source code
as long as you include the BSD copyright notice.
 
