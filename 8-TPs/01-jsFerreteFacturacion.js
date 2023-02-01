/*
Ángeles Belén García 
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let mensaje;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    suma = precio1 + precio2 + precio3;
    mensaje = "La suma es de $ " + suma

    alert(mensaje); 
 
}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let promedio;
    let mensaje;


    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    promedio = (precio1 + precio2 + precio3) /3;
    mensaje = "El promedio es de $ " + promedio; 

    alert(mensaje); 
}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let iva;
    let preciofinal;
    let mensaje;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    suma = precio1 + precio2 + precio3;
    iva = suma * 21 /100;
    preciofinal = suma + iva;
    mensaje = "El precio final es de $ " + preciofinal;
     
    alert(mensaje); 
}