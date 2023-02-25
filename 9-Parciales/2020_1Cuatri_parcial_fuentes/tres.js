/*
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
/*
function mostrar() {
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let banderaTemperatura;
	let mayorTemperatutra;
	let nombreMayorTemperatura;
	let mayoresDeEdadViudos;
	let hombresSolterosoViudos;
	let personasDeTerceraEdadTemperatura;
	let sumaEdad;
	let cantidadHombresSolteros;
	let promedioEdad;
	let respuesta;

	banderaTemperatura = 0;
	mayorTemperatutra = 0;
	nombreMayorTemperatura = 0;
	mayoresDeEdadViudos = 0;
	hombresSolterosoViudos = 0;
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

		if (banderaTemperatura == 0 || temperaturaCorporal > mayorTemperatutra) {
			mayorTemperatutra = temperaturaCorporal;
			nombreMayorTemperatura = nombre;
			banderaTemperatura = 1;
		}

		switch (estadoCivil) {
			case "viudo":
				if (edad > 17) {
					mayoresDeEdadViudos = mayoresDeEdadViudos + 1;
				}
				if (sexo == "m") {
					hombresSolterosoViudos = hombresSolterosoViudos + 1;
				}
				break;
			case "soltero":
				if (sexo == "m") {
					hombresSolterosoViudos = hombresSolterosoViudos + 1;
					sumaEdad = sumaEdad + edad;
					cantidadHombresSolteros = cantidadHombresSolteros + 1;
				}
				break;
		}

		if (edad > 60 && temperaturaCorporal > 38) {
			personasDeTerceraEdadTemperatura = personasDeTerceraEdadTemperatura + 1;
		}

		respuesta = prompt("¿Quiere ingreser a otra persona? si o no ");
	}

	if (cantidadHombresSolteros != 0) {
		promedioEdad = sumaEdad / cantidadHombresSolteros;
		console.log("El promedio de edad entre los hombres solteros es de: " + promedioEdad);
	}else{
		console.log("No hay solteros")
	}

	console.log("La persona con mas temperatura es: " + nombreMayorTemperatura);
	console.log("La cantidad de mayores de edad viudos es de: " + mayoresDeEdadViudos);
	console.log("La cantidad de hombres solteros o viudos es de: " + hombresSolterosoViudos);
	console.log("La cantidad de personas de la tercera edad que tienen una temperatura mayor a 38 grados es de: " + personasDeTerceraEdadTemperatura);

}
*/
/*
Parcial 2020 3 bis:  "Mapa Mundi"
Realizar el algoritmo que permita ingresar 5 paises: 
Usar For
el continente (validar entre America , Asia , Europa ,Africa y Oceania) 
Usar While
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
Usar While
el nivel de pobresa entre (pobre, rico, millonario) en europa no hay paises pobre(validar)
Usar While
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
Usar While
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.
*/
function mostrar() {
	let continente;
	let nombrePais;
	let cantidadHabitantes;
	let nivelDepobresa;
	let temperaturaMinima;
	let contadorTemperaturasPares;
	let contadorTemperaturasImpares;
	let menosHabitantes;
	let nombreMenosHabitantes;
	let cantidadPaisesMasCuarenta;
	let cantidadPaisesAmericaMenosCero;
	let acumuladorHabitantes; 
	let promedioHabitantes;
	let acumuladorHabitantesMasCuarenta; 
	let promedioHabitantesMasCuarenta;
	let temperaturaMasBaja;
	let nombreTemperaturaMasBaja;
	let banderaTempraturaMasBaja;
	let continenteConMasHabitantes;
	let banderaMenosHabitantes; 
	let contadorHabitantesEuropa;
	let contadorDeHabitantesAsia;
	let contadorDeHabitantesOceania;
	let contadorDeHabitantesAmerica; 
	let contadorDeHabitantesAfrica; 

	contadorTemperaturasPares = 0;
	contadorTemperaturasImpares = 0;
	menosHabitantes = 0;
	nombreMenosHabitantes = 0;
	cantidadPaisesMasCuarenta = 0;
	cantidadPaisesAmericaMenosCero = 0;
	promedioHabitantes = 0;
	promedioHabitantesMasCuarenta = 0;
	temperaturaMasBaja = 0;
	nombreTemperaturaMasBaja = 0;
	banderaTempraturaMasBaja = 0;
	continenteConMasHabitantes = 0;
	banderaMenosHabitantes = 0; 
	acumuladorHabitantes = 0; 
	acumuladorHabitantesMasCuarenta = 0 ;  
	contadorHabitantesEuropa = 0; 
	contadorDeHabitantesAsia = 0; 
	contadorDeHabitantesOceania = 0; 
	contadorDeHabitantesAmerica = 0;
	contadorDeHabitantesAfrica = 0;   

	for (let i = 0; i < 5; i++) {
		continente = prompt("Ingrese el nombre del continente: (solo se acepta America , Asia , Europa ,Africa y Oceania)");
		while (continente != "America" && continente != "Asia" && continente != "Europa" && continente != "Africa" && continente != "Oceania") {
			continente = prompt("Ingrese el nombre del continente: (solo se acepta America , Asia , Europa ,Africa y Oceania)");
		}//Fin While CONTINENTE
		nombrePais = prompt("Ingrese el nombre del pais: ");
		while (!isNaN(nombrePais)) {
			nombrePais = prompt("Ingrese el nombre del pais: ");
		}//Fin While NOMBRE PAIS
		cantidadHabitantes = parseInt(prompt("Ingrese la cantidad de habitantes: (Solo se acepta en millones entre 1 y 7000 )"));
		while (isNaN(cantidadHabitantes) || cantidadHabitantes < 1 || cantidadHabitantes > 7000) {
			cantidadHabitantes = parseInt(prompt("Ingrese la cantidad de habitantes: (Solo se acepta en millones entre 1 y 7000 )"));
		}//Fin While CANTIDAD HABITANTES
		temperaturaMinima = parseFloat(prompt("Ingrese la temperatura minima rersgistrada: (solo se acepta entre -50 y 50)"));
		while(isNaN(temperaturaMinima) || temperaturaMinima < -50 || temperaturaMinima > 50){
			temperaturaMinima = parseFloat(prompt("Ingrese la temperatura minima rersgistrada: (solo se acepta entre -50 y 50)"));
		}//Fin While TEMPERATURA MINIMA
		switch (continente) {
			case "Europa":
				nivelDepobresa = prompt("Ingrese el nivel de pobresa: (solo se acepta  rico o millonario)");
				while (nivelDepobresa != "rico" && nivelDepobresa != "millonario") {
					nivelDepobresa = prompt("Ingrese el nivel de pobresa: (solo se acepta rico o millonario)");
				}//Fin While NIVEL DE POBRESA
				if (temperaturaMinima % 2 != 0){
					contadorTemperaturasImpares = contadorTemperaturasImpares +1; 
				}//Fin If TEMPERATURAS IMPARES EUROPA
				contadorHabitantesEuropa = contadorHabitantesEuropa + menosHabitantes; 
				break;
			case "America":
				nivelDepobresa = prompt("Ingrese el nivel de pobresa: (solo se acepta pobre, rico, millonario)");
				while (nivelDepobresa != "pobre" && nivelDepobresa != "rico" && nivelDepobresa != "millonario") {
					nivelDepobresa = prompt("Ingrese el nivel de pobresa: (solo se acepta pobre, rico, millonario)");
				}//Fin While NIVEL DE POBRESA
				if (temperaturaMinima<0 ){
					cantidadPaisesAmericaMenosCero = cantidadPaisesAmericaMenosCero +1; 
				}//Fin If TEMPERATURA AMERICA MENOS CERO GRADOS
				contadorDeHabitantesAmerica = contadorDeHabitantesAmerica + cantidadHabitantes; 
				break; 
			case "Asia":
				nivelDepobresa = prompt("Ingrese el nivel de pobresa: (solo se acepta pobre, rico, millonario)");
				while (nivelDepobresa != "pobre" && nivelDepobresa != "rico" && nivelDepobresa != "millonario") {
					nivelDepobresa = prompt("Ingrese el nivel de pobresa: (solo se acepta pobre, rico, millonario)");
				}//Fin While NIVEL DE POBRESA
				contadorDeHabitantesAsia =  contadorDeHabitantesAsia + cantidadHabitantes; 
				break; 
			case "Oceania":
				nivelDepobresa = prompt("Ingrese el nivel de pobresa: (solo se acepta pobre, rico, millonario)");
				while (nivelDepobresa != "pobre" && nivelDepobresa != "rico" && nivelDepobresa != "millonario") {
					nivelDepobresa = prompt("Ingrese el nivel de pobresa: (solo se acepta pobre, rico, millonario)");
				}//Fin While NIVEL DE POBRESA
				contadorDeHabitantesOceania = contadorDeHabitantesOceania + cantidadHabitantes; 
				break; 
			case "Africa":
				nivelDepobresa = prompt("Ingrese el nivel de pobresa: (solo se acepta pobre, rico, millonario)");
				while (nivelDepobresa != "pobre" && nivelDepobresa != "rico" && nivelDepobresa != "millonario") {
					nivelDepobresa = prompt("Ingrese el nivel de pobresa: (solo se acepta pobre, rico, millonario)");
				}//Fin While NIVEL DE POBRESA
				contadorDeHabitantesAfrica = contadorDeHabitantesAfrica + cantidadHabitantes; 
				break;
		}//Fin Switch CONTINENTE
		
		if (temperaturaMinima % 2 == 0){
			contadorTemperaturasPares = contadorTemperaturasPares +1;
		}// Fin If TEMPERATURAS PARES 

		if(banderaMenosHabitantes == 0 || cantidadHabitantes < menosHabitantes){
			menosHabitantes = cantidadHabitantes;
			nombreMenosHabitantes = nombrePais;
			banderaMenosHabitantes = 1; 
		}//Fin If MENOS HABITANTES

		if (temperaturaMinima > 40){
			cantidadPaisesMasCuarenta = cantidadPaisesMasCuarenta +1; 
			acumuladorHabitantesMasCuarenta = acumuladorHabitantesMasCuarenta + cantidadHabitantes; 
		}//Fin If TEMPERATURA MAS CUARENTA

		if (banderaTempraturaMasBaja == 0 || temperaturaMinima < temperaturaMasBaja){
			temperaturaMasBaja = temperaturaMinima;
			nombreTemperaturaMasBaja = nombrePais;
			banderaTempraturaMasBaja = 1; 
		}//Fin If TEMPERATURA MAS BAJA

		acumuladorHabitantes = acumuladorHabitantes + cantidadHabitantes; 

	}//Fin For

	if (contadorHabitantesEuropa>contadorDeHabitantesAmerica ){
		if(contadorHabitantesEuropa>contadorDeHabitantesAsia){
			if (contadorHabitantesEuropa>contadorDeHabitantesOceania){
				if (contadorHabitantesEuropa>contadorDeHabitantesAfrica){
					continenteConMasHabitantes = "Europa"; 
				}else{
					continenteConMasHabitantes = "Africa"; 
				}
			}else if(contadorDeHabitantesOceania>contadorDeHabitantesAfrica){
				continenteConMasHabitantes = "Oceania";
			}else{
				continenteConMasHabitantes = "Africa"; 
			}
		}else if(contadorDeHabitantesAsia>contadorDeHabitantesOceania){
			if(contadorDeHabitantesAsia>contadorDeHabitantesAfrica){
				continenteConMasHabitantes = "Asia";
			}else {
				continenteConMasHabitantes = "Africa";
			}
		}else if (contadorDeHabitantesOceania>contadorDeHabitantesAfrica){
			continenteConMasHabitantes = "Oceania";
		}else{
			continenteConMasHabitantes = "Africa"; 
		}
	}else if (contadorDeHabitantesAmerica >contadorDeHabitantesAsia){
		if (contadorDeHabitantesAmerica >contadorDeHabitantesOceania){
			if (contadorDeHabitantesAmerica >contadorDeHabitantesAfrica){
				continenteConMasHabitantes = "America" ;
			}else {
				continenteConMasHabitantes = "Africa"; 
			}
		}else if (contadorDeHabitantesOceania>contadorDeHabitantesAfrica){
			continenteConMasHabitantes = "Oceania";
		}else{
			continenteConMasHabitantes = "Africa"; 
		}
	}else if (contadorDeHabitantesAsia>contadorDeHabitantesOceania){
		if(contadorDeHabitantesAsia>contadorDeHabitantesAfrica){
			continenteConMasHabitantes = "Asia";
		}else{
			continenteConMasHabitantes = "Africa"; 
		}
	}else if(contadorDeHabitantesOceania>contadorDeHabitantesAfrica){
		continenteConMasHabitantes = "Oceania";
	}else{
		continenteConMasHabitantes = "Africa"; 
	}

	
	promedioHabitantes = acumuladorHabitantes / 5 ; 
	promedioHabitantesMasCuarenta = acumuladorHabitantesMasCuarenta / cantidadPaisesMasCuarenta; 

	console.log("La cantidad de temperaturas pares es: " + contadorTemperaturasPares);
	console.log("La cantidad de temperaturas impares de europa es: " +contadorTemperaturasImpares); 
	console.log("El nombre del pais con menos habitantes es: "+nombreMenosHabitantes); 
	console.log("La cantidad de paises que superan los 40 grados  es: "+cantidadPaisesMasCuarenta); 
	console.log("La cantidad de paises de america que tienen menos de 0 grados es: "+ cantidadPaisesAmericaMenosCero); 
	console.log("El promedio de habitantes entre los paises ingresados es: "+ promedioHabitantes); 
	console.log("El promedio de habitantes entre los paises que superan los 40 grados es: "+promedioHabitantesMasCuarenta); 
	console.log("La temperatura mínima ingresada es: " + temperaturaMasBaja +", y nombre del pais que registro esa temperatura es:  "+nombreTemperaturaMasBaja); 
	console.log("El continente que tiene mas habitanteses: "+continenteConMasHabitantes); 


}