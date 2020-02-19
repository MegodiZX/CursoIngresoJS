function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño)
	{
		case("Febrero"):
		{
			alert("Este mes no tiene más de 29 dias")
		}break;
		default:
		{
			alert("Este mes tiene 30 o más dias");
		}break;
	}
	


}//FIN DE LA FUNCIÓN