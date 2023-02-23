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

		if (edad > 18 && estadoCivil == "viudo") {
			mayoresDeEdadViudos = mayoresDeEdadViudos + 1;
		}

		if (sexo == "m" && (estadoCivil == "soltero" || estadoCivil == "viudo")) {
			hombresSolterosoViudos = hombresSolterosoViudos + 1;
		}

		if (edad > 60 && temperaturaCorporal > 38) {
			personasDeTerceraEdadTemperatura = personasDeTerceraEdadTemperatura + 1;
		}

		if (sexo == "m" && estadoCivil == "soltero") {
			sumaEdad = sumaEdad + edad;
			cantidadHombresSolteros = cantidadHombresSolteros +1;
		}

		respuesta = prompt("¿Quiere ingreser a otra persona? si o no "); 
	}

	promedioEdad = sumaEdad /cantidadHombresSolteros; 
	console.log("La persona con mas temperatura es: "+ nombreMayorTemperatura);
	console.log("La cantidad de mayores de edad viudos es de: "+ mayoresDeEdadViudos);
	console.log("La cantidad de hombres solteros o viudos es de: "+ hombresSolterosoViudos);
	console.log("La cantidad de personas de la tercera edad que tienen una temperatura mayor a 38 grados es de: " + personasDeTerceraEdadTemperatura);
	console.log("El promedio de edad entre los hombres solteros es de: "+ promedioEdad); 

}
