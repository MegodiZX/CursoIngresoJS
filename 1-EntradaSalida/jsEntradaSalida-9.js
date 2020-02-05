/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var RESULTADO;
	
	sueldo = document.getElementById('sueldo').value;
	sueldo = parseInt (sueldo);

	RESULTADO = sueldo * 0.10 + sueldo;

	document.getElementById('resultado').value= RESULTADO;

	console.log (RESULTADO);
	//EL ORDEN ES SUPER IMPORTANTE

}
