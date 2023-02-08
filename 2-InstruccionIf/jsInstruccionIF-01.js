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
*/

/*
Ejercicio 1 bis bis: con if
ingresar el nombre y los datos requeridos para calcular el IMC , 
e informar a la persona si es:
Bajo peso <18.5
Peso normal 18,5-24.9
Preobesidad 25-26.9
Obesidad I 27-29.9
Obesidad II 30-34.9
Obesidad III >40
*/
function mostrar() {
	let nombre;
	let peso;
	let altura;
	let imc;
	let mensaje;

	nombre = document.getElementById("txtIdEdad").value;
	peso = prompt("¿Cual es su peso? en Kg");
	altura = prompt("¿Cual es su altura? en cm");

	peso = parseFloat(peso);
	altura = parseFloat(altura);

	imc = peso / (altura * altura);
	imc = imc.toFixed(1); 

	if (imc < 18.5) {
		mensaje = nombre + " su IMC es: " + imc + " Bajo peso";
	} else if (imc <= 24.9) {
		mensaje = nombre + " su IMC es: " + imc + " Peso normal ";
	} else if (imc >= 25 && imc <= 26.9) {
		mensaje = nombre + " su IMC es: " + imc + " Preobesidad";
	} else if (imc >= 27 && imc <= 29.9) {
		mensaje = nombre + " su IMC es: " + imc +  "Obesidad I ";
	} else if (imc >= 30 && imc <= 34.9) {
		mensaje = nombre + " su IMC es: " + imc + " Obesidad II ";
	} else if (imc > 40) {
		mensaje = nombre + " su IMC es: " + imc + " Obesidad III ";
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN
