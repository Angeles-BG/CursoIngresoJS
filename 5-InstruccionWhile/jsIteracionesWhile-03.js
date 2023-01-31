/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada !== "utn750"){
		claveIngresada = prompt("ingrese el número clave.");
	}
	alert("correcto");
	
}//FIN DE LA FUNCIÓN
