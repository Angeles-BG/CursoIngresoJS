/*
Angeles Belen Garcia
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/
function mostrar()
{
	let numero; 
	let divisor; 
	let mensaje; 
	let cantidadDivisores; 

	numero = parseInt(prompt("Ingrese un numero: "));
	while (isNaN(numero)) {
		numero = parseInt(prompt("Error. Ingrese un numero: "));
	}

	for(let i=1; i <= numero; i++){
		divisor = divisor + 1; 
		if (numero % divisor == 0){
			cantidadDivisores = cantidadDivisores +1 
		}
		if (cantidadDivisores <3 && i >3 ){
			mensaje = "el numero es primo"; 
		}
	}
	alert(mensaje); 
}//FIN DE LA FUNCIÓN