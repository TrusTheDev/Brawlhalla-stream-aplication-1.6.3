const readline = require('readline');
const { searchPlayerInfo } = require('../controllers/brawlController')
const { mapPlayers } = require ('../resources/playerRepository/players')
const fs = require('fs');
const sharp = require('sharp');
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

  function salirDelPrograma(){
    return process.exit(0);
  }

//Arreglar la var palabra, que se actualiza en cada iteración, la idea es que se vaya actualizando sin que tenga que volver a repetirse en la consola
async function initSingleModeView() {
  let option;
      while(option != '0'){
        process.stdout.write('\x1Bc');
          const palabra = fs.readFileSync('resources/configs/lastoption.txt', 'utf8').trim();
          console.log('----------->[' + palabra + ']<----------- \n');
          getAllplayers()
          console.log('0: para ir atras \n');
          option = await question("")
          //Faltá limpiar la consola aca
          if(mapPlayers.get(option) != undefined){
              searchPlayerInfo(option);
          }

          else if(option == "0"){
            process.stdout.write('\x1Bc');
            console.log("Retornando")
            return;
          }
      
          else if(mapPlayers.get(option) == undefined){
              console.log("nombre inválido")
          }
      } 
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

//new function
async function getAllplayersValues() {
  for(i=0; i<mapPlayers.size; i++){
    console.log(mapPlayers.entries());
  }
}

async function getAllplayers(){
    for(const key of mapPlayers.keys()){
      console.log(key)
    }
    return;
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
    getAllplayersValues
  }