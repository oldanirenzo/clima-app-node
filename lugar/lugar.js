const axios = require("axios");

const getLugarLatLng = async(direccion) => {

    const encoderUrl = encodeURI(direccion);

    const respuesta = await axios.get(`https://geocode.xyz/Hauptstr.,+57632+"${encoderUrl}"?json=1`)

    if (respuesta.data.matches === null) {
        throw new Error(`No hay resultados para ${direccion}`)
    }
    const data = respuesta.data;
    const location = data.standard.addresst
    const lat = data.latt
    const lng = data.longt

    return {
        location,
        lat,
        lng
    }
};

module.exports = {
    getLugarLatLng
}