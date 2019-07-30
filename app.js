const place = require('./place/place');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'City direction to obtain weather',
        demand: true
    }
}).argv;

const getInfo = async(direction) => {

    try {
        const coord = await place.getDataDirection(direction);
        const temp = await weather.getWeather(coord.lat, coord.lon);

        return `${coord.direction}'s weather is ${temp}.`;
    } catch (e) {
        return `${direction}'s weather could not determinate.`;
    }
}

getInfo(argv.direction)
    .then(console.log)
    .catch(console.log);