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

  let cantidadBolsasArena;
  let cantidadBolsasCal;
  let cantidadBolsasCemento;
  let precioArena;
  let precioCal;
  let precioCemento;

  let tipoConMasCantidadDeBolsas;
  let tipoMasCaro; 

  respuesta = "si";
  porcentaje = 0;
  cantidadBolsasArena = 0;
  cantidadBolsasCal = 0; 
  cantidadBolsasCemento = 0; 

  while (respuesta == "si") {
    tipoDeMaterial = prompt("Ingrese el tipo de material: arena, cal, cemento");
    while (material != "arena" && material != "cal" && material != "cemento") {
      tipoDeMaterial = prompt("Error- Ingrese el tipo de material: arena, cal, cemento");
    }
    cantidadDeBolsas = parseInt(prompt("Ingrese la cantidad de bolsas: "));
    while (isNaN(cantidadDeBolsas)) {
      cantidadDeBolsas = parseInt(prompt("Error- Ingrese la cantidad de bolsas: "));
    }
    precioPorBolsa = parseInt(prompt("Ingrse el precio por bolsa: "));
    while (isNaN(precioPorBolsa) || precioPorBolsa < 1) {
      precioPorBolsa = parseInt(prompt("Error- Ingrse el precio por bolsa: "));
    }

    total = precioPorBolsa * cantidadDeBolsas;

    totalDeBolsas = totalDeBolsas + cantidadDeBolsas;
    importeTotalSinDescuento = inporteTotalSinDescuento + total;

    if (totalDeBolsas > 10 && totalDeBolsas < 30) {
      porcentaje = 15;
    } else if (totalDeBolsas > 30) {
      porcentaje = 25;
    }

    switch (tipoDeMaterial) {
      case "arena":
        cantidadBolsasArena = cantidadBolsasArena + cantidadDeBolsas;
        precioArena = precioPorBolsa;
        break;
      case "cal":
        cantidadBolsasCal = cantidadBolsasCal + cantidadDeBolsas;
        precioCal = precioPorBolsa;
        break;
      case "cemento":
        cantidadBolsasCemento = cantidadBolsasCemento + cantidadDeBolsas;
        precioCemento = precioPorBolsa;
        break;
    }

    respuesta = prompt("¿Desea ingresar mas datos?");
  }

  if (porcentaje != 0) {
    importeTotalConDescuento = importeTotalSinDescuento - porcentaje * importeTotalSinDescuento / 100;
    console.log("El importe a pagar con descuento es de: $" + importeTotalConDescuento);
  }

  if (cantidadBolsasArena > cantidadBolsasCal) {
    if (cantidadBolsasArena > cantidadBolsasCemento) {
      tipoConMasCantidadDeBolsas = "arena";
    } else {
      tipoConMasCantidadDeBolsas = "cemento";
    }
  } else if (cantidadBolsasCal > cantidadBolsasCemento) {
    tipoConMasCantidadDeBolsas = "cal";
  } else {
    tipoConMasCantidadDeBolsas = "cemento";
  }

  if (precioArena > precioCal) {
    if (precioArena > precioCemento) {
      tipoMasCaro= "arena";
    } else {
      tipoMasCaro = "cemento";
    }
  } else if (precioCal > precioCemento) {
    tipoMasCaro = "cal";
  } else {
    tipoMasCaro = "cemento";
  }

  console.log("El importe a pagar sin descuento es de: $"+importeTotalSinDescuento);
  console.log("La mayor cantidad de bolsas son de "+tipoConMasCantidadDeBolsas);
  console.log("El material mas caro es "+tipoMasCaro); 
}
