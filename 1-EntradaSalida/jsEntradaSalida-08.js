/*
García Ángeles Belén. 
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declaro variables.
	let dividendo;
	let divisor;
	let total;

	//guardo, lo ingresado por el usuario en las caja de texto, en las variables correspondientes. 
	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;
    
	//transformo lo ingresado en la caja de texto a numero entero, hago el modulo de los numeros y los almaceno en una nueva variable el modulo.  
	dividendo= parseInt(dividendo);
	divisor = parseInt(divisor);
	total = dividendo % divisor;

	//muestro mediante un alert el modulo.
	alert("El resto es  " + total );
}
