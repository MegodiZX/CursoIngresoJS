
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho= prompt ("ingrese ancho");
	ancho= parseInt (ancho);
	largo= prompt ("ingrese largo");
	largo= parseInt (largo);

	perimetro= 2* (ancho + largo);

	alert ("El prerimetro es "+perimetro);



}
