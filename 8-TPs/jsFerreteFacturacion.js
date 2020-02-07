/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var resultado;
	
	primerPrecio=document.getElementById('PrecioUno').value;
	primerPrecio= parseInt (primerPrecio);
	segundoPrecio=document.getElementById('PrecioDos').value;
	segundoPrecio= parseInt (segundoPrecio);
	tercerPrecio=document.getElementById('PrecioTres').value;
	tercerPrecio= parseInt (tercerPrecio);

	resultado= primerPrecio+ segundoPrecio+ tercerPrecio;

	document.getElementById('Resultados').value= resultado;

}
function Promedio () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var resultado;
	
	primerPrecio=document.getElementById('PrecioUno').value;
	primerPrecio= parseInt (primerPrecio);
	segundoPrecio=document.getElementById('PrecioDos').value;
	segundoPrecio= parseInt (segundoPrecio);
	tercerPrecio=document.getElementById('PrecioTres').value;
	tercerPrecio= parseInt (tercerPrecio);

	resultado= (primerPrecio+ segundoPrecio+ tercerPrecio)/3;

	document.getElementById('Resultados').value= resultado;

	
}
function PrecioFinal () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var resultado;
	
	primerPrecio=document.getElementById('PrecioUno').value;
	primerPrecio= parseInt (primerPrecio);
	segundoPrecio=document.getElementById('PrecioDos').value;
	segundoPrecio= parseInt (segundoPrecio);
	tercerPrecio=document.getElementById('PrecioTres').value;
	tercerPrecio= parseInt (tercerPrecio);

	resultado= (primerPrecio+segundoPrecio+tercerPrecio)+(primerPrecio+segundoPrecio+tercerPrecio) * 21/100;

	document.getElementById('Resultados').value= resultado;
}