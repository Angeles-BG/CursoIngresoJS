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
  importeTotalSinDescuento = 0; 
  totalDeBolsas = 0; 

  while (respuesta == "si") {
    tipoDeMaterial = prompt("Ingrese el tipo de material: arena, cal, cemento");
    while (tipoDeMaterial != "arena" && tipoDeMaterial != "cal" && tipoDeMaterial != "cemento") {
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
*/
/*
Parcial 2020 2 bis: /"La veterinaria" pedir el ingreso de 10 mascotas 
Usar for (10)
validar
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo 
Usar While
raza: si es perro (pastor, toy, callejero) y 
Usar While
si gato (siames, turco, Peterbald , generico) 
Usar While
y si es de tipo "otros" o pájaro , pedir solo un texto
Usar While
Edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pájaro 1 de 50
Usar While
nombre (no se permite solo numero)
Usar While
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza/ 

*/
function mostrar() {
  let tipo;
  let raza;
  let nombre;
  let masViejoGato;
  let masViejoPerro;
  let masViejoPajaro;
  let masviejoOtro;
  let edadMasViejoGato;
  let edadMasViejoPerro;
  let edadMasViejoPajaro;
  let edadMasViejoOtro;
  let banderaMasViejoGato;
  let banderaMasViejoPerro;
  let banderaMasViejoPajaro;
  let banderaMasViejoOtro;
  let contadorSiames;
  let contadorTurco;
  let contadorPerbald;
  let contadorGenerico;
  let promedioEdad;
  let sumaEdadSimes;
  let sumaEdadTurco;
  let sumaEdadPerbald;
  let sumaEdadGenerico;
  let razaConMasAnimales;

  banderaMasViejoGato = 0;
  banderaMasViejoPerro = 0;
  banderaMasViejoPajaro = 0;
  banderaMasViejoOtro = 0;
  contadorSiames = 0;
  contadorTurco = 0;
  contadorPerbald = 0;
  contadorGenerico = 0;
  promedioEdad = 0;
  sumaEdadSimes = 0;
  sumaEdadTurco = 0;
  sumaEdadPerbald = 0;
  sumaEdadGenerico = 0;
  masViejoGato = 0;
  masViejoPerro = 0;
  masViejoPajaro = 0;
  masviejoOtro = 0;

  for (let i = 0; i < 10; i++) {
    nombre = prompt("Ingrese el nombre del animal: ")
    while (!isNaN(nombre)) {
      nombre = prompt("Ingrese el nombre del animal: ");
    }// Fin While NOMBRE
    tipo = prompt("Ingrese el tipo de animal que es: (solo se acepta: gato , perro , pajaro y otros)");
    while (tipo != "gato" && tipo != "perro" && tipo != "pajaro" && tipo != "otro") {
      tipo = prompt("Ingrese el tipo de animal que es: (solo se acepta: gato , perro , pajaro y otro)");
    }// Fin While tipo
    switch (tipo) {
      case "perro":
        raza = prompt("Ingrese el raza de animal que es: (solo se acepta: pastor, toy, callejero)");
        while (raza != "pastor" && raza != "toy" && raza != "callejero") {
          raza = prompt("Ingrese el raza de animal que es: (solo se acepta: pastor, toy, callejero)");
        }// Fin While RAZA
        edad = parseInt(prompt("Ingrese la edad del animal: entre 1 y 20"));
        while (isNaN(edad) || edad < 1 || edad > 20) {
          edad = parseInt(prompt("Ingrese la edad del animal: entre 1 y 20"));
        }//FinWhile EDAD
        if (banderaMasViejoPerro == 0 || edad > edadMasViejoPerro) {
          masViejoPerro = nombre;
          edadMasViejoPerro = edad;
          banderaMasViejoPerro = 1;
        }//Fin If masViejoPerro
        break;
      case "gato":
        raza = prompt("Ingrese el raza de animal que es: (solo se acepta: siames, turco, peterbald , generico)");
        while (raza != "siames" && raza != "turco" && raza != "peterbald" && raza != "generico") {
          raza = prompt("Ingrese el raza de animal que es: (solo se acepta: siames, turco, peterbald , generico)");
        }// Fin While raza
        edad = parseInt(prompt("Ingrese la edad del animal: entre 1 y 20"));
        while (isNaN(edad) || edad < 1 || edad > 20) {
          edad = parseInt(prompt("Ingrese la edad del animal: entre 1 y 20"));
        }//FinWhile EDAD
        if (banderaMasViejoGato == 0 || edad > edadMasViejoGato) {
          masViejoGato = nombre;
          edadMasViejoGato = edad;
          banderaMasViejoGato = 1;
        }//Fin If masViejoGato
        switch (raza) {
          case "siames":
            contadorSiames = contadorSiames + 1;
            sumaEdadSimes = edad + sumaEdadSimes;
            break;
          case "peterbald":
            contadorPerbald = contadorPerbald + 1;
            sumaEdadPerbald = edad + sumaEdadPerbald;
            break;
          case "generico":
            contadorGenerico = contadorGenerico + 1;
            sumaEdadGenerico = edad + sumaEdadGenerico;
            break;
          case "turco":
            contadorTurco = contadorTurco + 1;
            sumaEdadTurco = edad + sumaEdadTurco;
            break;
        }//Fin switch RAZA
        break;
      case "pajaro":
        raza = prompt("Ingrese el raza de animal que es: ");
        while (!isNaN(raza)) {
          raza = prompt("Ingrese el raza de animal que es: ");
        }// Fin While raza
        edad = parseInt(prompt("Ingrese la edad del animal: entre 1 y 50"));
        while (isNaN(edad) || edad < 1 || edad > 50) {
          edad = parseInt(prompt("Ingrese la edad del animal: entre 1 y 50"));
        }//FinWhile EDAD
        if (banderaMasViejoPajaro == 0 || edad > edadMasViejoPajaro) {
          masViejoPajaro = nombre;
          edadMasViejoPajaro = edad;
          banderaMasViejoPajaro = 1;
        }//Fin If masViejoPajaro
        break;
      case "otro":
        raza = prompt("Ingrese el raza de animal que es: ");
        while (!isNaN(raza)) {
          raza = prompt("Ingrese el raza de animal que es: ");
        }// Fin While raza
        edad = parseInt(prompt("Ingrese la edad del animal: entre 1 y 100"));
        while (isNaN(edad) || edad < 1 || edad > 100) {
          edad = parseInt(prompt("Ingrese la edad del animal: entre 1 y 100"));
        }//FinWhile EDAD
        if (banderaMasViejoOtro == 0 || edad > edadMasViejoOtro) {
          masviejoOtro = nombre;
          edadMasViejoOtro = edad;
          banderaMasViejoOtro = 1;
        }//Fin If masViejoOtro
        break;
    }// Fin del switch

  }//Fin del FOR

  if (contadorSiames > contadorTurco && contadorSiames > contadorPerbald && contadorSiames > contadorGenerico) {
    razaConMasAnimales = "Siames";
    promedioEdad = sumaEdadSimes / contadorSiames;
  } else if (contadorPerbald > contadorGenerico && contadorPerbald > contadorTurco) {
    razaConMasAnimales = "Peterbald";
    promedioEdad = sumaEdadPerbald / contadorPerbald;
  } else if (contadorGenerico > contadorTurco) {
    razaConMasAnimales = "generico";
    promedioEdad = sumaEdadGenerico / contadorGenerico;
  } else {
    razaConMasAnimales = "Turco";
    promedioEdad = sumaEdadTurco / contadorTurco;
  }// Fin If raza con mas animales 

  //mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
  //mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza
  if (masViejoGato != 0) {
    console.log("El nombre del animal mas viejo de gatos es: " + masViejoGato);
  }
  if (masViejoPerro != 0) {
    console.log("El nombre del animal mas viejo de los perros es: " + masViejoPerro);
  }
  if (masViejoPajaro != 0) {
    console.log("El nombre del animal mas viejo de los pajaros es: " + masViejoPajaro);
  }
  if (masviejoOtro != 0) {
    console.log("El nombre del animal mas viejo de los 'otro' es: " + masviejoOtro);
  }

  console.log("La raza de gatos que mas animales tiene es:  " + razaConMasAnimales + " y el promedio de edad de esta raza es: " + promedioEdad);



}// fin de la funcion