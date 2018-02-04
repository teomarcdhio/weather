const request = require('request');


var geocodeAddress = (address) => {

    var encodedAddress = encodeURIComponent(address);

  return new Promise ((resolve, reject) => {

    request ({
      url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDXOs2bcA2Eb365HZ5pGuTtHHIiOK7aWBk&address=${encodedAddress}`,
      json: true
    },(error, response, body) => {
      if(error){
        reject('unable to connect to server');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('unable to find address');
      } else if (body.status === 'OK') {
        resolve( {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      };

    });
  })
};

geocodeAddress('19146').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
},
(errorMessage) =>{
  console.log(errorMessage);
});
