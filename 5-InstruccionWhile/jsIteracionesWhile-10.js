/*
Angeles Belen García
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	//declarar contadores y variables 
	let respuesta;
	let numero;
	let sumaNegativos;
	let sumaPositivos;
	let cantPositivos;
	let cantNegativos;
	let cantCeros;
	let cantPares;
	let promedioPositivo;
	let promedioNegativo;
	let diferencia; 
	let mensajeUno;
	let mensajeDos; 

	respuesta = "si";
	sumaNegativos = 0;
	sumaPositivos = 0;
	cantPositivos = 0;
	cantNegativos = 0;
	cantCeros = 0;
	cantPares = 0;
	promedioPositivo = 0;
	promedioNegativo = 0;

	while (respuesta == "si" || respuesta == "SI" || respuesta == "Si"){
		numero = parseInt(prompt("ingrese un numero"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Error. Ingrese un numero: "));
		}
		if (numero == 0){
			cantCeros = cantCeros + 1;
		}else if (numero>0){
			cantPositivos = cantPositivos + 1;
			sumaPositivos = sumaPositivos + numero; 
		}else{
			cantNegativos = cantNegativos + 1; 
			sumaNegativos = sumaNegativos + numero; 
		}
		if ( numero % 2 == 0 ){ //condicion de paridad, para ver si un numero es par. 
			cantPares = cantPares + 1; 
		}

		respuesta = prompt("desea continuar? si/no");
	} 

	diferencia = cantPositivos - cantNegativos; 

	if (cantPositivos == 0 || cantNegativos == 0 ){
		mensajeUno = "Promedio de numeros positivos es 0 ";
		mensajeDos = "Promedio de numeros negativos es 0 ";
	}else{
		promedioNegativo = sumaNegativos / cantNegativos;
		promedioPositivo = sumaPositivos / cantPositivos; 
		mensajeUno = "Promedio de numeros positivos: " + promedioPositivo + "<br>";
		mensajeDos = "Promedio de numeros negativos: " + promedioNegativo + "<br>";
	}
	
	document.write("suma positivos: " + sumaPositivos + "<br>");
	document.write("suma negativos: " + sumaNegativos + "<br>");
	document.write("cantidad de positivos: " + cantPositivos + "<br>");
	document.write("Cantidad de negativos: " + cantNegativos + "<br>");
	document.write("Cantidad de ceros: " + cantCeros + "<br>");
	document.write("Cantidad de numeros pares: " + cantPares + "<br>");
	document.write(mensajeUno + "<br>");
	document.write(mensajeDos + "<br>");
	document.write("Diferencia entre positivos y negativos: " + diferencia + "<br>"); 

}//FIN DE LA FUNCIÓN