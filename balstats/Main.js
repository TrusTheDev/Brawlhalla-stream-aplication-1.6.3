const sdk = require("@bmg-esports/sdk")
const fs = require('fs');
const readline = require('readline');

async function FindPlayer(id) {
    const result = await sdk.getPlayer({smashId: id});
    
    return console.log(result)
}

async function GetPlayerPr(id,gm){
    const result = await sdk.getPlayerPR({entrantSmashId: id, gameMode: gm})
    return console.log(result)
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Selecciona un jugador:");
console.log("1. Power");
console.log("2. Neuz");
console.log("3. Anto");
console.log("4. Opción 4");
console.log("5. Opción 5");


const IdsJugadores = [
    
    327992, 322393, 379003, 1569801, 1999846,
    1025433, 2184467, 1611895, 2220340,

];

const mapPlayers = {};
mapPlayers.[Power] = 327992;
mapPlayers[Neuz] = 322393;
mapPlayers[Nitram] = 1569801;
mapPlayers[Agmed] = 1999846;
mapPlayers[Logic] = 1025433;
mapPlayers[Lauta] = 2184467;
mapPlayers[Azasuh] = 1611895;
mapPlayers[Odnu] = 2220340;



// 0 Power: 327992
// 1 Neuz: 322393
// 2 Anto: 379003
// 3 Nitram: 1569801
// 4 Agmed: 1999846
// 5 Logic: 1025433
// 6 Lauta: 2184467
// 7 Azasuh: 1611895
// 8 Odnu: 2220340
/*
// Leer la entrada del usuario
rl.question('Ingresa el número de la opción: ', (respuesta) => {
    // Convertir la respuesta a número
    const opcion = parseInt(respuesta);

    // Usar un switch para manejar las opciones
    switch (opcion) {
        case 1:
            console.log("Seleccionaste a Power");
            FindPlayer(IdsJugadores[0])
            break;
        case 2:
            console.log("Seleccionaste a Neuz");
            console.log("Y no paso nada xd");

            break;
        case 3:
            console.log("Seleccionaste a Anto");
            FindPlayer(IdsJugadores[2])
            break;
        case 4:
            console.log("Has elegido la Opción 4");
            break;
        case 5:
            console.log("Has elegido la Opción 5");
            break;
        default:
            console.log("Opción no válida. Por favor, elige un número entre 1 y 5.");
            break;
    }

    // Cerrar la interfaz
    rl.close();

});
function initPlayerselection(name){
    try{
    Console.log("Seleccionaste a "+ name)
    FindPlayer(IdsJugadores[id])
    }
    catch(error){
    console.error(("Opción no válida. Por favor, elige un número entre 1 y 5."))
    }
}


//FindPlayer(57335);
//GetPlayerPr(57335,1);
*/

