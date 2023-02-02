/*
García Ángeles Belén. 
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
    let largo;
    let ancho;
    let perimetro;
    let cantalambre;
    let mensaje; 

    //traigo el contenido de las cajas de texto del html. 
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    //parseo lo que tengo dentro de las variables largo y ancho. Convierto en numero lo que traje del html. 
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    //calculo el perimetro del rectangulo. 
    perimetro = (largo + ancho ) *2 ;
    //como son tres tira de alambre las que me pide, multiplico el promedio por tres. 
    cantalambre = perimetro *3;
    mensaje = "La cantidad de alambre a comprar es de " + cantalambre + " metros";

    alert(mensaje);

}
function Circulo () 
{
    //B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
	let radio;
    let perimetro;
    let cantalambre;
    let pi = 3.14;
    let mensaje; 

    radio = document.getElementById("txtIdRadio").value;
    
    radio = parseFloat(radio);
   //calculo el perimetro de un circulo. 
    perimetro = 2*pi*radio ;
    cantalambre = perimetro *3;
    mensaje = "La cantidad de alambre a comprar es de " + cantalambre + " metros"

    alert(mensaje);
}
function Materiales () 
{
    //C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
	let largo;
    let ancho;
    let area;
    let cemento ;
    let cal;
    let mensaje; 

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    //Calculo el area del rectangulo que me da ya en metros cuadrados. 
    area = (ancho*largo);
    //multiplico el area por las cantidades de material que me pide el ejercicio. 
    cemento = (area*2);
    cal = (area*3);
    mensaje = "Para un contrapiso de "  + area + " m2 necesito comprar " + cemento + " bolsas de cemento y " + cal + " bolsas de cal."

    alert(mensaje);


    

}