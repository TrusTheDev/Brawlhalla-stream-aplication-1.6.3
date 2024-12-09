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
    fs.writeFileSync(`./stats/${mode}/${player}/twitch.txt`, result.player.twitch.toString() , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/twitter.txt`, result.player.twitter.toString() , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/country.txt`, result.player.country.toString() , 'utf8');
    return console.log(result)
    }catch (e) {console.log("error with id")}
}

async function GetPlayerPr(id,gm,mode,player){
    try{
    const result = await sdk.getPlayerPR({entrantSmashId: id, gameMode: gm})
    fs.writeFileSync(`./stats/${mode}/${player}/earnings.txt`, "$ " + result.earnings.toString() , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/top32.txt`, result.pr.top32.toString() , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/top8.txt`, result.pr.top8.toString() , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/bronze.txt`, result.pr.bronze.toString() , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/gold.txt`, result.pr.gold.toString() , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/silver.txt`, result.pr.silver.toString() , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/region.txt`, result.pr.region.toString() , 'utf8');
    if (result.pr.powerRanking.toString() == '0') {
        fs.writeFileSync(`./stats/${mode}/${player}/pr.txt`, "-" , 'utf8');
    } else {
        fs.writeFileSync(`./stats/${mode}/${player}/pr.txt`, result.pr.powerRanking.toString() , 'utf8');
    }
    return console.log(result)
    } catch (e){console.log("error with id or gm")}
}

//Tenes que poner el smashID adentro del arreglo ES UNA MIERDA ESTO
async function getPlayerLegends(smashID, mode, player){   
    try {
    const result = await sdk.getPlayerLegends({entrantSmashIds: smashID,maxResults: 1,isOfficial: false})
    
        const character = result.legends
        const name = character[0].name.toLowerCase() + '.png'
        await sharp('resources/playersImgs/' + name)
        .toFile(`./stats/${mode}/${player}/splash.png`);
        return console.log(result)
      } catch (error) {
        console.log("user doesnt have image") 
        await sharp('resources/playersImgs/random.png')
        .toFile(`./stats/${mode}/${player}/splash.png`);
    }
    

      
}

async function playerInfoRandom(name, mode, player){
    fs.writeFileSync(`./stats/${mode}/${player}/name.txt`, name, 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/earnings.txt`, "0" , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/pr.txt`, "0" , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/top32.txt`, "0" , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/top8.txt`, "0" , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/0bronze.txt`, "0" , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/0gold.txt`, "0" , 'utf8');
    fs.writeFileSync(`./stats/${mode}/${player}/0silver.txt`, "0" , 'utf8');
    fs.writeFileSync(`resources/configs/lastoption.txt`, name , 'utf8');
    sharp('resources/playersImgs/random.png').toFile(`./stats/${mode}/${player}/splash.png`);
    console.log(result)

}

async function searchPlayerInfo1v1(name,player) {
    console.log(player)
    try{
    var result = GetPlayerPr(mapPlayers.get(name), 1, "1v1", player);
    console.log(result)
    var result = FindPlayer(mapPlayers.get(name), "1v1", player);
    console.log(result)
    const array = [mapPlayers.get(name)];
    console.log(result)  
    var result = getPlayerLegends(array, "1v1", player);
    fs.writeFileSync("resources/configs/lastoption.txt", name , 'utf8');
    } catch (e) {console.log("Nombre inválido")}
  }

async function searchPlayerInfo2v2(name,player) {
    try{
    var result = GetPlayerPr(mapPlayers.get(name), 2, "2v2", player);
    console.log(result)
    var result = FindPlayer(mapPlayers.get(name), "2v2", player);
    console.log(result)
    const array = [mapPlayers.get(name)];
    console.log(result)  
    var result = getPlayerLegends(array, "2v2", player);
    fs.writeFileSync("resources/configs/lastoption.txt", name , 'utf8');
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
        console.error('Error while readin dir :', error);
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


