const readline = require('readline');
const { searchPlayerInfo1v1, searchPlayerInfo2v2,countFoldersInDirectory } = require('../controllers/brawlController')
const { mapPlayers } = require ('../resources/playerRepository/players')
const fs = require('fs');
const sharp = require('sharp');
const {getAllplayersValues, getAllplayers, playerFound} = require ('./mapController')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function question(question) {
    return new Promise((resolve) => {
      rl.question(question, (answer) => {
        resolve(answer);
        
      });
    });
  }

  async function askForPlayer(){
    let bool;
    let player = '-1';
    while(player != '0'){
      player = await question("\n")
      bool = await playerFound(player)
       if(bool == false){
          console.log("Jugador no encontrado")
        }
       if(player == '0' || bool == true){
        break
      }
    }
    return player
 }

  function salirDelPrograma(){
    return process.exit(0);
  }


async function initSingleModeView() {
  let player;  
  getAllplayers()    
  console.log('0: para ir atras \n');
  while(player != '0'){
      console.log("Introduce el nombre del jugador")
      player = await askForPlayer()
      if (player != '0'){
        await searchPlayerInfo1v1(player, 'player1')
      }
  }
      process.stdout.write('\x1Bc');
      console.log("Retornando")
      return;
  }

async function initDoubleModeView() {
  let player;  
  let cont = await countFoldersInDirectory('./stats')
  getAllplayers()    
  console.log('0: para ir atras \n');
  while(player != '0'){
    for(i = 1; i<=2; i++ || player != '0'){
        console.log("Introduce el nombre del jugador " + i)
        player = await askForPlayer();
        if (player != '0'){
          await searchPlayerInfo2v2(player,`player${i}` )
        }
      }
  }  
    process.stdout.write('\x1Bc');
    console.log("Retornando")
    return;
  }  
  
async function getAllplayersOption(){
  process.stdout.write('\x1Bc');
  let option = "";
  while(option != "0"){
    option = await question("¿listar?, ingrese cualquier tecla, 0: para salir. ")
    getAllplayersValues();
    if(option == "0"){
      process.stdout.write('\x1Bc');
      console.log("retornando")
      return;
    }
  }
}  

  async function about(){
    process.stdout.write('\x1Bc');
    console.log("Programa desarrollado por Mr.ivansito y maxy, todos los derechos reservados")
    console.log("Retornando")
    return;
  }

  async function displayLogo() {
       fs.readFile("balstats-logo.txt", "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }  
  

  
 

  module.exports = {
    question,
    salirDelPrograma,
    initSingleModeView,
    getAllplayers,
    about,
    getAllplayersOption,
    displayLogo,
    getAllplayersValues,
    initDoubleModeView
  }