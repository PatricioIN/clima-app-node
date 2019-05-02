const lugar = require('./lugar/lugar')
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv

console.log(argv.direccion);

/*lugar.getLugarLatLng(argv.direccion)
    .then(console.log);*/

/*clima.getClima(40, -74)
    .then(console.log)
    .catch(console.log);*/

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        console.log(coords);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return console.log(`El clima de ${direccion} es de ${temp} grados`)
    } catch (error) {
        return console.log(`No se pudo determinar el clima de ${direccion}`, error);
    }
}

getInfo(argv.direccion);

//El clima de XXX es de X
//No se pudo determinar el clima de XXX