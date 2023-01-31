function mostrar()
 {
	
	let destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
			alert("Se encuetra al Oeste del pais");
			break;
		case "Ushuaia":
			alert(" Se encuentra al Sur del pais");
			break;
		case "Cataratas":
			alert("Se encuentra al Norte del pais");
			break;
		case "Mar del plata":
			alert("Se encuentra al Este del pais");
			break;
	}

}//FIN DE LA FUNCIÓN