/*
García Ángeles Belen. 
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//declaro variables.
	let numUno;
	let numDos;
	let total;

	//guardo, lo ingresado por el usuario en las caja de texto, en las variables correspondientes. 
	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;
    
	//transformo lo ingresado en la caja de texto a numero entero, sumo los numeros y los almaceno en una nueva variable.  
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);
	total = numUno + numDos;

	//muestro mediante un alert la suma.
	alert("La suma es  " + total );
	
}

function restar()
{
	//declaro variables.
	let numUno;
	let numDos;
	let total;

	//guardo, lo ingresado por el usuario en las caja de texto, en las variables correspondientes. 
	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;
    
	//transformo lo ingresado en la caja de texto a numero entero, resto los numeros y los almaceno en una nueva variable.  
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);
	total = numUno - numDos;

	//muestro mediante un alert la resta.
	alert("La resta es  " + total );

}

function multiplicar()
{ 
	//declaro variables.
	let numUno;
	let numDos;
	let total;

	//guardo, lo ingresado por el usuario en las caja de texto, en las variables correspondientes. 
	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;
    
	//transformo lo ingresado en la caja de texto a numero entero, multiplico los numeros y los almaceno en una nueva variable.  
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);
	total = numUno * numDos;

	//muestro mediante un alert la multiplicación.
	alert("La multiplicación es  " + total );

}

function dividir()
{
	//declaro variables.
	let numUno;
	let numDos;
	let total;

	//guardo, lo ingresado por el usuario en las caja de texto, en las variables correspondientes. 
	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;
    
	//transformo lo ingresado en la caja de texto a numero entero, divido los numeros y los almaceno en una nueva variable.  
	numUno = parseInt(numUno);
	numDos = parseInt(numDos);
	total = numUno / numDos;

	//muestro mediante un alert la divición.
	alert("La divicion es  " + total );

}

