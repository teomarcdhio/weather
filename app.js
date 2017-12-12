
const yargs = require('yargs');

const geocode = require('./geocode/geocode')

const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'address to fetch the weather',
    string: true
  }
})
.help()
.alias('h', 'help')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage){
    console.log(errorMessage);
  } else if (results) {
    console.log(results.address);
    geocode.weather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage){
        console.log(errorMessage);
      } else if (weatherResults) {
        var celsius = (( weatherResults.temperature - 32 ) * 5 ) /9;
        console.log(`the temperature is ${weatherResults.temperature} Fharenheit or ${celsius} celsius`);
      };
    });
  };
});
