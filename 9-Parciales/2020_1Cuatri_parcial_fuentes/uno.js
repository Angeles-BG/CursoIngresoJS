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
/*
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
				contadorJabon = contadorJabon + 1;
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
*/
/*
Parcial 1 2020 bis: /"Super chino" Se pide el ingreso de mercadería de un supermercado , 
hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del mas caro de todos los productos
c) el NOMBRE del mas barato de los elaborados
d)el tipo de mercadería que mas aparece
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado/
*/
function mostrar() {
	let tipo;
	let nombre;
	let importeProducto;
	let procedencia;
	let peso;
	let banderaMasPesado;
	let masPesadoNombre;
	let masPesadoPeso;
	let banderaMasCaro;
	let precioMasCaro;
	let nombreMasCaro;
	let banderaMasBarato;
	let precioMasBarato;
	let nombreMasBarato;
	let contadorLimpieza;
	let contadorComestible;
	let contadorOtro;
	let mayorTipo;
	let pesoComestible;
	let pesoLimpieza;
	let pesoOtro;
	let porcentaje;
	let totalIngresos;
	let promedioPesoComestible;
	let promedioPesoLimpieza;
	let promedioPesoOtro;
	let elaborado;

	let respuesta = "si";
	banderaMasPesado = 0;
	banderaMasCaro = 0;
	banderaMasBarato = 0;
	contadorComestible = 0;
	contadorLimpieza = 0;
	contadorOtro = 0;
	pesoComestible = 0;
	pesoLimpieza = 0;
	pesoOtro = 0;
	totalIngresos = 0;
	elaborado = 0;


	while (respuesta == "si") {
		tipo = prompt("Ingrese el tipo de producto: limpieza , comestible , otros");
		while (tipo != "limpieza" && tipo != "comestible" && tipo != "otro") {
			tipo = prompt("Error- Ingrese el tipo de producto: limpieza , comestible , otros");
		}
		nombre = prompt("Ingrese el nombre: ");
		importeProducto = parseFloat(prompt("Ingrese el importe:  "));
		while (isNaN(importeProducto) || importeProducto < 1 || importeProducto > 1000) {
			importeProducto = parseFloat(prompt("Error- Ingrese el importe:  "));
		}
		procedencia = prompt("Ingrese el procedencia de producto: importado, nacional o elaborado");
		while (procedencia != "importado" && procedencia != "nacional" && procedencia != "elaborado") {
			procedencia = prompt("Error- Ingrese el procedencia de producto: importado, nacional o elaborado");
		}
		peso = parseFloat(prompt("Ingrese el peso:  "));
		while (isNaN(peso) || peso < 1 || peso > 30) {
			peso = parseFloat(prompt("Error- Ingrese el peso:  "));
		}
		if (banderaMasPesado == 0 || peso > masPesadoPeso) {
			masPesadoNombre = nombre;
			masPesadoPeso = peso;
			banderaMasPesado = 1;
		}
		if (banderaMasCaro == 0 || importeProducto > precioMasCaro) {
			nombreMasCaro = nombre;
			precioMasCaro = importeProducto;
			banderaMasCaro = 1;
		}
		if (banderaMasBarato == 0 || importeProducto < precioMasBarato) {
			nombreMasBarato = nombre;
			precioMasBarato = importeProducto;
			banderaMasBarato = 1;
		}
		switch (tipo) {
			case "limpieza":
				contadorLimpieza = contadorLimpieza + 1;
				pesoLimpieza = pesoLimpieza + peso;
				break;
			case "comestible":
				contadorComestible = contadorComestible + 1;
				pesoComestible = pesoComestible + peso;
				break;
			case "otro":
				contadorOtro = contadorOtro + 1;
				pesoOtro = pesoOtro + peso;
				break;
		}

		if (procedencia == "elaborado") {
			elaborado = elaborado + 1;
		}

		totalIngresos = totalIngresos + 1;

		respuesta = prompt("¿Desea seguir ingresando datos? si o no");
	}

	if (contadorComestible > contadorLimpieza && contadorComestible > contadorOtro) {
		mayorTipo = "comestible";
	} else if (contadorLimpieza > contadorOtro) {
		mayorTipo = " limpieza";
	} else {
		mayorTipo = " otro";
	}

	porcentaje = elaborado * 100 / totalIngresos;
	if (contadorLimpieza != 0) {
		promedioPesoLimpieza = pesoLimpieza / contadorLimpieza;
	} else {
		promedioPesoLimpieza = 0;
	}
	if (contadorComestible != 0) {
		promedioPesoComestible = pesoComestible / contadorComestible;
	} else {
		promedioPesoComestible = 0;
	}
	if (contadorComestible != 0) {
		promedioPesoOtro = pesoOtro / contadorOtro;
	} else {
		promedioPesoOtro = 0;
	}

	console.log("el porcentaje de productos elaborados por sobre el total es de: " + porcentaje + "%");
	console.log("el tipo de mercaderia que mas aparece es: " + mayorTipo);
	console.log("el nombre del producto mas caro es: " + nombreMasCaro);
	console.log("el nombre del producto mas barato es: " + nombreMasBarato);
	console.log("El promedio de pesos de limpieza es: " + promedioPesoLimpieza);
	console.log("El promedio de pesos de comestibles es: " + promedioPesoComestible);
	console.log("El promedio de pesos de otro es: " + promedioPesoOtro);

}

