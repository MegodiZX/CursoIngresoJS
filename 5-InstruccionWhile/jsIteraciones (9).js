function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var respuesta='si';

	while(respuesta!='no')
	{
		contador=contador+1;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		if(contador==1)
		{
			maximo=numero;
			minimo=numero;
		}else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo=numero;
			}
		}
		respuesta=prompt("ingrese no para terminar");
		document.getElementById('maximo').value=;
		document.getElementById('minimo').value=;
	}
}//FIN DE LA FUNCIÓN