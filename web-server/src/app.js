const path = require('path');
const Api = require('../utils/api');
const express = require('express');
const publicFolder = path.join(__dirname, '../public');
const app = express();
app.use(express.static(publicFolder));

app.get('/weather', (req, res) => {
    Api.getWeather((err, data) => {
        if (err) {
            console.log(err);
        }
        res.send(data);
    })
});

app.get('/geo', (req, res) => {
    Api.getGeo((err, data) => {
        if (err) {
            console.log(err);
        }
        res.send(data);
    })
});


app.listen(3000, () => {
    console.log('----------------------------------------------------------------');
    console.log(`Starting Express web-server...`);
    console.log(`Serving on: http://localhost:3000`);
})