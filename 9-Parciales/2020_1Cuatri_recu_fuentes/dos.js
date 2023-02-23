/*
Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
    Tipo validad("arena";"cal";"cemento")
          Cantidad de bolsas(0-300),
          Precio por bolsa (más de cero y menor a 10000 ),
          al terminar la compra el cliente accede a un descuento segun las bolsas en total
            Si compro más de 15 bolsas en total tenes 10% de descuento sobre el total a pagar.
            Si compro más de 45 bolsas en total tenes 30% de descuento sobre el total a pagar.
                a)
                El importe total a pagar , bruto sin descuento y...
                b)
                el importe total a pagar con descuento(solo si corresponde)
                d)
                Informar la bolsa mas cara de Cal y la mas barata de Cemento.
                e)
                Cuantas bolsas de arena se compraron en total, y el promedio por compra.
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
  let tipoMasCaroCal;
  let banderaMasCaraCal;
  let precioMasCaro;
  let mensaje;
  let banderaMasBarataCemento; 
  let tipoMasBaratoCemento;
  let precioMasBaratoCemento; 
  let cantidadArena; 
  let promedioDeCompra; 

  banderaMasCaraCal = 0;
  respuesta = "si";
  porcentaje = 0;
  acumuladorBolsasArena = 0;
  acumuladorBolsasCal = 0;
  acumuladorBolsasCemento = 0;
  banderaMasBarataCemento = 0; 
  cantidadArena = 0; 

  while (respuesta == "si") {
    tipoDeMaterial = prompt("Ingrese el tipo de material: arena, cal, cemento");
    while (material != "arena" && material != "cal" && material != "cemento") {
      tipoDeMaterial = prompt("Error- Ingrese el tipo de material: arena, cal, cemento");
    }
    cantidadDeBolsas = parseInt(prompt("Ingrese la cantidad de bolsas: "));
    while (isNaN(cantidadDeBolsas) || cantidadDeBolsas < 1 || cantidadDeBolsas > 300) {
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
        cantidadArena = cantidadArena +1; 
        break;
      case "cal":
        acumuladorBolsasCal = acumuladorBolsasCal + cantidadDeBolsas;
        if (banderaMasCaraCal == 0 || precioPorBolsa > precioMasCaro) {
          tipoMasCaroCal = tipoDeMaterial;
          precioMasCaro = precioPorBolsa;
          banderaMasCaraCal = 1;
        }
        break;
      case "cemento":
        acumuladorBolsasCemento = acumuladorBolsasCemento + cantidadDeBolsas;
        if (banderaMasBarataCemento == 0 || precioPorBolsa < precioMasBaratoCemento) {
          tipoMasBaratoCemento = tipoDeMaterial;
          precioMasBaratoCemento = precioPorBolsa;
          banderaMasBarataCemento = 1;
        }
        break;
    }

    respuesta = prompt("¿Desea ingresar mas datos?");
  }//Fin del while 

  if (totalDeBolsas > 45) {
    porcentaje = 30;
  } else if (totalDeBolsas > 15) {
    porcentaje = 10;
  } else {
    porcentaje = 0;
  }

  if (porcentaje != 0) {
    importeTotalConDescuento = importeTotalSinDescuento - porcentaje * importeTotalSinDescuento / 100;
    mensaje = "El importe a pagar con descuento es de: $" + importeTotalConDescuento;
  } else {
    mensaje = "El importe a pagar sin descuento es de: $" + importeTotalSinDescuento;
  }

  if (acumuladorBolsasArena > acumuladorBolsasCal && acumuladorBolsasArena > acumuladorBolsasCemento) {
    tipoConMasCantidadDeBolsas = "arena";
  } else if (acumuladorBolsasCal > acumuladorBolsasCemento) {
    tipoConMasCantidadDeBolsas = "cal";
  } else {
    tipoConMasCantidadDeBolsas = "cemento";
  }

  if (cantidadArena != 0) {
		promedioDeCompra = acumuladorBolsasArena / cantidadArena;
		console.log("El promedio de compra de la arena es: " + promedioDeCompra);
	}else{
		console.log("No compro arena"); 
	}
  console.log(mensaje);
  console.log("La bolsa mas cara de cal es:  " + precioMasCaro + " y la mas barata de cemento es: "+precioMasBaratoCemento);
  console.log("La cantidad de bolsas de arena fue de: " + cantidadArena);
}
