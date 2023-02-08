/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; // declaro una variable global porque necesito usarla en las dos funciones. 

function comenzar() {
  let max = 99;
  let min = 1;
  //genero el numero secreto. 
  numeroSecreto = Math.ceil(Math.random() * max + min);
  //lo pruebo 
  console.log(numeroSecreto);
}

var intentos = 0; //Declaro una variable global porque debe inicializarse en cero una unica vez. 

function verificar() {
  let numeroIngresado;
  let falta;
  let sobra;
  let mensaje;
  //sumo intentos cada vez que toco el boton verificar.  
  intentos = intentos + 1;
  //lo pruebo 
  //console.log(intentos); FUNCIONO. 
  // tomo el dato de la caja de texto. 
  numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
  //lo pruebo
  //console.log(numeroIngresado); FUNCIONO. 

  if (numeroIngresado == numeroSecreto) {
    mensaje = "Usted es un ganador!!! y en solo " + intentos + " intentos ";
  } else if (numeroIngresado > numeroSecreto) {
    sobra = numeroIngresado - numeroSecreto;
    mensaje = "Se paso por " + sobra;
  } else {
    falta = numeroSecreto - numeroIngresado;
    mensaje = "Le falto " + falta;
  }

  alert(mensaje);
  document.getElementById("txtIdIntentos").value = intentos;
}



