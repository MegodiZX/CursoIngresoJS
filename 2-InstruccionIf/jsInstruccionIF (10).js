function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota=Math.floor((Math.random() * 10) + 1);
	if(nota<4)
	{
		alert("Vamos, la proxima se puede");
	}
	else
	{
		if(nota>8)
		{
			alert("Excelente!");
		}
		else
		{
			alert("Aprobó");
		}
	}
 console.log(nota);
}//FIN DE LA FUNCIÓN