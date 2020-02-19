function mostrar()
{

	var sexo;
	sexo=prompt("ingrese f ó m .");
	while(sexo!="f"&&sexo!="m")//mientras sexo sea distinto a F y sexo sea distinto a m ejecutar while
	{
		sexo=prompt("ingrese f ó m .");
	}

	document.getElementById('Sexo').value=sexo;
}//FIN DE LA FUNCIÓN