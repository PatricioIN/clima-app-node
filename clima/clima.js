const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8413f18101cf99efe5caf2855374d5fc&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}