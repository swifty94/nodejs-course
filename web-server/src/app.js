const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Home page of the app');
});


app.get('/about', (req, res) => {
    res.send('About us page');
});


app.get('/help', (req, res) => {
    res.send('Help for users');
});


app.get('/weather', (req, res) => {
    res.send('Weather data page');
});

app.listen(3000, () => {
    console.log(`Starting application on port 3000`);
})