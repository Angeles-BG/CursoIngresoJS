/*
García Ángeles Belén.
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/


/*
function mostrar() {

	let nombre;
	let edad;
	let mensaje;

	nombre = document.getElementById("txtIdNombre").value;
	//le asigno a la variable nombre el valor introducido por el usuario en la caja de texto nombre. 
	edad = document.getElementById("txtIdEdad").value;
	//le asigno a la variable edad el valor introducido por el usuario en la caja de texto edad. 
	mesaje = "Usted se llama " + nombre + " y tiene " + edad + " años.";
	alert(mensaje);
	//muestro lo almacenado en las variables con un texto concandenado, mediante la utilizacion de un alert. 


}
*/

/*
Ejercicio 5.bis: 
 se debe mostrar un mensaje :
 "Perez , usted se llama jose y tiene 66 años".
 se debe optener el apellido , de la manera que puedan. 
*/
 function mostrar(){

	let nombre;
	let apellido; 
	let edad;
	let mensaje;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	apellido = prompt("ingrese su apellido: "); 

	mensaje = apellido + " , usted se llama " + nombre + " y tiene " + edad + " años.";
	alert(mensaje);
 }
 