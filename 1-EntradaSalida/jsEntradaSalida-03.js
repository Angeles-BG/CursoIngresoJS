/*
García Ángeles Belén. 
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar() {
	
	let nombre;
	let mensaje;

	/*
	--------------------------
	otra forma que puede o no funcionar: 
	nombre = txtIdNombre.value;
	--------------------------
	document --> llama al html 
	getElementById --> Busca en el html por el ID, el ID que esta ntre parentesis.
	value --> trae el valor que este dentro de ese elemento. 
	--------------------------
	*/
	nombre = document.getElementById("txtIdNombre").value;
	mensaje = "Usted ingreso el nombre: " + nombre;
	alert(mensaje);

}


