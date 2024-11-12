const sharp = require('sharp');
const fs = require('fs');
const sdk = require("@bmg-esports/sdk");
const { mapPlayers } = require('../resources/playerRepository/players');

async function FindPlayer(id) {
    try{
    const result = await sdk.getPlayer({smashId: id});
    fs.writeFileSync("./stats/name.txt", (result.player.name.toString()).toUpperCase(), 'utf8');
    return console.log(result)
    }catch (e) {console.log("Error con el id")}
}

async function GetPlayerPr(id,gm){
    try{
    const result = await sdk.getPlayerPR({entrantSmashId: id, gameMode: gm})
    fs.writeFileSync("./stats/earnings.txt", "$ " + result.earnings.toString() , 'utf8');
    fs.writeFileSync("./stats/top32.txt", result.pr.top32.toString() , 'utf8');
    fs.writeFileSync("./stats/top8.txt", result.pr.top8.toString() , 'utf8');
    fs.writeFileSync("./stats/0bronze.txt", result.pr.bronze.toString() , 'utf8');
    fs.writeFileSync("./stats/0gold.txt", result.pr.gold.toString() , 'utf8');
    fs.writeFileSync("./stats/0silver.txt", result.pr.silver.toString() , 'utf8');
    if (result.pr.powerRanking.toString() == '0') {
        fs.writeFileSync("./stats/pr.txt", "-" , 'utf8');
    } else {
        fs.writeFileSync("./stats/pr.txt", result.pr.powerRanking.toString() , 'utf8');
    }
    return console.log(result)
    } catch (e){console.log("Error con el id o gm")}
}

//Tenes que poner el smashID adentro del arreglo ES UNA MIERDA ESTO
async function getPlayerLegends(smashID){   
    try {
    const result = await sdk.getPlayerLegends({entrantSmashIds: smashID,maxResults: 1,isOfficial: false})
    
        const personaje = result.legends
        const nombre = personaje[0].name.toLowerCase() + '.png'
        sharp('resources/playersImgs/' + nombre)
        .toFile('./stats/splash.png');
        return console.log(result)
      } catch (error) {
        console.log("Usuario no tiene personajes reportados u hubo un error con el nombre") 
        sharp('resources/playersImgs/random.png')
        .toFile('./stats/splash.png');
      }

      
}

async function playerInfoRandom(nombre){
    fs.writeFileSync("./stats/name.txt", nombre, 'utf8');
    fs.writeFileSync("./stats/earnings.txt", "$ " + "0" , 'utf8');
    fs.writeFileSync("./stats/pr.txt", "0" , 'utf8');
    fs.writeFileSync("./stats/top32.txt", "0" , 'utf8');
    fs.writeFileSync("./stats/top8.txt", "0" , 'utf8');
    fs.writeFileSync("./stats/0bronze.txt", "0" , 'utf8');
    fs.writeFileSync("./stats/0gold.txt", "0" , 'utf8');
    fs.writeFileSync("./stats/0silver.txt", "0" , 'utf8');
    fs.writeFileSync("resources/configs/lastoption.txt", nombre , 'utf8');
    sharp('resources/playersImgs/random.png').toFile('./stats/splash.png');
    console.log(result)

}

function searchPlayerInfo(nombre) {
    try{
    var result = GetPlayerPr(mapPlayers.get(nombre), 1);
    console.log(result)
    var result = FindPlayer(mapPlayers.get(nombre));
    console.log(result)
    const array = [mapPlayers.get(nombre)];
    console.log(result)  
    var result = getPlayerLegends(array);
    fs.writeFileSync("resources/configs/lastoption.txt", nombre , 'utf8');
    } catch (e) {console.log("Nombre inválido")}
  }



module.exports = {
    FindPlayer,
    GetPlayerPr,
    getPlayerLegends,
    playerInfoRandom,
    searchPlayerInfo,
}


