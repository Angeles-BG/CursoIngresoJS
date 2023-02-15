/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let contador;
	let acumulador;
	let respuesta;
	let numero;
	let promedio;

	acumulador = 0;
	contador = 0;
	respuesta = "si";
	promedio = 0; 
	
	while (respuesta == "si" || respuesta == "SI" || respuesta == "Si" )
	{
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Error. Ingrese un numero: "));
		}
		acumulador += numero;
		contador++;
		respuesta = prompt("¿Quiere ingresar otro nuemro? si / no");
	}

	promedio = acumulador / contador;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN