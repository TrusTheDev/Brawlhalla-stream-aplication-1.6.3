const sdk = require("@bmg-esports/sdk")
const fs = require('fs');
const readline = require('readline');
const { FindPlayer, GetPlayerPr, getPlayerLegends, hola }= require('./controllers/brawlController');
//import { saludar } from './controllers/brawlController';
const {mapPlayers} = require('./resources/playerRepository/players')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



//console.log(mapPlayers.get("Power"))

/*
rl.question('Ingresa el nombre del jugador: ', (name) => {

    function initPlayerselection(name){
        try{
        Console.log("Seleccionaste a "+ name)
        FindPlayer(mapPlayers.get(name))
        }
        catch(error){
        console.error(("Opción no válida. Por favor, elige un número entre 1 y 5."))
        }
    }

    rl.close();

});

*/


//getPlayerLegends(array)







