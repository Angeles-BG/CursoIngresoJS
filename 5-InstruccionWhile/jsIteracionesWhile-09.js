/*
Angeles Belen García
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
/*
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
*/
//While 9 bis: Al presionar el botón pedir  números  hasta que el usuario quiera,
//mostrar el número máximo y el número mínimo ingresado.
//El menor de los pares y el mayor de los negativos ...(solo si hay)

function mostrar() {

	let numeroIngresado;
	let maximoNegativo;
	let minimoPar;
	let maximo;
	let minimo;
	let respuesta;
	let banderaDelPrimero;
	let banderaDelPrimeroPar;
	let banderaDelPrimeroNegativo;

	banderaDelPrimero = 0;
	respuesta = "si";
	maximoNegativo = 0;
	minimoPar = 0;
	banderaDelPrimeroPar = 0;
	banderaDelPrimeroNegativo = 0;

	while (respuesta == "si" || respuesta == "SI" || respuesta == "Si") {
		//pido un numero y lo guardo.
		numeroIngresado = parseInt(prompt("ingrese un numero: "));
		while (isNaN(numeroIngresado)) {
			numeroIngresado = parseInt(prompt("Error. Ingrese un numero: "));
		}
		//maximos y minimos 
		if (banderaDelPrimero == 0) { 
			maximo = numeroIngresado;
			minimo = numeroIngresado;
			banderaDelPrimero = 1;
		} else if (numeroIngresado > maximo) {
			maximo = numeroIngresado;
		}
		else if (numeroIngresado < minimo) {
			minimo = numeroIngresado;
		}
		//maximo negativos y minimos par 
		if (banderaDelPrimeroNegativo == 0) {
			maximoNegativo = numeroIngresado;
			banderaDelPrimeroNegativo = 1;
		} else if (numeroIngresado < 0 && numeroIngresado > maximoNegativo) {
			maximoNegativo = numeroIngresado;
		}
		if (banderaDelPrimeroPar == 0) {
			minimoPar = numeroIngresado;
			banderaDelPrimeroPar = 1;
		} else if (numeroIngresado % 2 == 0 && numeroIngresado < minimoPar) {
			minimoPar = numeroIngresado;
		}
		respuesta = prompt("desea continuar? si/no");
	}//FIN DEL WHILE 

if (maximoNegativo == 0) {
	console.log("no hay numeros negativos");
} else if (minimoPar == 0) {
	console.log("no hay numeros pares");
}

document.getElementById("txtIdMaximo").value = maximo;
document.getElementById("txtIdMinimo").value = minimo;
}//FIN DE LA FUNCIÓN