/*
Angeles Belen Garcia. 
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;

	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));

	while( isNaN(numeroIngresado) || numeroIngresado > 10 || numeroIngresado < -1 ){
		numeroIngresado = prompt("Error. ingrese un número entre 0 y 9.");
	}
	
	document.getElementById("txtIdNumero").value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN