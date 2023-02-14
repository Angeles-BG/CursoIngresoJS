/*
Angeles Belen García 
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 125
a) contar numeros pares e impares
b) sumar los impares
c) sumar los pares
d) Calcular el mayor de los numeros impares
e) Calcular el mayor numero*/
function mostrar()
{
	let i;
	let contadorNumerosPares; 
	let contadorNumerosImpares; 
	let acumuladorImpares;
	let acumuladorPares; 
	let mayorNumeroImpar; 
	let mayorNumero; 

	i = 1;
	contadorNumerosPares = 0;
	contadorNumerosImpares = 0; 
	acumuladorImpares = 0; 
	acumuladorPares = 0; 
	mayorNumeroImpar = 1; 
	mayorNumero = 1; 

	while(i < 126){
		if (i%2 == 0){
			contadorNumerosPares = contadorNumerosPares + 1; 
			acumuladorPares = acumuladorPares + i; 
		}else{
			contadorNumerosImpares = contadorNumerosImpares + 1;
			acumuladorImpares = acumuladorImpares + i; 
			if(i>mayorNumeroImpar){
				mayorNumeroImpar = i; 
			} 
		}
		if(i>mayorNumero){
           mayorNumero = i; 
		}
		console.log(i);
		i = i + 1;
		
	}

	console.log("Cantidad de numeros par: " + contadorNumerosPares);
	console.log("Cantidad de numeros impares:" + contadorNumerosImpares);
	console.log("Suma de numeros impares:" + acumuladorImpares);
	console.log("Suma de numeros pares:" + acumuladorPares);
	console.log("El mayor de los numeros Impares:" + mayorNumeroImpar);
	console.log("El mayor de los numeros es:" + mayorNumero);
	
}//FIN DE LA FUNCIÓN