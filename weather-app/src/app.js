const path = require('path');
const api = require('../utils/api');
const express = require('express');
const settings = require('../utils/settings');
const publicFolder = path.join(__dirname, '../public');
const weatherToken = settings.weatherToken;
const appPort = settings.appPort

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(publicFolder));


app.get('', (req, res) => {
    res.render('index');
});


app.get('/weather', (req, res) => {
    const url = `https://api.weatherapi.com/v1/current.json?q="${req.query.search}"&aqi=yes&key=${weatherToken}`;
    api.getData(url, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.render('weather', {'data': data});
        }
    })
});

app.listen(appPort, () => {
    console.log('----------------------------------------------------------------');
    console.log(`Starting Express web-server...`);
    console.log(`Serving on: http://localhost:${appPort}`);
})