const sharp = require('sharp');
const fs = require('fs');
const fs1 = require('fs').promises;
const sdk = require("@bmg-esports/sdk");
const { mapPlayers } = require('../resources/playerRepository/players');
const { count } = require('console');

async function FindPlayer(id, mode, player) {
    try{
    const result = await sdk.getPlayer({smashId: id});
    fs.writeFileSync(`./stats/${mode}/${player}/name.txt`, (result.player.name.toString()).toUpperCase(), 'utf8');
    return console.log(result)
    }catch (e) {console.log("Error con el id")}
}

async function GetPlayerPr(id,gm,mode,player){
    try{
    const result = await sdk.getPlayerPR({entrantSmashId: id, gameMode: gm})
    fs.writeFileSync(`./stats/${mode}/${player}/earnings.txt`, "$ " + result.earnings.toString() , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/top32.txt`, result.pr.top32.toString() , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/top8.txt`, result.pr.top8.toString() , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/0bronze.txt`, result.pr.bronze.toString() , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/0gold.txt`, result.pr.gold.toString() , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/0silver.txt`, result.pr.silver.toString() , 'utf8');
    if (result.pr.powerRanking.toString() == '0') {
        fs.writeFileSync(`./stats/${mode}/${player}/pr.txt`, "-" , 'utf8');
    } else {
        fs.writeFileSync(`./stats/${mode}/${player}/pr.txt`, result.pr.powerRanking.toString() , 'utf8');
    }
    return console.log(result)
    } catch (e){console.log("Error con el id o gm")}
}

//Tenes que poner el smashID adentro del arreglo ES UNA MIERDA ESTO
async function getPlayerLegends(smashID, mode, player){   
    try {
    const result = await sdk.getPlayerLegends({entrantSmashIds: smashID,maxResults: 1,isOfficial: false})
    
        const personaje = result.legends
        const nombre = personaje[0].name.toLowerCase() + '.png'
        sharp('resources/playersImgs/' + nombre)
        .toFile(`./stats/${mode}/${player}/splash.png`);
        return console.log(result)
      } catch (error) {
        console.log("Usuario no tiene personajes reportados u hubo un error con el nombre") 
        sharp('resources/playersImgs/random.png')
        .toFile(`./stats/${mode}/${player}/splash.png`);
      }

      
}

async function playerInfoRandom(nombre, mode, player){
    fs.writeFileSync(`./stats/${mode}/${player}/name.txt`, nombre, 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/earnings.txt`, "0" , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/pr.txt`, "0" , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/top32.txt`, "0" , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/top8.txt`, "0" , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/0bronze.txt`, "0" , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/0gold.txt`, "0" , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/0silver.txt`, "0" , 'utf8');
    fs.writeFileSync(`resources/configs/lastoption.txt`, nombre , 'utf8');
    sharp('resources/playersImgs/random.png').toFile(`./stats/${mode}/${player}/splash.png`);
    console.log(result)

}

async function searchPlayerInfo1v1(nombre,player) {
    console.log(player)
    try{
    var result = GetPlayerPr(mapPlayers.get(nombre), 1, "1v1", player);
    console.log(result)
    var result = FindPlayer(mapPlayers.get(nombre), "1v1", player);
    console.log(result)
    const array = [mapPlayers.get(nombre)];
    console.log(result)  
    var result = getPlayerLegends(array, "1v1", player);
    fs.writeFileSync("resources/configs/lastoption.txt", nombre , 'utf8');
    } catch (e) {console.log("Nombre inválido")}
  }

async function searchPlayerInfo2v2(nombre,player) {
    try{
    var result = GetPlayerPr(mapPlayers.get(nombre), 2, "2v2", player);
    console.log(result)
    var result = FindPlayer(mapPlayers.get(nombre), "2v2", player);
    console.log(result)
    const array = [mapPlayers.get(nombre)];
    console.log(result)  
    var result = getPlayerLegends(array, "2v2", player);
    fs.writeFileSync("resources/configs/lastoption.txt", nombre , 'utf8');
    } catch (e) {console.log("Nombre inválido")}
  }

  async function countFoldersInDirectory(directoryPath) {
    try {
        // Leer el contenido de la carpeta
        const files = await fs1.readdir(directoryPath, { withFileTypes: true });

        // Filtrar solo los directorios
        const directories = files.filter(file => file.isDirectory());

        // Retornar la cantidad de carpetas encontradas
        return directories.length;
    } catch (error) {
        console.error('Error al leer el directorio:', error);
        return 0;  // Retorna 0 si ocurre un error
    }
}


module.exports = {
    FindPlayer,
    GetPlayerPr,
    getPlayerLegends,
    playerInfoRandom,
    searchPlayerInfo1v1,
    searchPlayerInfo2v2,
    countFoldersInDirectory
}


