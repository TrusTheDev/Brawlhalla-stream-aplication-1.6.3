
const fs = require('fs');
const sdk = require("@bmg-esports/sdk")

async function FindPlayer(id) {
    const result = await sdk.getPlayer({smashId: id});
    fs.writeFileSync("./stats/name.txt", result.player.name, 'utf8');
    return console.log(result)
}

async function GetPlayerPr(id,gm){
    const result = await sdk.getPlayerPR({entrantSmashId: id, gameMode: gm})
    return console.log(result)
}

//Tenes que poner el smashID adentro del arreglo ES UNA MIERDA ESTO
async function getPlayerLegends(smashID){   
    const result = await sdk.getPlayerLegends({entrantSmashIds: smashID,maxResults: 1,isOfficial: false})
    return console.log(result)
}

function hola(){
    console.log("hola mundo")
}
//const Lista = [1999846] 
//getPlayerLegends(Lista)

module.exports = {
    FindPlayer,
    GetPlayerPr,
    getPlayerLegends,
    hola
}


