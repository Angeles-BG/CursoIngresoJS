/*
Una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
-en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata 
tiene un descuento del 20% 
-en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata 
tiene un aumento del 20%
-en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata 
tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
//Angeles Belen Garcia
function mostrar() {
	let estacionIngresada;
	let destino;
	let base;
	let porcentaje;
	let preciofinal;
	let calculoPorciento;
	let mensaje;
	
	base = 15000;
	porcentaje = 0;
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;


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
				case "Cordoba":
					porcentaje = 0;
					break;
			    default:
					porcentaje = 10;
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