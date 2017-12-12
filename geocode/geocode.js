const request = require('request');

var geocodeAddress = (address, callback) => {

  var encodedAddress = encodeURIComponent(address);

  request ({
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDXOs2bcA2Eb365HZ5pGuTtHHIiOK7aWBk&address=${encodedAddress}`,
    json: true
  },(error, response, body) => {
    if(error){
      callback('unable to connect to server');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('unable to find address');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    };

  });
};

var weather = (long, lat, callback) => {

  request ({
    url: `https://api.darksky.net/forecast/b86f7957004d3672bc70e9aed252ebe3/${long},${lat}`,
    json: true
  },(error, response, body) =>{
    if(error){
      callback(error);
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather');
    } else {
      callback(undefined, {
        temperature: body.daily.data[0].temperatureHigh
      });
    };
  });
};



module.exports.geocodeAddress = geocodeAddress;
module.exports.weather = weather;
