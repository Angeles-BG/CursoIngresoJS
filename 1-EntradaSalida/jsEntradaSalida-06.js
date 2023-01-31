/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaro variables.
	let num1;
	let num2;
	let total;

	//guardo, lo ingresado por el usuario en las caja de texto, en las variables correspondientes. 
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
    
	//transformo lo ingresado en la caja de texto a numero entero, sumo los numeros y los almaceno en una nueva variable.  
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	total = num1 + num2;

	//muestro mediante un alert la suma.
	alert("La suma es  " + total );

}

