const request = require('request');
const getData = (url, callback) => {
    request({ url: url, json: true}, (err, res) => {
        if (err) {
            callback({response: 'Internal server error. Unable to reach API service. Check your Internet connection.', error: err}, {response: 'Internal server error\nUnable to reach API service! Check your Internet connection\n', error: err});
        } else if (res.statusCode !== 200 || res.body.current.length === 0) {
                let issue = `HTTP code: ${res.statusCode}, Message: ${res.statusMessage}`
                callback({response: issue, error: err},
                    {response: issue, error: err});
        } else {
            callback(null, {
            city : res.body.location.name,
            country : res.body.location.country,
            time : res.body.location.localtime,
            lat: res.body.location.lat,
            lon: res.body.location.lon,
            condition_txt : res.body.current.condition.text,
            condition_img : res.body.current.condition.icon,
            temp_c : res.body.current.temp_c,
            feelslike_c : res.body.current.feelslike_c,
            temp_f : res.body.current.temp_f,
            feelslike_f : res.body.current.feelslike_f,
            humidity : res.body.current.humidity,
            wind: res.body.current.wind_kph,
            cloud : res.body.current.cloud,
            pressure: res.body.current.pressure_mb*0.75 // convert millibars to mmHg
          });
        }
    });
};

module.exports = {
    getData: getData
}