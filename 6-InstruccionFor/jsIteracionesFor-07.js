/*
Angeles Belen García
al presionar el botón pedir un número. mostrar los numeros divisores 
desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.
*/
function mostrar()
{
	let numero;
	let contador; 
	let cantidadDeDivisores; 
	let mensaje;  

	cantidadDeDivisores = 0; 
	contador = 0; 

	numero = parseInt(prompt("Ingrese un numero: "));
	while (isNaN(numero)) {
		numero = parseInt(prompt("Error. Ingrese un numero: "));
	}

	for(let i=1; i < numero; i++){
		contador = contador +1; 
		if (numero % contador  == 0 ){
			cantidadDeDivisores = cantidadDeDivisores +1; 
			console.log(contador + " es divisor de "+numero);
		}
	}
	mensaje = "La cantidad de divisores del "+ numero +" (del 1 a "+ numero +") es: " + cantidadDeDivisores; 
	alert(mensaje); 


}//FIN DE LA FUNCIÓN