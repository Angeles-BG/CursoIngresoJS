/*
Angeles BElen Garcia
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
/*function mostrar()
{
	let contador;

	contador=10; 

	while(contador>0){
		console.log(contador);
		contador = contador - 1;
	}

}//FIN DE LA FUNCIÓN

//while 2 bis: Ingresar 5 números, y determinar 
//la cantidad de números que son mayores que 10 y menores 20 (inclusive en ambos casos)
function mostrar()
{
	let numero; 
	let contador;
	let flag;

	contador=0; 
	
	for(let i=0; i<5 ; i++){
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
			numero= parseInt(prompt("Error. Ingrese un numero "));
		}
		if(numero>9 && numero<21){
			contador = contador +1; 
		}
	}
	alert("la cantidad de numeros mayores a diez y menores a 20 es: "+ contador);

}//FIN DE LA FUNCIÓN
*/
//While 2 bis bis: Ingresar numeros hasta que el usuario quiera. 
//Determinar la cantidad de números que son mayores que 10 y menores 20 
//(inclusive en ambos casos). También el promedio de los números que cumplen la condición anterior.
function mostrar()
{
	let numero;
	let contador; 
	let promedio;
	let ingresos; 
	let respuesta; 
	let sumaNumeros; 

	contador = 0; 
	respuesta = "si"; 
	sumaNumeros = 0;
	ingresos = 0; 
	
	while (respuesta == "si") {
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
			numero= parseInt(prompt("Error. Ingrese un numero "));
		}
		if(numero>9 && numero<21){
			contador = contador +1;
			sumaNumeros = numero + sumaNumeros; 
		}
		ingresos = ingresos +1; 
		respuesta = prompt("¿Quiere ingresar otro numero? si/no"); 
	}

	promedio = sumaNumeros /ingresos;

	alert("la cantidad de numeros mayores a diez y menores a 20 es: "+ contador);
	alert("El promedio de los numeros que cumplen con la condicon de ser menor a 20 y/ o mayor a 10 es: " + promedio); 

}//FIN DE LA FUNCIÓN