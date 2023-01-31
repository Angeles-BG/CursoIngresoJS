/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {

	let numero;
	let sumaPositivos;
	let multiplicacionNegativos;
	let respuesta;
	let flag;
	flag = 0; 
	sumaPositivos = 0;
	multiplicacionNegativos = 1;


	do {
		numero = parseInt(prompt("Ingrese un numero: "));

		if (numero >= 0) {
			sumaPositivos += numero;
		} else {
			flag =1;
			multiplicacionNegativos *= numero;
		}
		respuesta = prompt("¿Quiere ingresar mas numeros?");

	} while (respuesta != "no");

	if (flag = 1){
		multiplicacionNegativos = 0;
	}
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
	document.getElementById("txtIdSuma").value = sumaPositivos;
	

}//FIN DE LA FUNCIÓN