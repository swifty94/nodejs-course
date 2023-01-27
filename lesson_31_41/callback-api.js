let request = require('request');
const token = '?access_token=pk.eyJ1IjoiZHVtbXlkZXY3NzciLCJhIjoiY2xkYzd6NW52MDdtNDNucXp0Mm9mbnB4ayJ9.cYbuOWuDPxaEMAcAd1sqWA' // no real tokens here ;)

const geo = (address, callbackFucnction) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json${token}`
    request({ url: url, json: true}, (err, res) => {
        if (err) {
            callbackFucnction("Unable to reach API service! Check your Internet connection\n", null);
        } else if (res.body.features.length === 0) {
            callbackFucnction(`No data available for location: ${address}`, null);
        } else {
            const lat = res.body.features[0].center[1];
            const lon = res.body.features[0].center[0];
            callbackFucnction(null, `${address} coordinates: \nlatitude: ${lat}\nlongitude: ${lon}`);
        }
    });
}

geo("kharkiv", (error, data) => {
    console.log(`\nError: ${error}`);
    console.log(`Data: ${data}\n`);
})

geo("new york", (error, data) => {
    console.log(`\nError: ${error}`);
    console.log(`Data: ${data}`);
})

geo("frankfurt", (error, data) => {
    console.log(`\nError: ${error}`);
    console.log(`Data: ${data}\n`);
})

geo("123akjda", (error, data) => {
    console.log(`\nError: ${error}`);
    console.log(`Data: ${data}\n`);
})