//Angeles Belen García
function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if( edad <13 || edad >17 ){
		alert("La persona no es adolecente ");
	}
	

}//FIN DE LA FUNCIÓN





















/*
	Otra forma es hacer:
	if( !(edad >=13 && edad <=17) ){
		alert("La persona no es adolecente ");
	}
	*/