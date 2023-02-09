//Angeles Belen Garcia
function mostrar()
{
	let mes;
	let mensaje; 
	mes = document.getElementById("txtIdMes").value;
	
switch(mes){
	case "Febrero": 
		mensaje = " Este mes no tiene más de 29 días.";
	break;
	case "Enero": 
	case "Marzo": 
	case "Abril": 
	case "Mayo": 
	case "Junio": 
	case "Julio": 
	case "Agosto": 
	case "Septiembre": 
	case "Octubre": 
	case "Noviembre": 
	case "Diciembre": 
		mensaje = "Este mes tiene 30 o más días";
	break;
//cuando el programa no entra a ningun case por defecto entrara a este. 
	default: 
		mensaje = "debe seleccionar un mes valido";
	break;
} 
alert(mensaje);

}//FIN DE LA FUNCIÓN