function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno=prompt("ingrese un numero");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese otro numero");
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		resultado=numeroUno+" y "+numeroDos;
		alert (resultado);
	}else
	{
		if(numeroUno>numeroDos)
		{
			resultado=numeroUno-numeroDos;
			alert (resultado);
		}else
		{
			resultado=numeroUno+numeroDos
			alert (resultado);
			if(resultado>10)
			{
				alert("La suma es "+resultado+" y supero el 10");
			}
		}
	}
}
