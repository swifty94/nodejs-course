const request = require('request');
const help = require('./help');

const token = help.getJsonValue('WEATHER_API_KEY');
const getData = (address, callbackFucnction) => {
    const url = `https://api.weatherapi.com/v1/current.json?q=${address}&aqi=yes&key=${token}`;
    request({ url: url, json: true}, (err, res) => {
        if (err) {
            callbackFucnction("Unable to reach API service! Check your Internet connection\n", null);
        } else if (res.statusCode !== 200) {
                let issue = `HTTP code: ${res.statusCode}, Message: ${res.statusMessage}`
                callbackFucnction(`No data available for location: ${address}\n${issue}`, null);
        } else {
            let data = {
                "Requested location:": address,
                "Accurate location data:": `${res.body.location.name}, ${res.body.location.region}, ${res.body.location.country}`,
                "Last updated:": res.body.current.last_updated,
                "Condition:": res.body.current.condition.text,
                "Temperature (in Celsius):": res.body.current.temp_c,
                "Feels like (in Celsius):": res.body.current.feelslike_c,
                "Temperature (in Fahrenheit):": res.body.current.temp_f,
                "Feels like (in Fahrenheit):": res.body.current.feelslike_f,
                "Humidity (%):": res.body.current.humidity,
                "Wind (km per h):": res.body.current.wind_kph,
                "Cloud (%):": res.body.current.cloud
              };
            callbackFucnction(null, data);
        }
    });
}

module.exports = {
    getData: getData
}