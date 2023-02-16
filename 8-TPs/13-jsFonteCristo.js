/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.

*/
//Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
function NumerosPares() {
    let numeroIngresado;
    let cantidadPar;
    let numero;

    cantidadPar = 0;

    numeroIngresado = parseInt(prompt("Ingrese un numero: "));
    while(isNaN(numeroIngresado)){
        numeroIngresado = parseInt(prompt("Error - Ingrese un numero valido: "));
    }
    if (numeroIngresado > 0) { 
        numero = numeroIngresado;
        for (let i = numeroIngresado; i > -1; i--) {
            if (numero % 2 == 0) {
                cantidadPar = cantidadPar + 1;
            } 
            numero = numero - 1;
        }
    }

    alert("Cantidad de numeros pares: " + cantidadPar);
}
//Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
function NumerosImpares() {
    let numeroIngresado;
    let cantidadImpar;
    let numero;

    cantidadImpar = 0;

    numeroIngresado = parseInt(prompt("Ingrese un numero: "));
    while(isNaN(numeroIngresado)){
        numeroIngresado = parseInt(prompt("Error - Ingrese un numero valido: "));
    }
    if (numeroIngresado > 0) { 
        numero = numeroIngresado;
        for (let i = numeroIngresado; i > -1; i--) {
            if (numero % 2 !== 0) {
               cantidadImpar =cantidadImpar + 1;
            } 
            numero = numero - 1;
        }
    }

    alert("Cantidad de numeros Impares: " +cantidadImpar);

}
//Se pedirán un número positivo y se mostrará la cantidad de números divisibles de 
//este número que se encuentran desde el 1 al 100.
function NumerosDivisibles() {
    let numeroIngresado;
    let divisor;
    let cantidadDivisores;

    cantidadDivisores = 0; 
    divisor = 0; 

    numeroIngresado = parseInt(prompt("Ingrese un numero: "));
    while(isNaN(numeroIngresado)){
        numeroIngresado = parseInt(prompt("Error - Ingrese un numero valido: "));
    }
    if (numeroIngresado > 0) {
        for (let i = 1; i < 101; i++) {
            divisor = divisor + 1;
            if (numeroIngresado % divisor == 0) {
                cantidadDivisores = cantidadDivisores + 1;
            }
        }
        alert("Cantidad de divisores de su numero : " + cantidadDivisores);
    }
}
//Se pedirán un número positivo y se mostrará si el número es un número primo o no.
function VerificarPrimo() {
    let numeroIngresado;
    let divisor;
    let mensaje;
    let cantidadDivisores;

    divisor = 0;
    cantidadDivisores = 0; 

    numeroIngresado = parseInt(prompt("Ingrese un numero: "));
    while(isNaN(numeroIngresado)){
        numeroIngresado = parseInt(prompt("Error - Ingrese un numero valido: "));
    }
    if (numeroIngresado > 0) {
        for (let i = 1; i < numeroIngresado; i++) {
            divisor = divisor + 1;
            if (numeroIngresado % divisor == 0) {
                cantidadDivisores = cantidadDivisores + 1;
            }
        }
        if (cantidadDivisores < 3) {
            mensaje = "el numero es primo";
        } else {
            mensaje = "no es primo ";
        }
    }
    alert(mensaje);
}
//Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
function NumerosPrimos() {
    let numeroIngresado;
    let cantidadDivisores;
    let diviciones;
    let cantidadDePrimos;

    cantidadDePrimos = 0;
    diviciones = 0; 

    numeroIngresado = parseInt(prompt("Ingrese un numero: "));
    while(isNaN(numeroIngresado)){
        numeroIngresado = parseInt(prompt("Error - Ingrese un numero valido: "));
    }
    if (numeroIngresado > 0) {
        for (let j = numeroIngresado; j > -1; j--) {
            for (let a = 1; a <numeroIngresado; a++) {
                if (j % a == 0) {
                    diviciones = diviciones + 1;
                }
            }
            if (diviciones < 3) {
                cantidadDePrimos = cantidadDePrimos + 1;
            }
        }
    }
    alert("Cantidad de numeros primos desde su numero hasta el 0 es: " + cantidadDePrimos);
}