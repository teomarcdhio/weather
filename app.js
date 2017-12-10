const request = require('request');

request ({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDXOs2bcA2Eb365HZ5pGuTtHHIiOK7aWBk&address=22%20abbottsmede%20close%20tw1%204rl',
  json: true
},(error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
