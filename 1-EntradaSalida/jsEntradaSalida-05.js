/*
García Ángeles Belén.
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	

	let nombre;
	let edad;
	nombre = document.getElementById("txtIdNombre").value; 
	//le asigno a la variable nombre el valor introducido por el usuario en la caja de texto nombre. 
	edad = document.getElementById("txtIdEdad").value; 
	//le asigno a la variable edad el valor introducido por el usuario en la caja de texto edad. 
	alert("Usted se llama " + nombre + " y tiene " + edad +" años."); 
	//muestro lo almacenado en las variables con un texto concandenado, mediante la utilizacion de un alert. 


}

