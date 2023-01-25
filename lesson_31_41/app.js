/*
API base stuff for testing
*/
const request = require('request');
//const BASE_URL = "http://api.weatherapi.com/v1/"
const API_KEY = "?key=eacfa4015df8468891312042232501" // removed in security purposes; will be stored separately in future versions
// paste your own key here, its free :)
//const CURRENT = "current.json"
const FORECAST = "forecast.json"
const FORECAST_DAYS = "&days=2"
const AIR_QUALITY_DATA = "&aqi=yes"
const LOCATION = "&q=49.964983,36.096897"
//const FORECAST_URL = BASE_URL+FORECAST+API_KEY+LOCATION+FORECAST_DAYS+AIR_QUALITY_DATA // removed in security purposes; will be taken from customer input
// same here, its free :) paste your own location here.
//
//
//
//
//
const BASE_URL = "http://api.weatherapi.com/v1/"
const CURRENT = "current.json"
const CURRENT_WETHER_URL = BASE_URL+CURRENT+API_KEY+LOCATION+AIR_QUALITY_DATA
//
//
//
request({ url: CURRENT_WETHER_URL}, (err, res) => {
  if ( res && res.statusCode === 200 ) {
    console.log("API call success!")
    let apiData = JSON.parse(res.body.toString())
    let geoData = apiData.location
    let weatherData = apiData.current
    let geo = {
      "Latitude": geoData.lat,
      "Longitude": geoData.lon,
      "Country": geoData.country,
      "City": geoData.name,
      "Region": geoData.region,
    }
    let weather = {
      "Temperature (in Celsius)": weatherData.temp_c,
      "FeelsLike (in Celsius)": weatherData.feelslike_c,
      "Humidity (%)": weatherData.humidity,
      "Wind (km per h)": weatherData.wind_kph,
      "Cloud (%)": weatherData.cloud
    }
    console.log("Location: \n", geo);
    console.log("Weather: \n", weather);
  } else {
    console.log("API call failed!")
    console.log(err)
    return;
  }
})


