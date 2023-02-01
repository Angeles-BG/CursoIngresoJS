/*
García Ángeles Belén. 
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

/*
function mostrarAumento()
{
	//declaro variables.
	let sueldo;
	let descuento;
	let nuevosueldo;

	//la suma del sueldo mas el aumento da lugar a nuestro nuevo sueldo.
	//el aumento va ser igual a multiplicar el porcentaje por el sueldo, dividido por 100.
    
	//voy a buscar el "sueldo" ingresado por el usuario en la caja de texto. 
	sueldo = document.getElementById("txtIdImporte").value;
	//Convierto el dato obtenido en un dato del tipo numerico flotante, es decir un numero entero con coma. 
	sueldo = parseFloat(sueldo);
	//calculo el descuento y lo almaceno en la variable descuento.
	descuento = sueldo* 0.25;
	//Calculo el nuevo sueldo. 
	nuevosueldo = sueldo - descuento;
    //muestro en la caja de texto el resultado obtenido y almacenado en la variable nuevosueldo. 
	document.getElementById("txtIdResultado").value = nuevosueldo;
}
*/

/*
Ejercicio 10.bis: Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
pedirle al usuario un % de descuento y mostrar el importe en el cuadro de texto "RESULTADO"
*/
function mostrarAumento()
{
	
	let importe;
	let porcentaje;
	let descuento; 
	let resultado;

	importe = document.getElementById("txtIdImporte").value;
	porcentaje = prompt("Ingrese un porcentaje de descuento: ");
	porcentaje = parseInt(porcentaje); 

	importe = parseInt(importe);
	descuento = importe* porcentaje / 100;
	resultado = importe - descuento;
     
	document.getElementById("txtIdResultado").value = resultado;
}