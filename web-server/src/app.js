const path = require('path');
const help = require('../utils/help');
const weather_api = require('../utils/weather-api');
const geo_api = require('../utils/geo-api');
const address = help.getJsonValue('LOCATION');
const express = require('express');
const publicFolder = path.join(__dirname, '../public');
const app = express();
app.use(express.static(publicFolder));

app.get('/weather', (req, res) => {
    weather_api.getData(address, (err, data) => {
        if (err) {
            console.log(err);
        }
        res.send(data);
    })
});

app.get('/geo', (req, res) => {
    geo_api.getData(address, (err, data) => {
        if (err) {
            console.log(err);
        }
        res.send(data);
    })
});

app.listen(3000, () => {
    console.log(`Starting application on port 3000`);
})