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
*/
//while 2 bis: Ingresar 5 números, y determinar 
//la cantidad de números que son mayores que 10 y menores 20 (inclusive en ambos casos)

function mostrar()
{
	let numero;
	let mayorDiez;
	let menorVeinte; 
	let flag;

	flag = 0; 
	
	for(let i=0; i==5 ; i++){
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
			numero= parseInt(prompt("Error. Ingrese un numero "));
		}
		if(flag == 0 ){
			mayorDiez = numero;
			menorVeinte = numero; 
			flag = 1; 
		}else if(numero>9){
			mayorDiez = mayorDiez +1;
		}else if(numero<21){
			menorVeinte = menorVeinte +1;
		}
	}
	alert("la cantidad de numeros mayores a diez es: "+ mayorDiez);
	alert("la cantidad de numeros menores a 20 es: "+menorVeinte); 

}//FIN DE LA FUNCIÓN