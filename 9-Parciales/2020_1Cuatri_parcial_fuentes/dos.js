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
validar
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza: si es perro (pastor, toy, callejero) y 
si gato (siamés, turco, Peterbald , generico) 
y si es de tipo "otros" o pájaro , pedir solo un texto
Edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre (no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza/ 

*/
function mostrar() {
  let tipoDeAnimal;
  let raza;
  let edad;
  let nombre;
  let masViejoPerro;
  let masViejoGato;
  let masViejoOtro;
  let masViejoPajaro;
  let masViejoPerroNombre;
  let masViejoGatoNombre;
  let masViejoOtroNombre;
  let masViejoPajaroNombre;
  let banderaMasViejoPajaro;
  let banderaMasViejoPerro;
  let banderaMasViejoGato;
  let banderaMasViejoOtro;
  let siames;
  let turco;
  let peterbald;
  let generico;
  let edadSiames;
  let edadTurco;
  let edadPeterbald;
  let edadGenerico;
  let promedio;
  let masAnimales;

  banderaMasViejoPerro = 0;
  banderaMasViejoGato = 0;
  banderaMasViejoOtro = 0;
  banderaMasViejoPajaro = 0;
  siames = 0;
  turco = 0;
  peterbald = 0;
  generico = 0;
  edadSiames = 0;
  edadTurco = 0;
  edadPeterbald = 0;
  edadGenerico = 0;


  for (let i = 0; i < 10; i++) {
    tipoDeAnimal = prompt("Ingrese que tipo de animal es: gato , perro , pajaro o otro ");
    switch (tipoDeAnimal) {
      case "perro":
        raza = prompt("Ingrese la raza del animal: pastor, toy, callejero");
        while (raza != "pastor" && raza != "toy" && raza != "callejero") {
          raza = prompt("Error- Ingrese la raza del animal: pastor, toy, callejero");
        }
        edad = parseInt(prompt("Ingrese la edad del animal: entre 1 y 20 "));
        while (isNaN(edad) && edad > 20 && edad < 1) {
          edad = parseInt(prompt("Error- Ingrese la edad del animal: entre 1 y 20 "));
        }
        if (banderaMasViejoPerro == 0 || edad > masViejoPerro) {
          masViejoPerroNombre = nombre;
          masViejoPerro = edad;
          banderaMasViejoPerro = 1;
        }
        break;
      case "gato":
        if (banderaMasViejoGato == 0 || edad > masViejoGato) {
          masViejoGatoNombre = nombre;
          masViejoGato = edad;
          banderaMasViejoGato = 1;
        }
        raza = prompt("Ingrese la raza del animal: siamés, turco, Peterbald , generico");
        while (raza != "siamés" && raza != "turco" && raza != "Peterbald" && raza != "generico") {
          raza = prompt("Ingrese la raza del animal: siamés, turco, Peterbald , generico");
        }
        edad = parseInt(prompt("Ingrese la edad del animal: entre 1 y 20 "));
        while (isNaN(edad) && edad > 20 && edad < 1) {
          edad = parseInt(prompt("Error- Ingrese la edad del animal: entre 1 y 20 "));
        }
        switch (raza) {
          case "siamés":
            siames = siames + 1;
            edadSiames = edadSiames + edad;
            break;
          case "turco":
            turco = turco + 1;
            edadTurco = edadTurco + edad;
            break;
          case "Peterbald":
            peterbald = peterbald + 1;
            edadPeterbald = edadPeterbald + edad;
            break;
          case "generico":
            generico = generico + 1;
            edadGenerico = edadGenerico + edad;
            break;
        }// fin switch raza gato
        break;
      case "otro":
        if (banderaMasViejoOtro == 0 || edad > masViejoOtro) {
          masViejoOtroNombre = nombre;
          masViejoOtro = edad;
          banderaMasViejoOtro = 1;
        }
        raza = prompt("Ingrese la raza del animal: ");
        edad = parseInt(prompt("Ingrese la edad del animal: entre 1 y 100 "));
        while (isNaN(edad) && edad > 100 && edad < 1) {
          edad = parseInt(prompt("Error- Ingrese la edad del animal: entre 1 y 100 "));
        }
        break;
      case "pajaro":
        if (banderaMasViejoPajaro == 0 || edad > masViejoPajaro) {
          masViejoPajaroNombre = nombre;
          masViejoPajaro = edad;
          banderaMasViejoPajaro = 1;
        }
        raza = prompt("Ingrese la raza del animal: ");
        edad = parseInt(prompt("Ingrese la edad del animal: entre 1 y 20 "));
        while (isNaN(edad) && edad > 50 && edad < 1) {
          edad = parseInt(prompt("Error- Ingrese la edad del animal: entre 1 y 50 "));
        }
        break;
      default:
        tipoDeAnimal = prompt("Error- Ingrese que tipo de animal es: gato , perro , pajaro o otro ");
        break;

    }// fin switch.
    nombre = prompt("Ingrese el nombre del animal: ");
    if (!isNaN(nombre)) {
      nombre = prompt("Error- Ingrese el nombre del animal: (no puede tener numeros)");
    }


  }//fin del for 
  if (siames > turco) {
    if (siames > generico) {
      if (siames > peterbald) {
        masAnimales = "siames";
        promedio = edadSiames / siames; 
      } else {
        masAnimales = "peterbald";
        promedio = edadPeterbald / peterbald; 
      }
    } else if (generico > peterbald) {
      masAnimales = "generico";
      promedio = edadGenerico / generico; 
    } else {
      masAnimales = "peterbald";
      promedio = edadPeterbald / peterbald; 
    }
  } else if (turco > generico) {
    if(turco>peterbald){
      masAnimales = "turco";
      promedio = edadTurco / turco; 
    }else{
      masAnimales = "peterbald";
      promedio = edadPeterbald / peterbald; 
    }
  }else if(generico>peterbald){
    masAnimales = "generico";
    promedio = edadGenerico / generico; 
  }else{
    masAnimales = "peterbald";
    promedio = edadPeterbald / peterbald; 
  }

  // mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
  //mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza/ 
  console.log("El mas viejo de los perros se llama: " + masViejoPerroNombre);
  console.log("El mas viejo de los gatos se llama: " + masViejoGatoNombre);
  console.log("El mas viejo de los pajaros se llama: " + masViejoPajaroNombre);
  console.log("El mas viejo de la opcion 'otro' es: " + masViejoOtroNombre);
  console.log("La raza de gatos con mas animales es: " + masAnimales);
  console.log("El promedio de edad de esta raza es: " + promedio);

}// fin de la funcion