function mostrar()
{
//tomo la edad  
	var edad
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if(edad>17)
	{
		alert("Adulto");
	}
	else
	{
		if(edad<13)
		{
			alert("niño");
		}	
		else
		{
			alert("Adolecente");
		}
	}
	

	/*3ro
	var edad
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if(edad>18)
	{

	}
	else
	{
		if(edad<18&&edad>12)
		{
			alert("Adolecente");
			if(edad<13)
			{

			}

		}	
	}*/
//uso del microprocesador minimo 3 maximo 4
//segunda forma con esle minimo 1 maximo 4
//tercer min 1 maximo 3
//FINAL min 1 max 2 
}//FIN DE LA FUNCIÓN