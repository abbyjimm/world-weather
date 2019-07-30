const axios = require('axios');

const getDataDirection = async(dir) => {
    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': '36e2b04167mshf462b9ccf4d1754p1cbea7jsn6399e2cdbce8' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`There are not results for this direction ${dir}`);
    }

    const data = resp.data.Results[0];
    const direction = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direction,
        lon,
        lat
    }
}

module.exports = {
    getDataDirection
}