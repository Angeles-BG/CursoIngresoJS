/*
Angeles Belen García
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {

	let numero;
	let sumaPositivos;
	let multiplicacionNegativos;
	let respuesta;

	respuesta = "si"; 
	sumaPositivos = 0;
	multiplicacionNegativos = 1;

	while (respuesta == "si" || respuesta == "SI" || respuesta == "Si")
	{
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Error. Ingrese un numero: "));
		}
		if (numero >= 0) {
			sumaPositivos = sumaPositivos + numero;
		} else {
			multiplicacionNegativos = multiplicacionNegativos * numero;
		}
		respuesta = prompt("¿Quiere ingresar mas numeros? si/no");
	}


	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
	document.getElementById("txtIdSuma").value = sumaPositivos;

}//FIN DE LA FUNCIÓN