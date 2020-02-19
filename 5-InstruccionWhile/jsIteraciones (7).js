function mostrar()
{

	var contador;
	var acumulador;
	var respuesta;
	var numero;
	
	contador=0
	acumulador=0
	respuesta='si';

	while(respuesta == "si");
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		contador=contador+1;
		acaumulador=acumulador+numero;
		respuesta=prompt("ingrese si para contunuar o terminara el proceso");
	}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN