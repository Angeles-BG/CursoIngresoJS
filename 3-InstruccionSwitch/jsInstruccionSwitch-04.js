//Angeles Belen Garcia
function mostrar() {
	let mes;
	let mensaje;
	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Febrero":
			mensaje = " Este mes no tiene 28 o 29 días.";
			break;
		case "Enero":
		case "Abril":
		case "Junio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = "Este mes tiene 31 días";
			break;
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Este mes tiene 30 días";
			break;
		//cuando el programa no entra a ningun case por defecto entrara a este. 
		default:
			mensaje = "debe seleccionar un mes valido";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN