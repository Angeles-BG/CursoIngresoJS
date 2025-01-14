/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

//Ángeles Belén García 

/*TODO CON IF: 
function CalcularPrecio() {
   let precio;
   let cantidad;
   let marca;
   let descuento;
   let importefinal;
   let iibb;
   let precioConDescuento;
   let mensaje; 

   precio= 35;
   descuento = 0;
   cantidad = parseInt(document.getElementById("txtIdCantidad").value);
   marca = document.getElementById("Marca").value;

   if (cantidad < 3) {
       descuento = 0;
   } else if (cantidad == 3 ) {
       if (marca == "ArgentinaLuz") {
           descuento = 15;
       } else if (marca == "FelipeLamparas") {
           descuento = 10;
       } else {
           descuento = 5;
       }
   } else if (cantidad == 4) {
       if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
           descuento = 25;
       } else {
           descuento = 20;
       }
   } else if (cantidad == 5) {
       if (marca == "ArgentinaLuz") {
           descuento = 40;
       } else {
           descuento = 30;
       }
   } else {
       descuento = 50;
   }
// ejemplo con 5 lamparitas de marca OSRAM 
   precioConDescuento = precio - precio * descuento / 100;
   //      24,5             35 -  35     *  30     / 1000
   document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
   importefinal = precioConDescuento * cantidad;
   //     122,5               24,5           * 5

   if (importefinal > 120) {
       iibb = importefinal * 10 / 100;
       //12,25     122,5   *10 /  100
       importefinal += iibb;
       // 134,75            122,5 + 12,25
       mensaje = "Total: $ " + importefinal + ". Usted pago $ " + iibb + " de IIBB.";
       //                         134,75                          12,25
   } else {
       mensaje = "Total: $ " + importefinal;
                               
   }
   alert(mensaje); 
}
*/
/* TODO CON SWITCH: 
function CalcularPrecio() {
    let precio 
    let cantidad;
    let marca;
    let descuento;
    let importefinal;
    let iibb;
    let precioConDescuento;
    let mensaje;

    descuento = 0;
    precio = 35;
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    switch (cantidad) {
        case 1:
        case 2:
            descuento = 0;
            break;
        case 3:
            switch (marca) {
                case "ArgentinaLuz":
                    descuento = 15;
                    break;
                case "FelipeLamparas":
                    descuento = 10;
                    break;
                default:
                    descuento = 5;
                    break;
            }
            break;
        case 4:
            switch (marca) {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                    break;
                default:
                    descuento = 20;
                    break;
            }
            break;
        case 5:
            switch (marca) {
                case "ArgentinaLuz":
                    descuento = 40;
                    break;
                default:
                    descuento = 30;
                    break;
            }
            break;
        default:
            descuento = 50;
            break;
    }

    precioConDescuento = precio - precio * descuento / 100;
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
    importefinal = precioConDescuento * cantidad;

    if (importefinal > 120) {
        iibb = importefinal * 10 / 100;
        importefinal += iibb;
        mensaje = "Total: $ " + importefinal + ". Usted pago $ " + iibb + " de IIBB.";
    } else {
        mensaje = "Total: $ " + importefinal;
    }
    alert(mensaje);
}
*/
/* switch(cantidad) y if (marca): 
function CalcularPrecio() {
    let precio
    let cantidad;
    let marca;
    let descuento;
    let importefinal;
    let iibb;
    let precioConDescuento;
    let mensaje;

    precio = 35;
    descuento = 0;
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    switch (cantidad) {
        case 1:
        case 2:
            descuento = 0;
            break;
        case 3:
            if (marca == "ArgentinaLuz") {
                descuento = 15;
            } else {
                if (marca == "FelipeLamparas") {
                    descuento = 10;
                } else {
                    descuento = 5;
                }
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" || marca == "ArgentinaLuz") {
                descuento = 25;
            } else {
                descuento = 20;
            }
            break;
        case 5:
            if (marca == "ArgentinaLuz") {
                descuento = 40;
            } else {
                descuento = 30;
            }
            break;
        default:
            descuento = 50;
            break;
    }

    precioConDescuento = precio - precio * descuento / 100;
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
    importefinal = precioConDescuento * cantidad;

    if (importefinal > 120) {
        iibb = importefinal * 10 / 100;
        importefinal += iibb;
        mensaje = "Total: $ " + importefinal + ". Usted pago $ " + iibb + " de IIBB.";
    } else {
        mensaje = "Total: $ " + importefinal;
    }
    alert(mensaje);
}
*/
//SWITCH (las marcas), IF(cantidad): 
function CalcularPrecio() {
    let precio;
    let cantidad;
    let marca;
    let descuento;
    let importefinal;
    let iibb;
    let precioConDescuento;
    let mensaje;

    precio = 35;
    descuento = 0;
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    if (cantidad < 3) {
        descuento = 0;
    } else if (cantidad == 3) {
        switch (marca) {
            case "ArgentinaLuz":
                descuento = 15;
                break;
            case "FelipeLamparas":
                descuento = 10;
                break;
            default:
                descuento = 5;
                break;
        }
    } else if (cantidad == 4) {
        switch (marca) {
            case "ArgentinaLuz":
            case "FelipeLamparas":
                descuento = 25;
                break;
            default:
                descuento = 20;
                break;
        }
    } else if (cantidad == 5) {
        switch (marca) {
            case "ArgentinaLuz":
                descuento = 40;
                break;
            default:
                descuento = 30;
                break;
        }
    } else {
        descuento = 50;
    }

    precioConDescuento = precio - precio * descuento / 100;
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
    importefinal = precioConDescuento * cantidad;

    if (importefinal > 120) {
        iibb = importefinal * 10 / 100;
        importefinal += iibb;
        mensaje = "Total: $ " + importefinal + ". Usted pago $ " + iibb + " de IIBB.";
    } else {
        mensaje = "Total: $ " + importefinal;
    }
    alert(mensaje);
}