//García ángeles Belén 
function mostrar() {
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18) {
		alert("La persona es mayor de edad");
	}
	else if (edad >= 13) {
		alert("La persona es adolecente");
	}
	else {
		alert("La persona es un niño");
	}



}//FIN DE LA FUNCIÓN