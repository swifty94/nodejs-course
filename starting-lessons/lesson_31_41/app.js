const myAPI = require('./api.js');
const yargs = require('yargs');

yargs.command({
  command: 'check',
  builder: {
    l:{
      describe: '\nUsage:\n user@pc~ node app.js check --l="<YOUR_CITY/ADDRESS/COORDINATES>"\nYou will get geo/wether according to your location input\nuser@pc~ node app.js --l="Kharkiv"\n',
      type:'string',
      demandOption: true
    }
  },
  handler: function(argv){
    myAPI.getApiData(argv.l)
  }
})

yargs.parse();