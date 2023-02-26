/*
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/
/*
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let banderaTemperatura;
	let mayorTemperatutra;
	let mayoresDeEdadSolteros;
	let mujeresSolterasOViudas;
	let personasDeTerceraEdadTemperatura;
	let sumaEdad;
	let cantidadHombresSolteros;
	let promedioEdad;
	let respuesta;
	let nacionalidad; 
	let sumaEdadCasado; 
	let cantidadCasado;  

	banderaTemperatura = 0;
	mayorTemperatutra = 0;
	mayoresDeEdadSolteros = 0;
	mujeresSolterasOViudas = 0;
	personasDeTerceraEdadTemperatura = 0;
	sumaEdad = 0;
	cantidadHombresSolteros = 0;
	respuesta = "si";


	while (respuesta == "si") {
		nombre = prompt("Ingrese su nombre: ");
		edad = parseInt(prompt("Ingrese su edad: "));
		while (isNaN(edad) || edad < 0 || edad > 103) {
			edad = parseInt(prompt("Error- Ingrese su edad: "));
		}
		sexo = prompt("Ingrese su sexo: 'f' o 'm' ");
		while (sexo != "f" && sexo != "m") {
			sexo = prompt("Error- Ingrese su sexo: 'f' o 'm' ");
		}
		estadoCivil = prompt("Ingrese su estado civil: soltero, casado o viudo");
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
			estadoCivil = prompt("Error - Ingrese su estado civil: soltero, casado o viudo");
		}
		temperaturaCorporal = parseFloat(prompt("Ingrese su temperatura corporal: "));
		while (temperaturaCorporal < 35 || temperaturaCorporal > 40) {
			temperaturaCorporal = parseFloat(prompt("Error- Ingrese su temperatura corporal: "));
		}
		nacionalidad = prompt("Ingrese su nacionalidad: argentino o extranjero");
		while (nacionalidad != "argentino" && nacionalidad != "extranjero" ) {
			nacionalidad = prompt("Error - Ingrese su nacionalidad: argentino o extranjero");
		}

		if (banderaTemperatura == 0 || temperaturaCorporal > mayorTemperatutra) {
			mayorTemperatutra = temperaturaCorporal; 
			nacionalidadMayorTemperatura = nacionalidad; 
			banderaTemperatura = 1;
		}
		
		switch (estadoCivil) {
			case "viudo":
				if (sexo == "f") {
					mujeresSolterasOViudas = mujeresSolterasOViudas + 1;
				}
				break;
			case "soltero":
				if (sexo == "f") {
					mujeresSolterasOViudas = mujeresSolterasOViudas + 1;
				}
				if (edad > 17) {
					mayoresDeEdadSolteros = mayoresDeEdadSolteros + 1;
				}
				break;
			case "casado":
				if (sexo == "f") {
					sumaEdadCasado = sumaEdadCasado +edad; 
					cantidadCasado = cantidadCasado +1; 
				}
				break; 
		}

		if (edad > 60 && temperaturaCorporal > 38) {
			personasDeTerceraEdadTemperatura = personasDeTerceraEdadTemperatura + 1;
		}

		respuesta = prompt("¿Quiere ingreser a otra persona? si o no ");
	}

	if (cantidadCasado != 0) {
		promedioEdad = sumaEdadCasado / cantidadCasado;
		console.log("El promedio de edad entre las mujeres casadas es de: " + promedioEdad);
	}else{
		console.log("No hay mujeres casadas")
	}

	console.log("La nacionalidad de la persona con mayor temperatura es: " + nacionalidadMayorTemperatura);
	console.log("La cantidad de mayores de edad solteros es de: " + mayoresDeEdadSolteros);
	console.log("La cantidad de mujeres solteras o viudas es de: " + mujeresSolterasOViudas);
	console.log("La cantidad de personas de la tercera edad que tienen una temperatura mayor a 38 grados es de: " + personasDeTerceraEdadTemperatura);
}*/
/*
Recu 2020 3 bis: /*Vacaciones en Familia" 
Nos ingresan una cantidad indeterminada de estadías de vacaciones, 
validando los datos ingresados:
nombre del pasajero titular, 
destino( “Brasil”, “Caribe” o “Europa”), 
temporada(“alta”,”baja”,“media”),
cantidad de pasajeros que viajan.
Informar:
a)El destino más elegido.
b)El nombre del pasajero titular que lleva menos pasajeros.
c)El promedio de personas, que viajan en temporada alta.
d)El total de personas que viajaron a Europa.
*/
function mostrar()
{
	let nombrePasajero;
	let destino;
	let temporada;
	let cantidadDePasajeros;
	let respuesta;
	let masElegidoDestino;
	let contadorDestinoBrasil;
	let contadorDestinoCaribe;
	let contadorDestinoEuropa;
	let banderaMenosPasajeros;
	let nombreMenosPasajeros;
	let menosPasajeros;
	let promedioTemporadaAlta;
	let acumuladorTemporadaAlta;
	let contadorTemporadaAlta;
	let totalPersonasVijaronEuropa;

	respuesta = "si"; 
	masElegidoDestino;
	contadorDestinoBrasil = 0; 
	contadorDestinoCaribe = 0; 
	contadorDestinoEuropa = 0; 
	banderaMenosPasajeros = 0; 
	nombreMenosPasajeros = 0; 
	menosPasajeros = 0; 
	promedioTemporadaAlta = 0; 
	acumuladorTemporadaAlta = 0; 
	contadorTemporadaAlta = 0; 
	totalPersonasVijaronEuropa = 0; 


	while(respuesta == "si"){
		nombrePasajero = prompt("Ingrese el nombre del pasajero titular: ");
		while (!isNaN(nombrePasajero)){
			nombrePasajero = prompt("Ingrese el nombre del pasajero titular: ");
		}
		destino = prompt("Ingrese el destino al que viaja: (Solo acepta “Brasil”, “Caribe” o “Europa” )");
		while(destino != "Brasil" && destino != "Caribe" && destino != "Europa"){
			destino = prompt("Ingrese el destino al que viaja: (Solo acepta “Brasil”, “Caribe” o “Europa” )");
		}
		temporada = prompt("Ingrese el temporada al que viaja: (Solo acepta “alta”,”baja”,“media” )");
		while(temporada != "alta" && temporada != "baja" && temporada != "media"){
			temporada = prompt("Ingrese el temporada al que viaja: (Solo acepta “alta”,”baja”,“media” )");
		}
		cantidadDePasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros que lleva dicho titular: (solo acepta entre 1 y 10 )"));
		while(isNaN(cantidadDePasajeros) || cantidadDePasajeros<1 || cantidadDePasajeros>10){
			cantidadDePasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros que lleva dicho titular: (solo acepta entre 1 y 10 )"));
		}
		switch(destino){
			case "Brasil":
				contadorDestinoBrasil = contadorDestinoBrasil +1; 
				break; 
			case "Caribe":
				contadorDestinoCaribe = contadorDestinoCaribe +1; 
				break;
			case "Europa":
				contadorDestinoEuropa = contadorDestinoEuropa +1; 
				totalPersonasVijaronEuropa = totalPersonasVijaronEuropa + cantidadDePasajeros +1; 
				break; 
		}
		if(banderaMenosPasajeros == 0 || cantidadDePasajeros < menosPasajeros ){
			menosPasajeros = cantidadDePasajeros; 
			nombreMenosPasajeros = nombrePasajero;
			banderaMenosPasajeros = 1; 
		}
		if (temporada == "alta"){
			acumuladorTemporadaAlta = acumuladorTemporadaAlta + cantidadDePasajeros +1; 
			contadorTemporadaAlta = contadorTemporadaAlta +1; 
		}

		respuesta = prompt("¿Desea ingresar mas datos? si o no "); 

	}//Fin While 

	if (contadorDestinoBrasil>contadorDestinoCaribe){
		if (contadorDestinoBrasil>contadorDestinoEuropa){
			masElegidoDestino = "Brasil"; 
		}else{
			masElegidoDestino = "Europa"; 
		}
	}else if (contadorDestinoCaribe>contadorDestinoEuropa){
		masElegidoDestino = "Caribe"; 
	}else{
		masElegidoDestino = "Europa" ; 
	}

	if(contadorTemporadaAlta !=0){
		promedioTemporadaAlta = acumuladorTemporadaAlta / contadorTemporadaAlta; 
		console.log("El promedio de personas que viajan en temporada alta es: "+promedioTemporadaAlta); 
	}
	console.log("El destino mas elegido fue: "+ masElegidoDestino); 
	console.log("El nombre del pasajero titular que lleva menos pasajeros es: "+nombreMenosPasajeros); 
	if (totalPersonasVijaronEuropa !=0){
		console.log("El total de personas que viajaron a Europa es: "+totalPersonasVijaronEuropa); 
	}
	
}

