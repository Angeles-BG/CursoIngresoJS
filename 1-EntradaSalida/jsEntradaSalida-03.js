/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;
	/* otra forma que puede o no funcionar: 
	nombre = txtIdNombre.value;
	*/
	nombre = document.getElementById("txtIdNombre").value;
	alert (nombre);
	document.getElementById("txtIdNombre").value = "";
	//limpio la caja de texto.
}


