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
*/
/*
Recu 2020 1 bis: "Jugando al Doctor" 
De 7 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
nombre, altura, peso y sexo.
a)Informar la cantidad de personas de sexo femenino. 
b)La altura promedio en total de pacientes.
c)El nombre del hombre con menos peso(si lo hay).
d)De la persona no binaria, el más flaco. 
Pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
	let nombre;
	let altura;
	let peso;
	let sexo;
	let cantidadSexoFemenino;
	let alturaPromedio;
	let acumuladorAltura;
	let nombreHombreMenosPeso;
	let banderaMenosPeso;
	let hombreMenosPeso;
	let noBinarioMasFlaco;
	let banderaMasFlaco;
	let nombreNoBinarioMasFlaco;

	cantidadSexoFemenino = 0;
	alturaPromedio = 0;
	acumuladorAltura = 0;
	nombreHombreMenosPeso = 0;
	banderaMenosPeso = 0;
	hombreMenosPeso = 0;
	noBinarioMasFlaco = 0;
	banderaMasFlaco = 0;
	nombreNoBinarioMasFlaco = 0;

	for (let i = 0; i < 7; i++) {
		nombre = prompt("Ingrese el nombre del paciente: ");
		while (!isNaN(nombre)) {
			nombre = prompt("Ingrese el nombre del paciente: ");
		}//Fin While NOMBRE
		altura = parseFloat(prompt("Ingrese la altura del paciente: (Solo se acepta entre 1.50 y 2)"));
		while (isNaN(altura) || altura < 1.5 || altura > 2) {
			altura = parseFloat(prompt("Ingrese la altura del paciente: (Solo se acepta entre 1.50 y 2)"));
		}//Fin While ALTURA 
		peso = parseFloat(prompt("Ingrese el peso del paciente: (Solo se acepta entre 40 y 180)"));
		while (isNaN(peso) || peso < 40 || peso > 180) {
			peso = parseFloat(prompt("Ingrese el peso del paciente: (Solo se acepta entre 40 y 180)"));
		}// Fin While PESO
		sexo = prompt("Ingrese el sexo del paciente: (Solo se acepta NB, f, m)");
		while (sexo != "f" && sexo != "m" && sexo != "NB") {
			sexo = prompt("Ingrese el sexo del paciente: (Solo se acepta NB, f, m)");
		}//Fin While SEXO
		switch (sexo) {
			case "f":
				cantidadSexoFemenino = cantidadSexoFemenino + 1;
				break;
			case "NB":
				if (banderaMasFlaco == 0 || peso < noBinarioMasFlaco) {
					noBinarioMasFlaco = peso;
					nombreNoBinarioMasFlaco = nombre;
					banderaMasFlaco = 1;
				}//Fin if NO BINARIO MAS FLACO
				break;
			case "m":
				if (banderaMenosPeso == 0 || peso < hombreMenosPeso) {
					hombreMenosPeso = peso;
					nombreHombreMenosPeso = nombre;
					banderaMenosPeso = 1;
				}//Fin if HOMBRE CON MENOS PESO
				break;
		}//Fin Switch SEXO

		acumuladorAltura = acumuladorAltura + altura;
	}//Fin del For

	alturaPromedio = acumuladorAltura / 7;
	
	console.log("La cantidad de personas de sexo femenino es: " + cantidadSexoFemenino);
	console.log("La altura promedio de los pacientes es: " + alturaPromedio);
	if (nombreHombreMenosPeso != 0){
		console.log("El nombre del hombre con menos peso es: " + nombreHombreMenosPeso);
	}//Fin If 
	console.log("La persona No binaria mas flaca es: " + nombreNoBinarioMasFlaco);
}