const path = require('path');
const Api = require('../utils/api');
const express = require('express');
const help = require('../utils/help');
const { address } = require('../utils/help');
const publicFolder = path.join(__dirname, '../public');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(publicFolder));


app.get('', (req, res) => {
    res.render('index')
});

app.get('/weather', (req, res) => {
    Api.getWeather((err, data) => {
        if (err) {
            console.log(err);
        }
        res.render('weather', {
            'location': help.address,
            'weatherData': JSON.stringify(data, undefined, 2)
        });
    })
});

app.get('/geo', (req, res) => {
    Api.getGeo((err, data) => {
        if (err) {
            console.log(err);
        }
        res.render('geo', {
            'location': help.address,
            'geoData': JSON.stringify(data, undefined, 2)
        });
    })
});

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(3000, () => {
    console.log('----------------------------------------------------------------');
    console.log(`Starting Express web-server...`);
    console.log(`Serving on: http://localhost:3000`);
})