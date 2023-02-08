/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var intentos = 0;

function comenzar()
{
	
	let max = 100;
	let min = 1;
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.ceil(Math.random() * max - min );
	console.log(numeroSecreto); 
}

function verificar()
{
	let numeroIngresado; 
	let mensaje;
	intentos += 1; 
	numeroIngresado = parseInt(document.getElementById("txtIdNumero").value) ; 
	
	if (numeroIngresado == numeroSecreto){ 
		if (intentos == 1){
			mensaje = "usted es un Psíquico";
			intentos = 0; 
		}else if ( intentos == 2){
			mensaje = "excelente percepción";
			intentos = 0; 
		}else if (intentos == 3){
			mensaje = "Esto es suerte";
			intentos = 0; 
		}else if (intentos == 4){
			mensaje = "Excelente técnica ";
			intentos = 0; 
		}else if (intentos == 5){
			mensaje = "usted está en la media ";
			intentos = 0; 
		}else if (intentos > 6 && intentos <= 10 ){
			mensaje = "falta técnica";
			intentos = 0; 
		}else{
			mensaje = "afortunado en el amor!!";
			intentos = 0; 
		}
	}else {
		mensaje = "Suerte la proxima";
	}

	document.getElementById("txtIdIntentos").value = intentos; 
	alert(mensaje); 

}