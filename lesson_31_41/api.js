/*
API base stuff for testing
*/
const request = require('request');
const fs = require('fs');
/*
API KEY TO BE STORED ELSEWHERE UPON EACH COMMIT UNTIL THERE WILL BE A DESIGN TO STORE THEM SECURELY

const WEATHER_API_KEY = "?key=$KEY";

*/
const WEATHER_API_KEY = "?key=9a70f13aff0c42d2ba6213742232501";
/*

  WEATHER_API DETAILS

*/
const WEATHER_BASE_URL = "http://api.weatherapi.com/v1/";
const CURRENT = "current.json";
const AIR_QUALITY_DATA = "&aqi=yes";
const LOCATION = "&q=";

const getApiData = (userInput) => {
  const CURRENT_WETHER_URL = WEATHER_BASE_URL+CURRENT+WEATHER_API_KEY+LOCATION+userInput+AIR_QUALITY_DATA;
  request({ url: CURRENT_WETHER_URL, json: true}, (err, res) => {
    if ( res && res.statusCode === 200 ) {
      let apiData = res.body;
      let geoData = apiData.location;
      let weatherData = apiData.current;
      let geo = {
        "Country:": geoData.country,
        "City:": geoData.name,
        "Region:": geoData.region,
        "Latitude:": geoData.lat,
        "Longitude:": geoData.lon,
      };
      let weather = {
        "Last updated": weatherData.last_updated,
        "Condition:": weatherData.condition.text,
        "Temperature (in Celsius)": weatherData.temp_c,
        "Feels like (in Celsius)": weatherData.feelslike_c,
        "Temperature (in Fahrenheit)": weatherData.temp_f,
        "Feels like (in Fahrenheit)": weatherData.feelslike_f,
        "Humidity (%)": weatherData.humidity,
        "Wind (km per h)": weatherData.wind_kph,
        "Cloud (%)": weatherData.cloud
      };
      console.log("\nInformation about weather and geo data in: ",userInput+"\n");
      console.log("\nLocation: ", geo);
      console.log("\nWeather: ", weather);
    } else {
      console.log("API call failed!");
      console.log(err);
    }
  })
}
module.exports = {
  getApiData: getApiData
}