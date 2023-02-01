/*
Ángeles Belén García 
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let tempF;
    let tempC;
    let mensaje; 

    tempF = parseFloat(document.getElementById("txtIdTemperatura").value);

    tempC = (tempF - 32 ) /  1.8;
    mensaje = tempF + " grados Farenheit equivalen a  " + tempC.toFixed(2) + " grados Centigrados"; 

    alert(mensaje);

}

function CentigradosFahrenheit () 
{
	let tempF;
    let tempC;
    let mensaje; 

    tempC = parseFloat(document.getElementById("txtIdTemperatura").value);

    tempF = tempC * 1.8 + 32;
    mensaje = tempC + " grados Centigrados equivalen a  " + tempF + " grados Farenheit";

    alert(mensaje);
}
