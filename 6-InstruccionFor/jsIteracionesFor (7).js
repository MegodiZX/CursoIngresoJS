function mostrar()
{
	var i;
	var numero;
	var calculo;
	var contador;
	contador=0

	numero=prompt("Ingrese numero");
	parseInt(numero);

	for(i=1;i<numero;i++)
	{
		calculo=numero%i;
		document.white(i+ "<br>");
		if(calculo==0)
		{
			contador=contador+1
		}
	}
	 
	 document.write(contador+" divisores encontrados");
}//FIN DE LA FUNCIÓN