function mostrar()
{
//tomo la edad  
	var edad
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if(edad>17)
	{
		alert ("Mayor de edad");
	}
	else
	{
		alert ("Menor de edad");
	}
}//FIN DE LA FUNCIÓN
//else no utiliza logica, else solo, no esle (23);