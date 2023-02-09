//Angeles Belen Garcia
function mostrar() {
	let estacionIngresada;
	let destino;
	let base;
	let porcentaje;
	let preciofinal;
	let calculoPorciento;
	let mensaje;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	base = 15000;
	porcentaje = 0;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					porcentaje = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = -10;
					break;
				case "Mar del plata":
					porcentaje = -20;
					break;
			}
			break;
		case "Verano":
			switch (destino) {
				case "Bariloche":
					porcentaje = -20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = 10;
					break;
				case "Mar del plata":
					porcentaje = 20;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch (destino) {
				case "Cataratas":
				case "Mar del plata":
				case "Bariloche":
					porcentaje = 10;
					break;
				case "Cordoba":
					porcentaje = 0;
					break;
			}
			break;
	}
	if (porcentaje == 0) {
		mensaje = "El precio final de su viaje sera de $" + base;
	} else {
		calculoPorciento = base * porcentaje / 100;
		preciofinal = base + calculoPorciento;
		mensaje = "El precio final de su viaje sera de $" + preciofinal;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN