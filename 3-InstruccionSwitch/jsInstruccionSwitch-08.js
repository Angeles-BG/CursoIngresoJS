function mostrar() {
	let destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Ushuaia":
		case "Bariloche":
			alert("Hace Frio");
			break;

		case "Mar del plata":
		case "Cataratas":
			alert("Hace calor");
			break;
	}

}//FIN DE LA FUNCIÓN