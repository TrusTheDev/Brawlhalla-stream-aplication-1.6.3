const reader = require('xlsx')
const { mapPlayers } = require('../resources/playerRepository/players');
const file = reader.readFile('./resources/playerRepository/ExcelRepository/players.xlsx')
const sheets = file.SheetNames

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

module.exports = {
   pushToMap,
};
