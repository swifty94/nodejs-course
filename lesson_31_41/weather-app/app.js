const yargs = require('yargs');
const geoApi = require('./utils/geo-api');
const wetherApi = require('./utils/weather-api');

yargs.command({
  command: 'geo',
  describe: '\nUsage:\n user@pc~ node app.js geo --l="<YOUR_CITY/TOWN>"\nYou will get Latitude and Longitude according to your location input\nuser@pc~ node app.js geo --l="Kharkiv"\n',
  builder: {
    l:{
      type:'string',
      demandOption: true
    }
  },
  handler: function(argv){
    geoApi.getData(argv.l, (err, res) => {
      if(!err) {
        console.log(res);
      } else {
        console.log(err);
      }
    })
  }})

  yargs.command({
    command: 'weather',
    describe: '\nUsage:\n user@pc~ node app.js weather --l="<YOUR_CITY/TOWN/COORDINATES (from geo output, as an option)>"\nYou will get weather details according to your location input\nuser@pc~ node app.js weather --l="Kharkiv"\n',
    builder: {
      l:{
        type:'string',
        demandOption: true
      }
    },
    handler: function(argv){
      wetherApi.getData(argv.l, (err, res) => {
        if(!err) {
          console.log(res);
        } else {
          console.log(err);
        }
      })
    }})

yargs.parse();