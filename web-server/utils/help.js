/*
 *      Some helper to get secured items from JSON and to be exported in final constants.
 */
const fs = require('fs');
const getJsonValue = (jsonKey) => {
    try {
        data =  JSON.parse(fs.readFileSync("./keys.json").toString());
        return data[jsonKey];
    } catch (error) {
        console.log("No keys.json found in the application directory.", error);
        return;
    }
}

const weatherToken = getJsonValue('WEATHER_API_KEY');
const geoToken = getJsonValue('LOCATION_API_KEY');
const address = getJsonValue('LOCATION');

/**
 * Only publicly exported items from this module
 */
const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=`+geoToken;
const weatherUrl = `https://api.weatherapi.com/v1/current.json?q=${address}&aqi=yes&key=${weatherToken}`;

module.exports = {
    geoUrl: geoUrl,
    weatherUrl: weatherUrl,
    address: address
}