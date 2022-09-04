const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10) => {

    try {
    let salida = '';
    let consola = '';
    
        for (let index = 1; index <= hasta; index++) {
            consola +=`${ base } ${ 'x'.green } ${ index } ${ '='.green } ${ base * index }\n`;
             salida +=`${ base } x ${ index } = ${ base * index }\n`;             

        }
        
        if ( listar ) {
            console.log('==================='.green);
            console.log('  Tabla del : '.green, colors.blue( base ) );
            console.log('==================='.green);
            console.log(consola);
            
        }

        let nombreArchivo = `./salida/tabla-${ base }.txt`;
        fs.writeFileSync( nombreArchivo , salida );
    
        console.log( nombreArchivo );
        return nombreArchivo;
    }
    catch( error ) {
        throw error;
    }

}


module.exports = {
    crearArchivo
}