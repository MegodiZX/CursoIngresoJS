/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var grados;
	var resultado;
	grados=document.getElementById('Temperatura').value;
	grados=parseInt(grados);
	resultado=(grados - 32) * 5/9;
	document.getElementById('Temperatura').value=resultado;
}

function CentigradosFahrenheit () 
{
	var grados;
	grados=parseInt(grados);
	var resultado;
	grados=document.getElementById('Temperatura').value;
	resultado=(grados * 9/5) + 32;
	document.getElementById('Temperatura').value=resultado;
}
