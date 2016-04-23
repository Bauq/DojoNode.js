numero = prompt("numero para el factorial");


var factorial = function(numero){
	factorial = 1;
	for(numero; numero>0 ;numero--){
		factorial *= numero;
	}
	return factorial;
}

alert(factorial(numero));
