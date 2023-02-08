/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto;

function comenzar() {
  let max = 100;
  //Genero el número RANDOM entre 1 y 100
  numeroSecreto = Math.round(Math.random() * max);
  alert(numeroSecreto);
}

function verificar() {
  //declaro variables
  let numero;
  let diferencia;

  //tomo el numero de la caja de texto. 
  numero = parseInt(document.getElementById("txtIdNumero").value);
  alert(numero);

  //tengo que verificar si el numero es el correcto, si se paso, o si le falta.
  //cuanto le falto o cuanto se paso. 



  if (numero == numeroSecreto) {
    alert("Usted es un ganador y en solo " + intentos);

  } else if (numero > numeroSecreto) {

    diferencia = numero - numeroSecreto;
    alert("se paso por " + diferencia);

  } else {

    diferencia = numeroSecreto - numero;
    alert("le falto " + diferencia);

  }
  document.getElementById("txtIdNumero").value = " ";






  //tengo que ver cuantos intentos le toma.
  //contar intentos  
  //mostrar resultados. 



}

