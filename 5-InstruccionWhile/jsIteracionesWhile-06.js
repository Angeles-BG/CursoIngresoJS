/*
Angeles Belen Garcia
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let acumulador;
	let contador; 
	let numeroIngresado;
	let i;
	let promedio; 

	acumulador = 0;
	contador = 0;
	i=0;

	while(i<5){
		i = i + 1;
		numeroIngresado = parseFloat(prompt("Ingrese un numero"));
		while (isNaN(numeroIngresado)) {
			numeroIngresado= parseInt(prompt("Error. Ingrese un numero: "));
		}
		contador = contador + 1; 
		acumulador = acumulador + numeroIngresado;
	}

	promedio = acumulador / contador; 

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

	/*
	for (let i = 0; i <5; i++) {
		numeroIngresado = parseFloat(prompt("Ingrese un numero"));
		while (isNaN(numeroIngresado)) {
			numeroIngresado= parseInt(prompt("Error. Ingrese un numero: "));
		}
		contador = contador + 1; 
		acumulador = acumulador + numeroIngresado;
	}
	promedio = acumulador / contador; 

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
	*/
	
}//FIN DE LA FUNCIÓN