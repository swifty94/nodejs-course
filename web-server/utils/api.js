const request = require('request');
const help = require('./help');
const weatherUrl = help.weatherUrl;
const geoUrl = help.geoUrl;
const address = help.address;
const getGeo = (callback) => {
    request({ url: geoUrl, json: true}, (err, res) => {
        if (err) {
            callback("Unable to reach API service! Check your Internet connection\n", null);
        } else if (res.statusCode !== 200 || res.body.features.length === 0) {
            let issue = `HTTP code: ${res.statusCode}, Message: ${res.statusMessage}`
            callback(`No data available for location: ${address}\n${issue}`, {
                'Response': `No data available for location: ${address}`
            });
        } else {
            callback(null, {
                "Latitude:": res.body.features[0].center[1],
                "Longitude:": res.body.features[0].center[0]
            });
        }
    })
};
const getWeather = (callback) => {
    request({ url: weatherUrl, json: true}, (err, res) => {
        if (err) {
            callback("Unable to reach API service! Check your Internet connection\n", null);
        } else if (res.statusCode !== 200 || res.body.current.length === 0) {
                let issue = `HTTP code: ${res.statusCode}, Message: ${res.statusMessage}`
                callback(`No data available for location: ${address}\n${issue}`, {
                    'Response': `No data available for location: ${address}`
                });
        } else {
            callback(null, {
                "Location data:": `${res.body.location.name}, ${res.body.location.region}, ${res.body.location.country}`,
                "Weather details": res.body.current
            });
        }
    });
};

module.exports = {
    getGeo: getGeo,
    getWeather: getWeather
}