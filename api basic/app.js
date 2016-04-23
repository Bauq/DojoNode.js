var http = require("http");
var modulo = require("./modulo")

var suma =  modulo.suma(5,6);

http.createServer(function (request, response){
	response.write("Suma: "+ suma);
	console.log("iniciando servidor...")
	response.end();
}).listen(8181);
