const { question, leaveProgram, initSingleModeView, displayLogo, about, getAllplayersOption, initDoubleModeView,initSingleConfrontMode, initDoubleConfrontMode } = require('../controllers/viewController')
const { pushToMap } = require('../controllers/mapController')
async function main() {
    console.log("Initializing program...");
    await displayLogo()
    console.log("Welcome to Ballstats!, please choose an option \n 0: leave program \n 1: normal mode \n 2: confrontation mode \n 3: List players \n 4: about \n")
    let option = ""
    while(option != '0'){
        pushToMap()
        option = await question("");
    switch (option){
        
        case "0": 
            console.log(" Saliendo del programa");
            leaveProgram();

        case '1': 
            option = await question("press 1 for singles 2 for doubles");
            console.log('Initializing program');
            if(option == '1'){
                await initSingleModeView();
            }
            else {
                await initDoubleModeView();
            }
            main()
            break;

        case '2': 
            option = await question("press 1 for singles 2 for doubles");
            console.log(' Iniciando programa ');
            if(option == '1'){
                await initSingleConfrontMode();
            }
            else {
                await initDoubleConfrontMode();
            }
            main()
            break;
        case '3': 
            //Solucionar refresh
            console.log("Listing players, 0: to return ");
            await getAllplayersOption();
            main()
            break;

        case '4': 
            console.log("About " + option);
            await about();
            main()
            break;  
      
        default:    
            console.log("invalid option");
            process.exit(0);
        }
    } 
  }
  
  main();






  module.exports = {main}