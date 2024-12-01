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

//Tiene que mejorarse, el algoritmo crea nuevas hojas en vez de añadir los que no están.
//deprecated
function mapToExcel(){
   function playerInMap(player, smashID){
      this.player = player;
      this.smashID = smashID;
  }
  
  const data = []
  mapPlayers.forEach((value, key) => {
      // Crear una nueva instancia de PlayerInMap y agregarla al array
      data.push(new playerInMap(key, value));
  });
  
  const ws = reader.utils.json_to_sheet(data)
  
  reader.utils.book_append_sheet(file,ws, 'Sheet1')
  
  // Writing to our file
  reader.writeFile(file,'./resources/playerRepository/ExcelRepository/players.xlsx')
}

module.exports = {
   pushToMap,
   mapToExcel
};
