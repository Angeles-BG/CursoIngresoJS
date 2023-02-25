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
 a)El importe total a pagar , bruto sin descuento y...
 b) el importe total a pagar con descuento(solo si corresponde)
 d)Informar la bolsa mas cara de Cal y la mas barata de Cemento.
 e)Cuantas bolsas de arena se compraron en total, y el promedio por compra.
*/
/*
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
  let banderaMasCaraCal;
  let precioMasCaro;
  let mensaje;
  let banderaMasBarataCemento; 
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
          precioMasCaro = precioPorBolsa;
          banderaMasCaraCal = 1;
        }
        break;
      case "cemento":
        acumuladorBolsasCemento = acumuladorBolsasCemento + cantidadDeBolsas;
        if (banderaMasBarataCemento == 0 || precioPorBolsa < precioMasBaratoCemento) {
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
*/
/*
Recu 2020 2 bis:  "El cine"
De un cine se deben ingresar una cantidad indeterminada 
de venta de entradas diaria, validando los
siguientes datos:
nombre de película, precio, cantidad de entradas, tipo(3D o 4D)
a)El nombre de la película más cara de tipo 4D.
b)Informar el precio total de la venta del día.
c)El nombre de la película con menos cantidad de entradas.
d)El tipo de pelicula más vista y la cantidad de entradas. 
e)El nombre de la pelicula más barata en 3D. 
 */
function mostrar() {
  let nombrePelicula;
  let precio;
  let cantidadEntradas;
  let tipo;
  let respuesta;
  let nombrePeliculaMasCaraCuatroD;
  let peliculaMasCaraCuatroD; 
  let banderaMasCaraCuatroD; 
  let acumuladorPrecios;
  let banderaMenosEntradas;
  let menosEntradas;
  let nombreMenosEntras;
  let cantidadEntradasCuatroD;
  let cantidadDeEntradasTresD; 
  let cantidadEntradasMasVista; 
  let masVista; 
  let banderaMasBarataPeliculaTresD;
  let nombrePeliculaMasBarataTresD;
  let peliculaMasBarataTresD; 

  respuesta = "si"; 
  nombrePeliculaMasCaraCuatroD = 0; 
  peliculaMasCaraCuatroD = 0;  
  banderaMasCaraCuatroD = 0;  
  acumuladorPrecios = 0; 
  banderaMenosEntradas = 0; 
  menosEntradas = 0; 
  nombreMenosEntras = 0; 
  cantidadEntradasCuatroD = 0; 
  cantidadDeEntradasTresD = 0;  
  cantidadEntradasMasVista = 0;  
  masVista = 0;  
  banderaMasBarataPeliculaTresD = 0; 
  nombrePeliculaMasBarataTresD = 0; 
  peliculaMasBarataTresD = 0;  

  while(respuesta == "si"){
    nombrePelicula = prompt("Ingrese el nombre de la pelicula: ");
    while(!isNaN(nombrePelicula)){
      nombrePelicula = prompt("Ingrese el nombre de la pelicula: ");
    }//Fin While PELICULA
    precio = parseFloat(prompt("Ingrese el precio de la entrada: (solo acepta ente 100 y 1000)"));
    while(isNaN(precio) || precio < 100 || precio > 1000){
      precio = parseFloat(prompt("Ingrese el precio de la entrada: "));
    }//Fin While PRECIO
    cantidadEntradas = parseInt(prompt("Ingrese la cantidad de entradas vendidas para esa pelicula: (solo acepta entre 1 y 100)"));
    while(isNaN(cantidadEntradas) || cantidadEntradas < 1 || cantidadEntradas >100){
      cantidadEntradas = parseInt(prompt("Ingrese la cantidad de entradas vendidas para esa pelicula: (solo acepta entre 1 y 100)"));
    }// Fin While ENTRADAS
    tipo = prompt("Ingrese que tipo de pelicula es: (solo acepta 3D o 4D)");
    while(tipo != "3D" && tipo != "4D"){
      tipo = prompt("Ingrese que tipo de pelicula es: (solo acepta 3D o 4D)");
    }//Fin While TIPO

    switch(tipo){
      case "4D": 
        if (banderaMasCaraCuatroD == 0 || precio>peliculaMasCaraCuatroD){
          peliculaMasCaraCuatroD = precio;
          nombrePeliculaMasCaraCuatroD = nombrePelicula;
          banderaMasCaraCuatroD = 1; 
        }//Fin If PELICULA MAS CARA 
        cantidadEntradasCuatroD = cantidadEntradasCuatroD + cantidadEntradas; 
        break; 
      case "3D":
        if (banderaMasBarataPeliculaTresD == 0 || precio<peliculaMasBarataTresD){
          peliculaMasBarataTresD = precio;
          nombrePeliculaMasBarataTresD = nombrePelicula;
          banderaMasBarataPeliculaTresD = 1; 
        }//Fin If PELICULA MAS BARATA
        cantidadDeEntradasTresD = cantidadDeEntradasTresD + cantidadEntradas; 
        break; 
    }
    if (banderaMenosEntradas == 0 || cantidadEntradas< menosEntradas){
      menosEntradas= cantidadEntradas;
      nombreMenosEntras = nombrePelicula;
      banderaMenosEntradas = 1; 
    }//Fin If MENOS ENTRADAS

    acumuladorPrecios = acumuladorPrecios + precio; 
    respuesta = prompt("¿Quiere realizar otro ingreso de entradas del dia? si o no "); 
  }//Fin While RESPUESTA

  if ( cantidadEntradasCuatroD > cantidadDeEntradasTresD){
    masVista = "4D";
    cantidadEntradasMasVista = cantidadEntradasCuatroD; 
  }else{
    masVista = "3D"; 
    cantidadEntradasMasVista = cantidadDeEntradasTresD; 
  }//Fin If MAS VISTA

  console.log ("El nombre de la película más cara de tipo 4D es: "+ nombrePeliculaMasCaraCuatroD); 
  console.log ("El precio Total de la venta del dia es: "+ acumuladorPrecios); 
  console.log ("El nombre de la pelicula con menos cantidad de entradas es: "+nombreMenosEntras); 
  console.log ("El tipo de pelicula mas vista es: "+ masVista + ", y la cantidad de entradas de ese tipo fueron: " + cantidadEntradasMasVista); 
  console.log ("El nombre de la pelicula mas barata en 3D es: "+ nombrePeliculaMasBarataTresD); 
  
}
