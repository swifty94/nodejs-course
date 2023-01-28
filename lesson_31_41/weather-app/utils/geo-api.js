const request = require('request');
const help = require('./help');

const token = help.getJsonValue('LOCATION_API_KEY');
const getData = (address, callbackFucnction) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=`+token;
    request({ url: url, json: true}, (err, res) => {
        if (err) {
            callbackFucnction("Unable to reach API service! Check your Internet connection\n", null);
        } else if (res.body.features.length === 0) {
            callbackFucnction(`No data available for location: ${address}`, null);
        } else {
            const data = {
                "Latitude:": res.body.features[0].center[1],
                "Longitude:": res.body.features[0].center[0]
            }
            callbackFucnction(null, data);
        }
    });
}

module.exports = {
    getData: getData
}