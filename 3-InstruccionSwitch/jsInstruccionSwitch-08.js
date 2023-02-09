//Angeles Belen Garcia
function mostrar() {
	let destinoIngresado;
	let mensaje;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Ushuaia":
		case "Bariloche":
			mensaje = "Hace Frio";
		break;
		case "Mar del plata":
		case "Cataratas":
			mensaje = "Hace calor";
		break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN