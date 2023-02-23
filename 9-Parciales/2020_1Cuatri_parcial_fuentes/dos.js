/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar() {
  let tipoDeMaterial;
  let cantidadDeBolsas;
  let precioPorBolsa;
  let porcentaje;
  let respuesta;
  let totalDeBolsas;
  let total;
  let importeTotalConDescuento;
  let importeTotalSinDescuento;
  let acumuladorBolsasArena;
  let acumuladorBolsasCal;
  let acumuladorBolsasCemento; 
  let tipoConMasCantidadDeBolsas;
  let tipoMasCaro;
  let banderaMasCara;
  let precioMasCaro; 
  let mensaje;

  banderaMasCara = 0; 
  respuesta = "si";
  porcentaje = 0;
  acumuladorBolsasArena = 0;
  acumuladorBolsasCal = 0;
  acumuladorBolsasCemento = 0;

  while (respuesta == "si") {
    tipoDeMaterial = prompt("Ingrese el tipo de material: arena, cal, cemento");
    while (material != "arena" && material != "cal" && material != "cemento") {
      tipoDeMaterial = prompt("Error- Ingrese el tipo de material: arena, cal, cemento");
    }
    cantidadDeBolsas = parseInt(prompt("Ingrese la cantidad de bolsas: "));
    while (isNaN(cantidadDeBolsas) || cantidadDeBolsas < 1 || cantidadDeBolsas > 10000) {
      cantidadDeBolsas = parseInt(prompt("Error- Ingrese la cantidad de bolsas: "));
    }
    precioPorBolsa = parseInt(prompt("Ingrse el precio por bolsa: "));
    while (isNaN(precioPorBolsa) || precioPorBolsa < 1) {
      precioPorBolsa = parseInt(prompt("Error- Ingrse el precio por bolsa: "));
    }

    total = precioPorBolsa * cantidadDeBolsas;
    totalDeBolsas = totalDeBolsas + cantidadDeBolsas;
    importeTotalSinDescuento = importeTotalSinDescuento + total;

    switch (tipoDeMaterial) {
      case "arena":
        acumuladorBolsasArena = acumuladorBolsasArena + cantidadDeBolsas;
        break;
      case "cal":
        acumuladorBolsasCal = acumuladorBolsasCal + cantidadDeBolsas;
        break;
      case "cemento":
        acumuladorBolsasCemento = acumuladorBolsasCemento + cantidadDeBolsas;
        break;
    }

    if(banderaMasCara == 0 ||precioPorBolsa > precioMasCaro ){
      tipoMasCaro = tipoDeMaterial;
      precioMasCaro = precioPorBolsa; 
      banderaMasCara = 1; 
    }

    respuesta = prompt("¿Desea ingresar mas datos?");
  }//Fin del while 

  if (totalDeBolsas > 29) {
    porcentaje = 25;
  } else if (totalDeBolsas > 9) {
    porcentaje = 15;
  } else {
    porcentaje = 0;
  }

  if (porcentaje != 0) {
    importeTotalConDescuento = importeTotalSinDescuento - porcentaje * importeTotalSinDescuento / 100;
    mensaje = "El importe a pagar con descuento es de: $" + importeTotalConDescuento;
  }else{
    mensaje = "El importe a pagar sin descuento es de: $" + importeTotalSinDescuento;
  }

  if (acumuladorBolsasArena > acumuladorBolsasCal && acumuladorBolsasArena > acumuladorBolsasCemento) {
    tipoConMasCantidadDeBolsas = "arena";
  } else if (acumuladorBolsasCal > acumuladorBolsasCemento) {
    tipoConMasCantidadDeBolsas = "cal";
  } else {
    tipoConMasCantidadDeBolsas = "cemento";
  }

  console.log(mensaje);
  console.log("La mayor cantidad de bolsas son de " + tipoConMasCantidadDeBolsas);
  console.log("El material mas caro es " + tipoMasCaro);
}
