//Angeles Belen Garcia
function mostrar() {

	let destinoIngresado;
	let mensaje;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
			mensaje = "Se encuetra al Oeste del pais";
			break;
		case "Ushuaia":
			mensaje = " Se encuentra al Sur del pais";
			break;
		case "Cataratas":
			mensaje = "Se encuentra al Norte del pais";
			break;
		case "Mar del plata":
			mensaje = "Se encuentra al Este del pais";
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN