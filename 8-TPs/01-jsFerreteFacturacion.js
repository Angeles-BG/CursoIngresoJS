/*
Ángeles Belén García 
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let mensaje;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    suma = precioUno + precioDos + precioTres;
    mensaje = "La suma es de $ " + suma

    alert(mensaje); 
 
}
function Promedio () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let promedio;
    let mensaje;


    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    promedio = (precioUno + precioDos + precioTres) /3;
    mensaje = "El promedio es de $ " + promedio; 

    alert(mensaje); 
}
function PrecioFinal () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let iva;
    let preciofinal;
    let mensaje;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    suma = precioUno + precioDos + precioTres;
    iva = suma * 21 /100;
    preciofinal = suma + iva;
    mensaje = "El precio final es de $ " + preciofinal;
     
    alert(mensaje); 
}