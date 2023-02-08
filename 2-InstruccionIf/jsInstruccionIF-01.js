//Angeles Belen García
/*
function mostrar()
{
	let edad; 

	//tomo la edad  
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if( edad == 15){
		alert("niña bonita");
	}

}//FIN DE LA FUNCIÓN
*/

/*Ejercicio 1bis: /con if
pedir a una persona que fue de vaciones , 
la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento 
hata 80km/h= lento 
hasta 100= buen ritmo
hasta 120= ahi de la ley 
mas = eso no se hace/
*/
function mostrar()
{
	let distancia; 
	let tiempo; 
	let velocidad; 
	let mensaje; 

	distancia = parseInt(document.getElementById("txtIdEdad").value);
	tiempo = prompt("¿Cuanto tiempo tardo en viajar a esa distancia?");
	tiempo = parseInt(tiempo);

	velocidad = distancia / tiempo; 

	if( velocidad <= 60 ){
		mensaje = "hizo: " + velocidad + "Km/hr fue muy lento"; 
	}else if (velocidad <= 80 ){
		mensaje = "hizo: " + velocidad + "Km/hr fue lento"; 
	}else if (velocidad <= 100){
		mensaje = "hizo: " + velocidad + "Km/hr fue a buen ritmo"; 
	}else if (velocidad <= 120 ){
		mensaje = "hizo: " + velocidad + "Km/hr fue ahi de la ley"; 
	}else {
		mensaje = "hizo: " + velocidad + "Km/hr eso no se hace"; 
	}
	alert(mensaje); 

}//FIN DE LA FUNCIÓN