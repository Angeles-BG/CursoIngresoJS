function mostrar()
{
	//Declaro variables
	let edad;
	//Tomo el dato y lo parseo. 
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//Escribo la condición que se tiene que cumplir para que salga el mensaje. 
	if( edad >= 18){
		alert("La persona es mayor de edad. ");
	}
	

}//FIN DE LA FUNCIÓN