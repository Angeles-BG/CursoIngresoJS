//Ángeles Belén García 
function mostrar()
{
	//tomo el mes
	let mes;
	let mensaje;
	mes = document.getElementById("txtIdMes").value;
	 
	
	switch(mes){
		case "Enero": 
			mensaje = "que comiences bien el año!!!.";
		break;
		case "Marzo": 
			mensaje = "a clases!!!.";
		break;
		case "Julio":
		 	mensaje = "se vienen las vacaciones!!!.";
		break;
		case "Diciembre": 
			mensaje = "Felices fiesta!!!.";
		break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN