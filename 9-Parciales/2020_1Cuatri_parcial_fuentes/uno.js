/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

*/
function mostrar() {

	let tipoProducto;
	let precioProducto;
	let unidadesProducto;

	let unidadesAlcohol;
	let unidadesBarbijo;
	let unidadesJabon;

	let precioAlcohol;
	let precioBarbijo;
	let precioJabon;

	let marcaProducto;
	let fabricanteProducto;

	let unidadesCantidadMasBaratoAlcohol;
	let fabricantemasBaratoAlcochol;
	let precioMasBaratoAlcohol;

	let flagAlcohol;
	let flagTipoConMasUnidades;

	let unidadesTipoConMasUnidades;
	let tipoConMasUnidades;
	let precioConMasUnidades;
	let promedioCompra;

	flagAlcohol = 0;
	flagTipoConMasUnidades = 0;

	unidadesAlcohol = 0;
	unidadesBarbijo = 0;
	unidadesJabon = 0;
	precioAlcohol = 0;
	precioBarbijo = 0;
	precioJabon = 0;

	for (let i = 0; i < 5; i++) {
		tipoProducto = prompt("Ingrese el nombre del producto: barbijo, jabon o alcohol");
		while (tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol") {
			tipoProducto = prompt("Error- Ingrese el nombre del producto: barbijo, jabon o alcohol");
		}

		precioProducto = parseInt(prompt("Ingrese el precio del producto unitario: "));
		while (isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300) {
			precioProducto = parseInt(prompt("Error- Ingrese el precio del producto: "));
		}

		unidadesProducto = parseInt(prompt("ingrese la cantidad de unidades del producto: "));
		while (isNaN(unidadesProducto) || unidadesProducto < 1 || unidadesProducto > 1000) {
			unidadesProducto = parseInt(prompt("Error- ingrese la cantidad de unidades del producto: "));
		}

		marcaProducto = prompt("Ingrse la marca del producto: ");
		fabricanteProducto = prompt("ingrese el fabricante del producto: ");

		if (tipoProducto == "alcohol") {
			if (flagAlcohol == 0) {
				fabricantemasBaratoAlcochol = fabricanteProducto;
				unidadesCantidadMasBaratoAlcohol = unidadesProducto;
				precioMasBaratoAlcohol = precioProducto;
				flagAlcohol = 1;
			} else if (precioProducto < precioMasBaratoAlcohol) {
				fabricantemasBaratoAlcochol = fabricanteProducto;
				unidadesCantidadMasBaratoAlcohol = unidadesProducto;
				precioMasBaratoAlcohol = precioProducto;
			}
		}

		switch (tipoProducto) {
			case "alcohol":
				unidadesAlcohol = unidadesAlcohol + unidadesProducto;
				precioAlcohol = precioProducto + precioAlcohol;
				break;
			case "barbijo":
				unidadesBarbijo = unidadesBarbijo + unidadesProducto;
				precioBarbijo = precioBarbijo + precioProducto;
				break;
			case "jabon":
				unidadesJabon = unidadesJabon + unidadesProducto;
				precioJabon = precioJabon + precioProducto;
				break;
		}

	}//fin del for 

	if (unidadesAlcohol > unidadesBarbijo) {
		if (unidadesAlcohol > unidadesJabon) {
			tipoConMasUnidades = "Alcohol";
			unidadesTipoConMasUnidades = unidadesAlcohol;
			precioConMasUnidades = precioAlcohol;
		} else {
			tipoConMasUnidades = "Jabon";
			unidadesTipoConMasUnidades = unidadesJabon;
			precioConMasUnidades = precioJabon;
		}
	} else if (unidadesBarbijo > unidadesJabon) {
		tipoConMasUnidades = "Barbijo";
		unidadesTipoConMasUnidades = unidadesBarbijo;
		precioConMasUnidades = precioBarbijo;
	} else {
		tipoConMasUnidades = "Jabon";
		unidadesTipoConMasUnidades = unidadesJabon;
		precioConMasUnidades = precioJabon;
	}

	promedioCompra = precioConMasUnidades / unidadesTipoConMasUnidades;

	console.log("Cantidad de unidades del mas barato de los alcohol: " + unidadesCantidadMasBaratoAlcohol + ". Su fabricante es: " + fabricantemasBaratoAlcochol);
	console.log("Unidades totales de jabon: " + unidadesJabon);
	console.log("El tipo con mas unidades es: " + tipoConMasUnidades);
	console.log("El promedio de compra del tipo con mas unidades es: " + promedioCompra);




}
