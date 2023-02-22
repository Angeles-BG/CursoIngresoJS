/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
Un For.
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
Un While similar a validar el sexo.
el precio (validar entre 100 y 300),
Un while de validar un numero y entre rangos.
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Un while de validar un numero y entre rangos.
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
If y una Bandera
b) Del tipo con mas unidades, el promedio por compra.
If y una Bandera. Contador de cada uno de los tipos, acumulador de cantidades de cada uno de los tipos(Switch)
c) Cuántas unidades de jabones hay en total
Contador de cada uno de los tipos, acumulador de cantidades de cada uno de los tipos(Switch)
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
	let unidadesCantidadMasBaratoAlcohol;
	let fabricanteMasBaratoAlcochol;
	let precioMasBaratoAlcohol;
	let flagAlcohol;
	let promedioCompra;
	let mayorTipo; 

	flagAlcohol = 0;
	flagTipoConMasUnidades = 0;

	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	acumuladorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;

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
				if (flagAlcohol == 0 || precioProducto < precioMasBaratoAlcohol) {
					fabricanteMasBaratoAlcochol = fabricanteProducto;
					unidadesCantidadMasBaratoAlcohol = unidadesProducto;
					precioMasBaratoAlcohol = precioProducto;
					flagAlcohol = 1;
				} 
				contadorAlcohol = contadorAlcohol + 1;
				acumuladorAlcohol = unidadesProducto + acumuladorAlcohol;
				break;
			case "barbijo":
				contadorBarbijo = contadorBarbijo + 1;
				acumuladorBarbijo = acumuladorBarbijo + unidadesProducto;
				break;
			case "jabon":
				contadorJabon = contadorJabon + 1 ;
				acumuladorJabon = acumuladorJabon + unidadesProducto;
				break;
		}

	}//fin del for 

	if(acumuladorAlcohol > acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo){
		mayorTipo = "el alcohol"; 
		promedioCompra = acumuladorAlcohol / contadorAlcohol;
	}else if(acumuladorJabon > acumuladorBarbijo){
		promedioCompra = acumuladorJabon / contadorJabon;
		mayorTipo = " el jabon"; 
	}else{
		promedioCompra = acumuladorBarbijo / contadorBarbijo;
		mayorTipo = " el barbijo"; 
	}

	console.log("Cantidad de unidades del mas barato de los alcohol: " + unidadesCantidadMasBaratoAlcohol + ". Su fabricante es: " + fabricanteMasBaratoAlcochol);
	console.log("Unidades totales de jabon: " + acumuladorJabon);
	console.log("El tipo con mas unidades es: " + mayorTipo);
	console.log("El promedio de compra del tipo con mas unidades es: " + promedioCompra);
}
