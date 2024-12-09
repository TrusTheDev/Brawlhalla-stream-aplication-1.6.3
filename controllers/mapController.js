const reader = require('xlsx')
const { mapPlayers } = require('../resources/playerRepository/players');
const file = reader.readFile('./resources/playerRepository/ExcelRepository/players.xlsx')
const sheets = file.SheetNames
const fs = require('fs');

//Mueve todos los players de la lista de excel al map
function pushToMap(){
   for(let i = 0; i < sheets.length; i++)
       {
          const temp = reader.utils.sheet_to_json(
               file.Sheets[file.SheetNames[i]])
          temp.forEach((res) => {
             mapPlayers.set(res.Player, res.smashID)
          })
       }
}

//new function
async function getAllplayersValues() {
   console.log(mapPlayers.entries());
}

async function getAllplayers(){
   process.stdout.write('\x1Bc');
   const word = fs.readFileSync('resources/configs/lastoption.txt', 'utf8').trim();
   console.log('----------->[' + word + ']<----------- \n');
     for(const key of mapPlayers.keys()){
       console.log(key)
     }
     return;
   }  

async function playerFound(player){
   return mapPlayers.has(player)
}   

module.exports = {
   pushToMap,
   getAllplayersValues,
   getAllplayers,
   playerFound,
};
