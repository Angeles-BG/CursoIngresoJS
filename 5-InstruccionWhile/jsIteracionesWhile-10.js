/*
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
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let cantPositivos = 0;
	let cantNegativos = 0;
	let cantCeros = 0;
	let cantPares = 0;
	let promedioPositivo;
	let promedioNegativo;
	let diferencia; 

	do {
		numero = parseInt(prompt("ingrese un numero"));
		if (numero == 0){
			cantCeros ++;
		}else if (numero>0){
			cantPositivos ++;
			sumaPositivos += numero; 
		}else{
			cantNegativos ++; 
			sumaNegativos += numero; 
		}
		if ( numero % 2 == 0 ){ //condicion de paridad, para ver si un numero es par. 
			cantPares ++; 
		}

		respuesta = prompt("desea continuar? s/n");
	} while (respuesta != "n");

	diferencia = cantPositivos - cantNegativos; 
	promedioNegativo = sumaNegativos / cantNegativos;
	promedioPositivo = sumaPositivos / cantPositivos; 

	console.log("suma positivos: " + sumaPositivos);
	console.log("suma negativos: " + sumaNegativos);
	console.log("cantidad de positivos: " + cantPositivos);
	console.log("Cantidad de negativos: " + cantNegativos);
	console.log("Cantidad de ceros: " + cantCeros);
	console.log("Cantidad de numeros pares: " + cantPares);
	console.log("Promedio de numeros positivos: " + promedioPositivo);
	console.log("Promedio de numeros negativos: " + promedioNegativo);
	console.log("Diferencia entre positivos y negativos: " + diferencia); 

}//FIN DE LA FUNCIÓN