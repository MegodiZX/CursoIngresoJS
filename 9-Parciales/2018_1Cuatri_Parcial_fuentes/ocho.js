function mostrar()
{
	var letra;
	var numero;
	var respuesta;
	var contadorPares;
	var contadorImpares;
	var contadorCeros;
	var revision;
	var promedioNumeroPositivo;
	var sumaDeNumeroPositivo;
	var cantidadDeNumeroPositivo;
	var sumaDeNumerosNegativos;
	var bandera;
	var numeroMaximo;
	var numeroMinimo;
	var letraMaximo;
	var letraMinimo;

	contadorPares=0;
	contadorImpares=0;
	contadorCeros=0;
	cantidadDeNumeroPositivo=0;
	sumaDeNumeroPositivo=0;
	sumaDeNumerosNegativos=0;
	bandera=0;
	numeroMinimo=0;
	numeroMaximo=0;

	respuesta="si";

	while(respuesta=="si")
	{
		bandera++;
		do
		{
			letra=prompt("ingrese letra");
		}while(!isNaN(letra));

		do
		{
			numero=prompt("ingrese numero");
			numero=parseInt(numero);
		}while(isNaN(numero)||numero>100||numero<-100);

		revision=(numero%2);
		console.log("revision" +revision);
		if(revision==0)
		{
			contadorPares++;
		}else
		{
			contadorImpares++;
		}
		if(numero>0)
		{
			cantidadDeNumeroPositivo++;
			sumaDeNumeroPositivo=numero+sumaDeNumeroPositivo;
		}else
		{
			sumaDeNumerosNegativos=numero+sumaDeNumerosNegativos;
		}
		if(bandera==1)
		{
			numeroMaximo=numero;
			letraMaximo=letra;
			numeroMinimo=numero;
			letraMinimo=letra;
		}else
		{
			if(numeroMaximo<numero)
			{
				numeroMaximo=numero;
				letraMaximo=letra;
			}
			if(numeroMinimo>numero)
			{
				numeroMinimo=numero;
				letraMinimo=letra;
			}
		}

		respuesta=prompt("Ingrese 'si' para continuar de lo contrario terminara el proceso");
	}//fin de while

	promedioNumeroPositivo=sumaDeNumeroPositivo/cantidadDeNumeroPositivo;
	document.write("cantidad de numeros pares "+contadorPares+"<br>"+"cantidad de numeros impares "+contadorImpares+"<br>"+"promedio de numeros positivos"+ promedioNumeroPositivo+"<br> sumaDeNumerosNegativos "+sumaDeNumerosNegativos+"<br> Numero Maximo "+numeroMaximo +" y su letra "+letraMaximo+"<br> Numero letraMinimo "+numeroMinimo +" y su letra "+letraMinimo);
}
