console.log('in request');
const request = require('request');

request({
  url:'http://www.mapquestapi.com/geocoding/v1/address?key=N4pIhCs0FNqN89ItKJi5YpuKL4WmJd0L&location=A708RoseiconhousingsocietyPimplesaudagarpune',
  json: true
},(error, response, body)=>{

  //console.log(body.results[0].locations[0].latLng.lat);
  //console.log(body.results[0].locations[0].latLng.lng);

  //console.log(JSON.stringify(response, undefined, 2));
//  console.log(`Address: ${results}`);
console.log(body.results);
});
