function mostrar()
{
	let numero;
	let max;
	let min; 
	max =10 ;
	

	//Genero el número RANDOM entre 1 y 10 
	numero = Math.round(Math.random()*max);

	if (numero <= 4){
		alert(" Vamos la proxima se puede. Nota: " + numero); 
	}else if(numero < 9) {
		alert(" APROBO. Nota: " + numero);
	}else{
		alert(" EXCELENTE. Nota: " + numero );
	}


}//FIN DE LA FUNCIÓN