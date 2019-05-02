const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': 'e9cf357684mshae586bac4f4f86ep1a8602jsn4f3bbbf112ca' }
    });

    const resp = await instance.get();
    if (resp.data.Results.lenght === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];

    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}