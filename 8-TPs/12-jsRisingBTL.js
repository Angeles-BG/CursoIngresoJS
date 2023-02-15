/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar 
una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas)
 y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	let edad;
	let sexo;
	let estadoCivil;
	let sueldoBruto;
	let numeroLegajo;
	let nacionalidad;

	//Edad, entre 18 y 90 años inclusive.
	edad = parseInt(prompt("Ingrese su edad")); 
	while(isNaN(edad) || edad<18 || edad>90 || edad == "")
	{
		edad = parseInt(prompt("Error-debe ser mayor de 18. Ingrese su edad")); 
	}
	document.getElementById("txtIdEdad").value = edad;

	//Sexo, “M” para masculino y “F” para femenino
	sexo = prompt("Ingrese su sexo: “M” para masculino y “F” para femenino");
	while(sexo !="M" && sexo != "F" && sexo != "m" && sexo != "f" ){
		sexo = prompt("Error-ingrese un sexo valido: “M” para masculino y “F” para femenino");
	}
	document.getElementById("txtIdSexo").value = sexo;

	//Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
	estadoCivil = parseInt(prompt("Ingrese su estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
	while (isNaN(estadoCivil) || estadoCivil <1 || estadoCivil>4 || estadoCivil == ""){
		estadoCivil = parseInt(prompt(" Error-estado civil invalido. Ingrese su estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
	}
	document.getElementById("txtIdEstadoCivil").value = estadoCivil;

	//Sueldo bruto, no menor a 8000.
	sueldoBruto = parseFloat(prompt("Ingrese su suedo bruto: "));
	while(isNaN(sueldoBruto) || sueldoBruto<8000 || sueldoBruto == ""){
		sueldoBruto = parseFloat(prompt("Error-Su sueldo bruto no puede ser menor a 8000. Ingrese su suedo bruto: "));
	}
	document.getElementById("txtIdSueldo").value = sueldoBruto;

	//Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
	numeroLegajo = parseInt(prompt("Ingrse su numero de legajo: "));
	while(isNaN(numeroLegajo) || numeroLegajo.length == 4 ){
		numeroLegajo = parseInt(prompt("Error-el numero debe ser valido. Ingrse su numero de legajo: "));
	}
	document.getElementById("txtIdLegajo").value = numeroLegajo;

	//Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
	nacionalidad = prompt("Ingrese su nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
	while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N" && nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n" && nacionalidad == ""){
		nacionalidad = prompt("Error-Debe ser una nacionalidad valida. Ingrese su nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
	}
	document.getElementById("txtIdNacionalidad").value = nacionalidad;

}
