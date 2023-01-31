function mostrar()
{
	let mes = document.getElementById("txtIdMes").value;
	
switch(mes){
	case "Febrero": 
	alert(" Este mes no tiene más de 29 días.");
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
	alert( "Este mes tiene 30 o más días");
	break;
//cuando el programa no entra a ningun case por defecto entrara a este. 
	default: 
	alert("debe seleccionar un mes valido");
} 

}//FIN DE LA FUNCIÓN