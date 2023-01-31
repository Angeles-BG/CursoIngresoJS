/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre; // declaro una variable. 
	nombre = prompt("Ingrese su nombre"); //tomo un dato ingresado por el usuario y lo guardo en la variable nombre. 
	document.getElementById("txtIdNombre").value = nombre; //coloco en la caja de texto envevevida en el html lo guardado en la variable nombre.
}

