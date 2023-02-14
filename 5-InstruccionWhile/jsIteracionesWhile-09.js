/*
Angeles Belen García
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {

	let numero;
	let maximo;
	let minimo;
	let respuesta;
	let flag; 

	flag = 0; 
	respuesta = "si";
	maximo = 1;
	minimo = 1;

	while (respuesta == "si" || respuesta == "SI" || respuesta == "Si") {
		//pido un numero y lo guardo.
		numero = parseInt(prompt("ingrese un numero: "));
		if (flag == 0) { // para saber si es la primera vez que ingresa un numero. 
			maximo = numero;
			minimo = numero;
		} else {
			if (numero > maximo) {//si el numero es mayor al maximo actualizo. 
				maximo = numero;
			}
			else {
				if (numero < minimo) { //si el numero es menor al minimo actualizo. 
					minimo = numero;
				}
			}
		}
		flag = 1; 
		respuesta = prompt("desea continuar? si/no");
	}

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
}//FIN DE LA FUNCIÓN