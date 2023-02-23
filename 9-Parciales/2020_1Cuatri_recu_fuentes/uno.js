/*
Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total

*/
function mostrar() {
	let tipoProducto;
	let precioProducto;
	let unidadesProducto;
	let marcaProducto;
	let fabricanteProducto;
	let contadorAlcohol;
	let contadorBarbijo;
	let contadorJabon;
	let acumuladorAlcohol;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let unidadesCantidadMasCaroJabon;
	let fabricanteMasCaroJabon;
	let precioMasCaroJabon;
	let flagJabon;
	let promedioCompra;
	let mayorTipo;


	flagJabon = 0;
	flagTipoConMasUnidades = 0;

	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	acumuladorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;
	totalDeCompraJabon = 0;
	totalDeCompraAlcohol = 0;
	totalDeCompraBarbijo = 0; 


	for (let i = 0; i < 5; i++) {
		tipoProducto = prompt("Ingrese el nombre del producto: barbijo, jabon o alcohol");
		while (tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol") {
			tipoProducto = prompt("Error- Ingrese el nombre del producto: barbijo, jabon o alcohol");
		}

		precioProducto = parseFloat(prompt("Ingrese el precio del producto unitario: "));
		while (isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300) {
			precioProducto = parseFloat(prompt("Error- Ingrese el precio del producto: "));
		}

		unidadesProducto = parseInt(prompt("ingrese la cantidad de unidades del producto: "));
		while (isNaN(unidadesProducto) || unidadesProducto < 1 || unidadesProducto > 1000) {
			unidadesProducto = parseInt(prompt("Error- ingrese la cantidad de unidades del producto: "));
		}

		marcaProducto = prompt("Ingrse la marca del producto: ");
		fabricanteProducto = prompt("ingrese el fabricante del producto: ");

		switch (tipoProducto) {
			case "alcohol":
				contadorAlcohol = contadorAlcohol + 1;
				acumuladorAlcohol = unidadesProducto + acumuladorAlcohol;
				break;
			case "barbijo":
				contadorBarbijo = contadorBarbijo + 1;
				acumuladorBarbijo = acumuladorBarbijo + unidadesProducto;
				break;
			case "jabon":
				if (flagJabon == 0 || precioProducto > precioMasCaroJabon) {
					fabricanteMasCaroJabon = fabricanteProducto;
					unidadesCantidadMasCaroJabon = unidadesProducto;
					precioMasCaroJabon = precioProducto;
					flagJabon = 1;
				}
				contadorJabon = contadorJabon + 1;
				acumuladorJabon = acumuladorJabon + unidadesProducto;
				break;
		}

	}//fin del for 

	if (acumuladorAlcohol > acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo) {
		mayorTipo = "el alcohol";
		promedioCompra = acumuladorAlcohol / contadorAlcohol;
	} else if (acumuladorJabon > acumuladorBarbijo) {
		promedioCompra = acumuladorJabon / contadorJabon;
		mayorTipo = " el jabon";
	} else {
		promedioCompra = acumuladorBarbijo / contadorBarbijo;
		mayorTipo = " el barbijo";
	}

	console.log("Cantidad de unidades del mas caro de los jabones: " + unidadesCantidadMasCaroJabon + ". Su fabricante es: " + fabricanteMasCaroJabon);
	console.log("Unidades totales de barbijo: " + acumuladorBarbijo);
	console.log("El tipo con mas unidades es: " + mayorTipo);
	console.log("El promedio de compra del tipo con mas unidades es: " + promedioCompra);
}
