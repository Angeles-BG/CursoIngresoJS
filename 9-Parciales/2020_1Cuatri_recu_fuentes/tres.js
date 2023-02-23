/*
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/
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
 /*
a)la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
 */
	console.log("La nacionalidad de la persona con mayor temperatura es: " + nacionalidadMayorTemperatura);
	console.log("La cantidad de mayores de edad solteros es de: " + mayoresDeEdadSolteros);
	console.log("La cantidad de mujeres solteras o viudas es de: " + mujeresSolterasOViudas);
	console.log("La cantidad de personas de la tercera edad que tienen una temperatura mayor a 38 grados es de: " + personasDeTerceraEdadTemperatura);
}
