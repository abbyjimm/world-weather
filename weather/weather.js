const axios = require('axios');

const getWeather = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=249791285a44906506e21bd03662ee23&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getWeather
}