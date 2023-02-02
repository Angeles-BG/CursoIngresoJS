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
    console.log (mensaje); 

 
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

    console.log (mensaje); 

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
    iva = 21; 

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    suma = precioUno + precioDos + precioTres;
    preciofinal = suma + suma * iva /100;
    mensaje = "El precio final es de $ " + preciofinal;
     
    console.log (mensaje); 

}

/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
/*
//var precioUno //MAAAAALLLL

function Sumar () 
{
    //A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
    let precioUnoTexto; 
    let precioDosTexto; 
    let precioTresTexto; 
    let precioUnoNumero; 
    let precioDosNumero; 
    let precioTresNumero; 
    let sumaPrecios; 
    let precioUno; 

    //asignado a mis variables lo que ingreso el usuario por teclado
    precioUnoTexto = document.getElementById("txtIdPrecioUno").value;//"10"
    precioDosTexto = document.getElementById("txtIdPrecioDos").value;//"100"
    precioTresTexto = document.getElementById("txtIdPrecioTres").value; //"20"

    //parseo de texto a numero
    precioUnoNumero = parseInt(precioUnoTexto); 
    precioDosNumero = parseInt(precioDosTexto); 
    precioTresNumero = parseInt(precioTresTexto); 

    // sumaPrecios = precioUnoTexto + precioDosTexto + PrecioTresTexto; 1010020
    sumaPrecios = precioUnoNumero + precioDosNumero + precioTresNumero; 

    alert("La suma total de precios es: " + sumaPrecios); 
    console.log("La suma total de precios es: " + sumaPrecios);

    // uso una misma variable y piso el valor
    // precioUno = document.getElementById("txtIdPrecioUno").value;
    // precioUno = parseInt(precioUno); 

    //solo es una linea de codigo pido el numero y lo parseo. 
    //precioUno = parseInt(document.getElementById("txtIdPrecioUno").value)

    //precioUno = parseInt(prompt("Que precio queres poner? "))

    //prompt("precio") = parseInt(numero) NO ANDAAAAA

	
}
function Promedio () 
{
    //B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
    
    //promedio = suma total de los ingresos,  dividido la cantidad de veces ingresado

    let precioUnoTexto; 
    let precioDosTexto; 
    let precioTresTexto; 
    let precioUnoNumero; 
    let precioDosNumero; 
    let precioTresNumero; 
    let sumaPrecios; 
    let promedio; 

    //asignado a mis variables lo que ingreso el usuario por teclado
    precioUnoTexto = document.getElementById("txtIdPrecioUno").value;//"10"
    precioDosTexto = document.getElementById("txtIdPrecioDos").value;//"100"
    precioTresTexto = document.getElementById("txtIdPrecioTres").value; //"20"

    //parseo de texto a numero
    precioUnoNumero = parseInt(precioUnoTexto); 
    precioDosNumero = parseInt(precioDosTexto); 
    precioTresNumero = parseInt(precioTresTexto); 

    // sumaPrecios = precioUnoTexto + precioDosTexto + PrecioTresTexto; 1010020
    sumaPrecios = precioUnoNumero + precioDosNumero + precioTresNumero; 

    promedio = sumaPrecios / 3; 

    alert("El promedio de los precios es: " + promedio); 
    console.log("El promedio de los precios es: " + promedio);

}

function PrecioFinal () 
{
    //escope de la variable: la variable vive y muere entre las llaves que se la declara
    //C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

    /* 
       
      
      
       
    */

        let precioUnoTexto; 
        let precioDosTexto; 
        let precioTresTexto; 
        let precioUnoNumero; 
        let precioDosNumero; 
        let precioTresNumero; 
        let sumaPrecios; 
        let precioFinal; 
        let IVA; 

        IVA = 21; 

        // 1) ingresar los precios hecho 
        //asignado a mis variables lo que ingreso el usuario por teclado
        precioUnoTexto = document.getElementById("txtIdPrecioUno").value;//"10"
        precioDosTexto = document.getElementById("txtIdPrecioDos").value;//"100"
        precioTresTexto = document.getElementById("txtIdPrecioTres").value; //"20"
    
        //  2) parsear los precios hecho 
        //parseo de texto a numero
        precioUnoNumero = parseInt(precioUnoTexto); 
        precioDosNumero = parseInt(precioDosTexto); 
        precioTresNumero = parseInt(precioTresTexto); 
        //  3) sumar los tres precios hecho 
        sumaPrecios = precioUnoNumero + precioDosNumero + precioTresNumero; 

        // 4) agregar el 21 % NO ESTA HECHO 
        
        // forma larga 
        // precioIVA = sumaPrecios * IVA / 100; 
        // precioFinal = sumaPrecios + precioIVA; 
                           //30 + (30*21/100) 
        //otra forma; 
        //precioFinal = sumaPrecios *( 1 + IVA/100); 

        precioFinal =  sumaPrecios + sumaPrecios * IVA / 100; 
        
        alert("El precio fina con el IVA del 21% es: " + precioFinal); 
        console.log("El precio fina con el IVA del 21% es: " + precioFinal);
    
}
*/