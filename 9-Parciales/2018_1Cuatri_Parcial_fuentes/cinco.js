function mostrar()
{
	var planeta;

	planeta=prompt("Ingrese planeta");
	switch(planeta)
	{
		case"tierra":
		{
			alert("acá vivimos");
		}break;
		case"mercurio":
		case"venus":
		{
			alert("acá hace mas calor");
		}break;
		case"marte":
		case"jupiter":
		case"saturno":
		case"urano":
		case"neptuno":
		{
			alert("acá hace mas frio");
		}break;
		default:
		{
			alert("no es un planeta valido");
		}
		break;
	}
}
