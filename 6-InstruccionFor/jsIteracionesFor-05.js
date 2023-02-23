/*
Angeles Belen Garcia
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/
/*
function mostrar()
{
	let numero; 

	for (let i = 0; numero != 9; i++){
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
		numero = parseInt(prompt("Error. Ingrese un numero: "));
		}
	}
	alert("muy bien debia ingresar el 9"); 
/*
	while(numero !=9){
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
		numero = parseInt(prompt("Error. Ingrese un numero: "));
		}
	}
	alert("muy bien debia ingresar el 9"); 


}//FIN DE LA FUNCIÓN
*/
/*
For 5 bis, Realizar el programa que permita el ingreso de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m” o "b") de 7 alumnos, informar por console.log: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) La cantidad de alumnos desaprobados (nota < 4)
*/
function mostrar() {
	let notaAlumno;
	let sexoAlumno;
	let totalDeNotas;
	let notaMasBaja;
	let sexoNotaBaja;
	let varonesNotaMayorSeis;
	let desaprobados;
	let banderaNotaBaja;
	let contador;

	contador = 0; 
	varonesNotaMayorSeis = 0; 
	desaprobados = 0; 
	totalDeNotas = 0; 
	banderaNotaBaja = 0; 

	for (let i = 0; i < 7; i++) {

		contador = contador +1; 
		sexoAlumno = prompt("Ingrese el sexo del alumno: ");
		while (sexoAlumno != "f" && sexoAlumno != "F" && sexoAlumno != "m" && sexoAlumno != "M" && sexoAlumno != "b" && sexoAlumno != "B") {
			sexoAlumno = prompt("Ingrese un sexo valido: 'f' o 'm' o 'b' ");
		}	
		notaAlumno = parseInt(prompt("Ingrese la nota del alumno: "));
		while (isNaN(notaAlumno) && notaAlumno < 0 && notaAlumno > 11) {
			notaAlumno = parseInt(prompt("Error. Ingrese una nota valida: "));
		}
		totalDeNotas = totalDeNotas + notaAlumno;
		if (banderaNotaBaja == 0){
			notaMasBaja = notaAlumno;
			sexoNotaBaja = sexoAlumno;
			banderaNotaBaja = 1; 
		}else if (notaAlumno<notaMasBaja){
			notaMasBaja = notaAlumno;
			sexoNotaBaja = sexoAlumno;
		}
		if(notaAlumno>5 && (sexoAlumno == "m" || sexoAlumno == "M")) {
			varonesNotaMayorSeis = varonesNotaMayorSeis +1; 
		}
		if(notaAlumno <4){
			desaprobados = desaprobados +1; 
		}
	}
	promedio = totalDeNotas / contador;
	alert("El promedio de las notas es: " + promedio);
	alert("la nota mas baja fue: " + notaMasBaja + " de un estudiante de sexo " + sexoNotaBaja);
	alert("La cantidad de varones con nota mayor o igual a seis son: " + varonesNotaMayorSeis);
	alert("La cantidad de alumnos desaprobados es de: " + desaprobados);

}//FIN DE LA FUNCIÓN
