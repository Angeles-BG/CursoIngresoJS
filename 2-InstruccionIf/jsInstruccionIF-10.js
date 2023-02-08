function mostrar()
{
	let numero;
	let max;
	let min; 
	let mensaje;
	max = 9 ;
	min = 1; 
	

	//Genero el número RANDOM entre 1 y 10 
	numero = Math.ceil(Math.random()* max + min );

	if (numero <= 4){
		mensaje = " Vamos la proxima se puede. Nota: " + numero; 
	}else if(numero < 9) {
		mensaje = " APROBO. Nota: " + numero;
	}else{
		mensaje = " EXCELENTE. Nota: " + numero ;
	}
	alert(mensaje); 


}//FIN DE LA FUNCIÓN