/*
API base stuff for testing
*/
const request = require('request');
/*
API KEYS TO BE STORED ELSEWHERE UPON EACH COMMIT UNTIL THERE WILL BE A DESIGN TO STORE THEM SECURELY

const WEATHER_API_KEY = "?key=$KEY";
const GEO_IP_API_KEY = "?access_token=$TOKEN";

*/
/*

  GEO DETAILS

*/
const GEO_BASE_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const GEO_PLACE = "kharkiv.json";
/*

  WEATHER_API DETAILS

*/
const WEATHER_BASE_URL = "http://api.weatherapi.com/v1/";
const CURRENT = "current.json";
const AIR_QUALITY_DATA = "&aqi=yes";
const LOCATION = "&q=49.964983,36.096897";

//  FINAL URLS TO USE
const CURRENT_WETHER_URL = WEATHER_BASE_URL+CURRENT+WEATHER_API_KEY+LOCATION+AIR_QUALITY_DATA;
const GEO_URL = GEO_BASE_URL+GEO_PLACE+GEO_IP_API_KEY;

//  MAIN
const weather_print = function(){
  request({ url: CURRENT_WETHER_URL, json: true}, (err, res) => {
    if ( res && res.statusCode === 200 ) {
      console.log("API call success!")
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
      console.log("Location: \n", geo);
      console.log("Weather: \n", weather);
      return true;
    } else {
      console.log("API call failed!");
      console.log(err);
      return;
    }
  })
}

weather_print()