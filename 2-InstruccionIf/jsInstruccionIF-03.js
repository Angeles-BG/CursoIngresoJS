//Angeles Belen García
function mostrar()
{
	//declaro variables
	let edad;
	let mensaje; 
	//tomo el dato y lo parseo. 
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//escribo la condición a cumplir. 
	if( edad >= 18){
	  mensaje = "La persona es mayor de edad. ";
	}else{ //escribo lo que pasa si la condición no se cumple. 
	    mensaje = "La persona es menor de edad. ";
	}
	alert(mensaje); 
	

}//FIN DE LA FUNCIÓN