//Angles Belen Garcia
function mostrar() {

	let mensaje;
	let horaDelDia;
	horaDelDia = parseInt(document.getElementById("txtIdHora").value);

	switch (horaDelDia) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana.";
			break;
		default:
			mensaje = "No tengo la hora asignada";
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN