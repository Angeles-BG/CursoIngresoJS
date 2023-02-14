//Angeles Belen Garcia
function mostrar() {
	let estacionIngresada;
	let destino;
	let mensaje;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacionIngresada) {

		case "Invierno":
			switch (destino) {
				case "Bariloche":
					mensaje = "se viaja";
					break;	
			    default: 
					mensaje = "No se viaja";
					break;
			}
			break;
		case "Verano":
			switch (destino) {
				case "Bariloche":
				case "Cordoba":
					mensaje = "No se viaja";
					break;
				case "Cataratas":
				case "Mar del plata":
					mensaje = "se viaja";
					break;
			}
			break;
		case "Primavera":
			switch (destino) {
				case "Bariloche":
					mensaje = "No se viaja";
					break;
				default:
					mensaje = "se viaja";
					break;
			}
			break;
		case "Otoño":
			mensaje = "se viaja";
			break;
	}
	alert(mensaje);


}//FIN DE LA FUNCIÓN