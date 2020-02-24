function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta="si";

	while(respuesta=="si")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if(numero>0)
		{
			positivo=positivo+numero;
			positivo=parseInt(positivo);
		}
		if(numero<0)
		{
			negativo=negativo*numero;
			negativo=parseInt(negativo);
		}
		respuesta=prompt("escriba 'si' para continuar o terminara el proceso");
	}
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN