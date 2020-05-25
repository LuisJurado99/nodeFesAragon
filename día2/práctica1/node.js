const request = require('request');
/*request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});*/
request('https://corona.lmao.ninja/v2/countries/Mexico/', function (error, response, body) {
    var dato = JSON.parse(body);
    console.log(dato['deaths']);  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('Muertes totales = ', dato['deaths']);
    console.log('Muertes de hoy = ', dato['todayDeaths']); // Print the HTML for the Google homepage.
});