//Angeles Belen García
function mostrar()
{
	//declaro variables
	let edad;
	//tomo el dato y lo parseo. 
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//escribo la condición a cumplir. 
	if( edad >= 18){
		alert("La persona es mayor de edad. ");
	}else{ //escribo lo que pasa si la condición no se cumple. 
		alert("La persona es menor de edad. ");
	}
	

}//FIN DE LA FUNCIÓN