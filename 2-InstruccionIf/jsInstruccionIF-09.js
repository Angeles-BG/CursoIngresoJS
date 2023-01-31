function mostrar()
{
	let numero;
	let max;
	let min; 
	max =10 ;
	min= 1; 

	//Genero el número RANDOM entre 1 y 10 
	numero = Math.round(Math.random()*(max-min)+min);

	alert(numero);

}//FIN DE LA FUNCIÓN