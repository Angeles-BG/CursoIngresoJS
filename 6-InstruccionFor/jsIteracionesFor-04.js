/*
Angeles Belen Garcia
al presionar el botón repetir hasta que utilizamos 'BREAK'.
*/
function mostrar()
{
	let parar; 

	for(let i=0; i<70 ;i++){
		parar = prompt("coloque un numero, o si desea parar escriba 'BREAK'");
		if (parar == "BREAK" || parar == "Break" || parar == "break"){
			break;
		}
	}
	alert("saliste :)");

}//FIN DE LA FUNCIÓN