/*
García Ángeles Belén.
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaro variables.
	let numUno;
	let numDos;
	let numUnoTexto;
	let numDosTexto;
	let total;
	let mensaje; 

	//guardo, lo ingresado por el usuario en las caja de texto, en las variables correspondientes. 
	numUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numDosTexto = document.getElementById("txtIdNumeroDos").value;
    
	//transformo lo ingresado en la caja de texto a numero entero, sumo los numeros y los almaceno en una nueva variable.  
	numUno = parseInt(numUnoTexto);
	numDos = parseInt(numDosTexto);
	total = numUno + numDos;
	mensaje = "La suma es  " + total; 

	//muestro mediante un alert la suma.
	alert(mensaje);

}

