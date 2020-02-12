function mostrar()
{
	//tomo la edad  
	var edad
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if(edad<"18")
	{
		if(edad>"12")
		{
			alert("Adolecente");
		}
	}
	//INTERCEPCION DE CONJUNTOS
	//if(edad<18 && edad>12) es lo mismo que arriba
	//cortocircuito, cuando encuentra un 0 y se sabe que da false
	//si no se pone && se ejecutan ambos 
}//FIN DE LA FUNCIÓN