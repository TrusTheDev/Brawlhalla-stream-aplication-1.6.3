const { question, salirDelPrograma, initSingleModeView, displayLogo, about, getAllplayersOption, initDoubleModeView, } = require('../controllers/viewController')
const { pushToMap } = require('../controllers/mapController')
async function main() {
    console.log("Iniciando el programa...");
    await displayLogo()
    console.log("Bienvenido a ballstats!, porfavor elija una opción \n 0: salir del programa \n 1: Modo normal \n 2: Modo enfrentamiento \n 3: listar jugadores \n 4: about \n")
    let option = ""
    while(option != '0'){
        pushToMap()
        option = await question("");
    switch (option){
        
        case "0": 
            console.log(" Saliendo del programa");
            salirDelPrograma();

        case '1': 
            option = await question("1 para singles 2 para doubles");
            console.log(' Iniciando programa ');
            if(option == '1'){
                await initSingleModeView();
            }
            else {
                //opción para dobules
                await initDoubleModeView();
            }
            main()
            break;

        case '2': 
            option = await question("1 para singles 2 para doubles");
            console.log(' Iniciando programa ');
            if(option == '1'){
                await initSingleModeView();
            }
            else {
                //opción para dobules
                await initDoubleModeView();
            }
            main()
            break;
        case '3': 
            //Solucionar refresh
            console.log("Listando jugadores ");
            await getAllplayersOption();
            main()
            break;

        case '4': 
            console.log("About " + option);
            await about();
            main()
            break;  
      
        default:    
            console.log("opción inválida");
            process.exit(0);
        }
    } 
  }
  
  main();






  module.exports = {main}