/*
García Ángeles Belén. 
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//declaro variables.
	let sueldo;
	let aumento;
	let porcentaje;
	let nuevosueldo;
	//Le asigno a la variable el porcentaje que me pide el ejercicio. 
	porcentaje = 10/100; 

	//la suma del sueldo mas el aumento da lugar a nuestro nuevo sueldo.
	//el aumento va ser igual a multiplicar el porcentaje por el sueldo, dividido por 100.
    
	//voy a buscar el "sueldo" ingresado por el usuario en la caja de texto. 
	sueldo = document.getElementById("txtIdSueldo").value;
	//Convierto el dato obtenido en un dato del tipo numerico flotante, es decir un numero entero con coma. 
	sueldo = parseFloat(sueldo);
	//calculo el aumento y lo almaceno en la variable aumento.
	aumento = sueldo* porcentaje;
	//Calculo el nuevo sueldo. 
	nuevosueldo = sueldo + aumento;
    //muestro en la caja de texto el resultado obtenido y almacenado en la variable nuevosueldo. 
	document.getElementById("txtIdResultado").value = nuevosueldo;
}
