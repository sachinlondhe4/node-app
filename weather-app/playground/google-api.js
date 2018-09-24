const request = require('request');

request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?address=1301+lombard+st+philadelphia&key=AIzaSyAPYjrV-GvpNFbG47OmaVh7Jvn1mTrVfdQ',
  json: true
}, (error, response,body)=>{

  console.log(body);

});
