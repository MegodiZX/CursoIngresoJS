function mostrar()
{
	var numeroUno;
	var numeroDos;
	numeroUno=prompt("ingrese un numero");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese otro numero");
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		alert (numeroUno+" "+numeroDos);
	}else
	{
		if(numeroUno>numeroDos)
		{
			alert (numeroUno-numeroDos);
		}else
		{
			alert (numeroUno+numeroDos);
		}
	}
}
