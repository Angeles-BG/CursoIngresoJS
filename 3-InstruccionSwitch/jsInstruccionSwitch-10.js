function mostrar() {
	let estacionIngresada = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;

	switch (estacionIngresada) {

		case "Invierno":
			switch (destino) {
				case "Cataratas":
				case "Cordoba":
				case "Mar del plata":
					alert("No se viaja");
					break;
				case "Bariloche":
					alert("se viaja");
					break;
			}
			break;
		case "Verano":
			switch (destino) {
				case "Bariloche":
				case "Cordoba":
					alert("No se viaja");
					break;

				case "Cataratas":
				case "Mar del plata":
					alert("se viaja");
					break;
			}
			break;
		case "Primavera":
			switch (destino) {
				case "Bariloche":
					alert("No se viaja");
					break;
				case "Cordoba":
				case "Cataratas":
				case "Mar del plata":
					alert("se viaja");
					break;
			}
			break;
		case "Otoño":
			switch (destino) {
				case "Bariloche":
				case "Cordoba":
				case "Cataratas":
				case "Mar del plata":
					alert("se viaja");
					break;
			}
			break;

	}


}//FIN DE LA FUNCIÓN