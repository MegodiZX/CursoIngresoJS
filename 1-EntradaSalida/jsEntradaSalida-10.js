/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;

	importe=document.getElementById('importe').value;
	importe=parseInt (importe);

	resultado= importe *0.75;
	document.getElementById('resultado').value=resultado;
	/*precioConDescuento = precio -precio *porcentajeDeDecuento/100;
	precioConIva = precio + precio * Aumento/100;
	si es aumento va con +
	RESULTADO= importe * 0.75
	hacer todas la variables
	document.getElementById('resultado').value=RESULTADO;*/
	
	
}
