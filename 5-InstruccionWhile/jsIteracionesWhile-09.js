/*
Angeles Belen García
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar() {

	let numeroIngresado;
	let maximo;
	let minimo;
	let respuesta;
	let banderaDelPrimero; 

	banderaDelPrimero = 0; 
	respuesta = "si";
	maximo = 1;
	minimo = 1;

	while (respuesta == "si" || respuesta == "SI" || respuesta == "Si") {
		//pido un numero y lo guardo.
		numeroIngresado = parseInt(prompt("ingrese un numero: "));
		while (isNaN(numeroIngresado)) {
			numeroIngresado= parseInt(prompt("Error. Ingrese un numero: "));
		}
		
		if (banderaDelPrimero == 0) { // para saber si es la primera vez que ingresa un numero. 
			maximo = numeroIngresado;
			minimo = numeroIngresado;
			banderaDelPrimero = 1; 
		} else {
			if (numeroIngresado > maximo) {//si el numero es mayor al maximo actualizo. 
				maximo = numeroIngresado;
			}
			else {
				if (numeroIngresado < minimo) { //si el numero es menor al minimo actualizo. 
					minimo = numeroIngresado;
				}
			}
		}
		
		respuesta = prompt("desea continuar? si/no");
	}

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
}//FIN DE LA FUNCIÓN