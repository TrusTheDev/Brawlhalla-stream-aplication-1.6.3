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
          console.log("Player not found")
        }
       if(player == '0' || bool == true){
        break
      }
    }
    return player
 }

  function leaveProgram(){
    return process.exit(0);
  }


async function initSingleModeView() {
  let player;  
  getAllplayers()    
  console.log('0: go back \n');
  while(player != '0'){
      console.log("introduce player name")
      player = await askForPlayer()
      if (player != '0'){
        await searchPlayerInfo1v1(player, 'player1')
      }
  }
      process.stdout.write('\x1Bc');
      console.log("Returning...")
      return;
  }

async function initDoubleModeView() {
  let player;  
  getAllplayers()    
  console.log('0: go back \n');
  while(player != '0'){
    for(i = 1; i<=2; i++ || player != '0'){
        console.log("Introduce player name " + i)
        player = await askForPlayer();
        if (player != '0'){
          await searchPlayerInfo2v2(player,`player${i}` )
        }
      }
  }  
    process.stdout.write('\x1Bc');
    console.log("Returning")
    return;
  }
  
async function initSingleConfrontMode(){
  let player;  
  let count = await countFoldersInDirectory('./stats/1v1')
  getAllplayers()    
  console.log('0: go back \n');
  while(player != '0'){
    for(i = 1; i<=count; i++ || player != '0'){
        console.log("Introduce player name " + i)
        player = await askForPlayer();
        if (player != '0'){
          await searchPlayerInfo1v1(player,`player${i}`)
        }
      }
  }  
    process.stdout.write('\x1Bc');
    console.log("Returning")
    return;
}

async function initDoubleConfrontMode(){
  let player;  
  let cont = await countFoldersInDirectory('./stats/2v2')
  getAllplayers()    
  console.log('0: go back \n');
  while(player != '0'){
    for(i = 1; i<=cont; i++ || player != '0'){
        console.log("Introduce player name " + i)
        player = await askForPlayer();
        if (player != '0'){
          await searchPlayerInfo2v2(player,`player${i}`)
        }
      }
  }  
    process.stdout.write('\x1Bc');
    console.log("Returning")
    return;
}  
  
async function getAllplayersOption(){
  process.stdout.write('\x1Bc');
  let option = "";
  while(option != "0"){
    option = await question("list?, type any character ")
    getAllplayersValues();
    if(option == "0"){
      process.stdout.write('\x1Bc');
      console.log("returning")
      return;
    }
  }
}  

  async function about(){
    process.stdout.write('\x1Bc');
    console.log("Program developed by Mr.ivansito and maxy ")
    console.log("Returning")
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
    leaveProgram,
    initSingleModeView,
    getAllplayers,
    about,
    getAllplayersOption,
    displayLogo,
    getAllplayersValues,
    initDoubleModeView,
    initSingleConfrontMode,
    initDoubleConfrontMode,
  }