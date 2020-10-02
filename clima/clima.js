const axios = require('axios')


const getClima = async(lat, lng) => {

    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9f0c7f4d7336288005101be47e056a86&units=metric`)

    return respuesta.data.main.temp

}

module.exports = {
    getClima
}