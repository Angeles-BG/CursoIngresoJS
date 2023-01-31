/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {

	let numero;
	let Maximo;
	let Minimo;
	let respuesta; //variable de control.
	let flag;

	flag = 0;

	do {
		//pido un numero y lo guardo.
		numero = parseInt(prompt("ingrese un numero: "));
		
		if (flag == 0 || numero > Maximo ) {//si es la primera vez o el numero es mayor al maximo actualizo. 
			Maximo = numero;
		}
		//se van a ejecutar siempre los dos if. 
		if (flag == 0|| numero < Minimo) { //si es la primera vez o el numero es menor al minimo actualizo. 
			Minimo = numero; 
			flag = 1 ; //modifico la bandera ya que va dejar de ser la primera vez. 
		} 
		
		respuesta = prompt("desea continuar? s/n"); //modificación de la variale de control. 
	} while (respuesta != "n");

	document.getElementById("txtIdMaximo").value = Maximo;
	document.getElementById("txtIdMinimo").value = Minimo;
}//FIN DE LA FUNCIÓN