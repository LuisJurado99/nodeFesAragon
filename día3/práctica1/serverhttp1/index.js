var Http = require( 'http' );
var request = require('request')
var server = Http.createServer(function(request,response){
    console.log('Alguien entró');
    console.log(request.url);
    response.write("<h1>Hola mundo alguien entro</h1>")

});

server.listen( 3000, function( ) {
console.log( 'Escuchando conexión en el puerto 3000' );
});
console.log(request);
console.log(request.head);
console.log(request.urlx);

