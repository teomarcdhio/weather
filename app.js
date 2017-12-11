const request = require('request');
const yargs = require('yargs');

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

var address = encodeURIComponent(argv.address);

request ({
  url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDXOs2bcA2Eb365HZ5pGuTtHHIiOK7aWBk&address=${address}`,
  json: true
},(error, response, body) => {
  if(error){
    console.log('unable to connect to server');
  } else if (body.status === 'ZERO_RESULTS') {
    console.log('unable to find address');
  } else if (body.status === 'OK') {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
  };

});
