function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	alert (mesDelAño);

	switch (mesDelAño)
	{
		case("Julio"):
		case("Agosto"):
		{
			alert("Abrigate");
		}
		break;
		case("Septiempre"):
		case("Octubre"):
		case("Noviembre"):
		case("Diciembre"):
		{
			alert("Ya paso el frio");
		}break;
		default:
		{
			alert("Falta para el invierno");
		}break;
	}
}//FIN DE LA FUNCIÓN