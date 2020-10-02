const { getLugarLatLng } = require("./lugar/lugar");
const { getClima } = require("./clima/clima");

const argv = require("yargs").options({
    direccion: {
        alias: "d",
        descripcion: "Dirección de la ciudad para obtener el clima",
        demand: true,
    },
}).argv;

const getInfo = async(direccion) => {
    try {
        let coordenadas = await getLugarLatLng(direccion);
        let clima = await getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${direccion} es de ${clima}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
};

getInfo(argv.direccion).then(console.log).catch(console.log);