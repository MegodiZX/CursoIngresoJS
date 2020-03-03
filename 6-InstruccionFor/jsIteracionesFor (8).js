function mostrar()
{	
	var numero;
	var i;
	var contador;
	contador=0

	numero=prompt("ingrese numero");
	numero=parseInt(numero);

	for(i=2;i<numero;i++)//(i=2;numero/2;i++)
	{
		console.log(i);
		if(numero%i==0)
		{
			contador=1; //contador=1
						//break;
		}
	}
	if(contador==0)
	{
		alert(numero+" es primo");
	}else
	{
		alert(numero+" no es primo");
	}
}//FIN DE LA FUNCIÓN