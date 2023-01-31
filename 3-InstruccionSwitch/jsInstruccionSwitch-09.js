function mostrar() {
	let estacionIngresada = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;
	const BASE = 15000;
	let aumento;
	let descuento;
	let preciofinal;


	switch (estacionIngresada) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					aumento = BASE * 20 / 100;
					preciofinal = aumento + BASE;
					alert("El precio de su estadia es de $ " + preciofinal);
					break;
				case "Cataratas":
				case "Cordoba":
					descuento = BASE * 10 / 100;
					preciofinal = BASE - descuento;
					alert("El precio de su estadia es de $ " + preciofinal);
					break;
				case "Mar del plata":
					descuento = BASE * 20 / 100;
					preciofinal = BASE - descuento;
					alert("El precio de su estadia es de $ " + preciofinal);
					break;

			}
			break;

		case "Verano":
			switch (destino) {
				case "Bariloche":
					descuento = BASE * 20 / 100;
					preciofinal = BASE - descuento;
					alert("El precio de su estadia es de $ " + preciofinal);
					break;
				case "Cataratas":
				case "Cordoba":
					aumento = BASE * 10 / 100;
					preciofinal = aumento + BroadcastChannel;
					alert("El precio de su estadia es de $ " + preciofinal);
					break;
				case "Mar del plata":
					aumento = BASE * 20 / 100;
					preciofinal = aumento + BASE;
					alert("El precio de su estadia es de $ " + preciofinal);
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch (destino) {
				case "Cataratas":
				case "Mar del plata":
				case "Bariloche":
					aumento = BASE * 10 / 100;
					preciofinal = aumento + BASE;
					alert("El precio de su estadia es de $ " + preciofinal);
					break;
				case "Cordoba":
					alert("El precio de su estadia es de $ " + BASE);
					break;
			}
			break;

	}

}//FIN DE LA FUNCIÓN