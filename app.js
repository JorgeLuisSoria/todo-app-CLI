const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

require('colors');

console.clear();

const main = async() => {

    let opt = '';

    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB) {
        tareas.cargarTareasFromArray( tareasDB )
    }
  
    do {
        // Imprimir menu
        opt = await inquirerMenu();

        switch ( opt ) {
            case '1':
                // crear opción
                const desc = await leerInput('Descripción:');
                tareas.crearTarea( desc );
            break;
        
            case '2':
                console.log();
                tareas.listadoCompleto();
            break;

            case '3':
                console.log();
                tareas.listarPendientesCompletadas(true);
            break;

            case '4':
                console.log();
                tareas.listarPendientesCompletadas(false);
            break;

            case '5':
                console.log('No implementada');
            break;

            case '6':
                const id = await listadoTareasBorrar( tareas.listadoArr );
                console.log({ id });
            break;
        }

        guardarDB( tareas.listadoArr );


        await pausa();

    } while ( opt !== '0' );

}

main();