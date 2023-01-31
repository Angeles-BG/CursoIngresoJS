/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numero;
	let promedio;

	acumulador = 0; 
	contador=0;

	do{
		numero = parseInt(prompt("Ingrese un numero: "));
		acumulador += numero; 
		contador ++;
		respuesta = prompt("¿Quiere ingresar otro nuemro? si / no");
	}while (respuesta != "no");

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value= acumulador/contador;

}//FIN DE LA FUNCIÓN