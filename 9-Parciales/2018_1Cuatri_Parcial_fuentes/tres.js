function mostrar()
{
	var precio;
	var porcentajeDeDecuento;
	var resultado;

	precio= prompt ("Precio");
	porcentajeDeDecuento= prompt ("Descuento");



	resultado = precio -precio *porcentajeDeDecuento/100;

	document.getElementById('elPrecioFinal').value=resultado;

}
