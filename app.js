const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

require('colors');

console.clear();

const main = async() => {
    console.log('Hola Mundo');
    let opt = '';

    const tareas = new Tareas();
    
    do {
    
        opt = await inquirerMenu();
        console.log({ opt });

        switch ( opt ) {
            case '1':
                // crear opción
                
            break;
        
            case '2':
                console.log( tareas._listado );
            break;
        }


        await pausa();

    } while ( opt !== '0' );

}

main();