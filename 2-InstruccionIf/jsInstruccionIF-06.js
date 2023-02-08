//García ángeles Belén 
function mostrar() {
	let edad;
	let mensaje; 
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18) {
		mensaje = "La persona es mayor de edad";
	}
	else if (edad >= 13) {
		mensaje = "La persona es adolecente";
	}
	else {
		mensaje = "La persona es un niño";
	}
	alert(mensaje); 



}//FIN DE LA FUNCIÓN