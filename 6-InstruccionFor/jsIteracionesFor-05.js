/*
Angeles Belen Garcia
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/
function mostrar()
{
	let numero; 
/*
	for (let i = 0; numero != 9; i++){
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
		numero = parseInt(prompt("Error. Ingrese un numero: "));
		}
	}
	alert("muy bien debia ingresar el 9"); 
*/
	while(numero !=9){
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
		numero = parseInt(prompt("Error. Ingrese un numero: "));
		}
	}
	alert("muy bien debia ingresar el 9"); 


}//FIN DE LA FUNCIÓN