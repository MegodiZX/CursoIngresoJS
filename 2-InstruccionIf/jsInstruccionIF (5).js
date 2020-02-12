function mostrar()
{
//tomo la edad  
	var edad
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if(edad>17)
	{
		alert("No es adolecente");
	}
	else
	{
		if(edad<13)
		{
			alert("No es adolecente");
		}	
	}
//union de subconjunto
//if(edad>17||edad<12) esto trabaja por cortosicuito la de arriba evalua las 2 condiciones
//if(!(edad>12&&edad<18)) el anterior negandolo
//if(!(edad>17||edad<12)) negado
}//FIN DE LA FUNCIÓN