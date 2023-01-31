function mostrar()
{
	let mes = document.getElementById("txtIdMes").value;
	
switch(mes){
	case "Febrero": 
	alert(" Este mes no tiene 28 o 29 días.");
	break;
	case "Enero": 
    case "Abril": 
    case "Junio": 
    case "Agosto": 
    case "Octubre": 
    case "Diciembre": 
	alert( "Este mes tiene 31 días");
	break;
	case "Marzo": 
	case "Mayo": 
	case "Julio": 
	case "Septiembre": 
	case "Noviembre": 
	alert( "Este mes tiene 30 días");
	break;
//cuando el programa no entra a ningun case por defecto entrara a este. 
	default: 
	alert("debe seleccionar un mes valido");
} 
	
	



}//FIN DE LA FUNCIÓN