/*
Angeles Belen Garcia
al presionar el botón pedir un número. mostrar los numeros
pares desde el 1 al número ingresado, y mostrar la cantidad 
de numeros pares encontrados.
*/

function mostrar()
{
	let numero;
	let contador; 
	let cantidadDePares; 

	cantidadDePares = 0; 
	contador = 0; 

	numero = parseInt(prompt("Ingrese un numero: "));
	while (isNaN(numero)) {
		numero = parseInt(prompt("Error. Ingrese un numero: "));
	}

	for(let i=1; i <= numero; i++){
		contador = contador +1; 
		if (contador % 2 == 0 ){
			cantidadDePares = cantidadDePares +1; 
		}
		console.log(contador); 
	}
	
	alert("La cantidad de numeros pares del 1 al numero que ingreso es: " + cantidadDePares); 
}//FIN DE LA FUNCIÓN