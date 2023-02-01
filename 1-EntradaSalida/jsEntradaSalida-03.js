/*
García Ángeles Belén. 
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
/*
function mostrar() {
	
	let nombre;
	let mensaje;

	-----------------------------------------------------------
	otra forma que puede o no funcionar: 
	nombre = txtIdNombre.value;
	--------------------------
	document --> llama al html 
	getElementById --> Busca en el html por el ID, el ID que esta ntre parentesis.
	value --> trae el valor que este dentro de ese elemento. 
	-------------------------------------------------------------
	
	nombre = document.getElementById("txtIdNombre").value;
	mensaje = "Usted ingreso el nombre: " + nombre;
	alert(mensaje);

}*/

/*
Ejercicio 3.bis: Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto 
junto al precio aumentado en un 30%. 
*/
function mostrar(){

	let descripcion;
	let precioProducto;
	let precioAumento;
	let mensaje; 

	descripcion = prompt("Ingrese la descripcion de un producto: ");
	precioProducto = document.getElementById("txtIdNombre").value;

	precioProducto = parseInt(precioProducto);
	precioAumento = precioProducto + precioProducto * 30 /100;
	mensaje = "Descripcion: " + descripcion + " Precio original: $" + precioProducto +" Precio con aumento del 30%: $" + precioAumento;

	alert(mensaje);
}


