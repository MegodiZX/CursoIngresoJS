function mostrar()
{
	var i
	var aleatorio;
	var detener;
	detener=4
	
	for(i=0;i<100;i++)
	{
		aleatorio= Math.floor((Math.random() * 10) + 1);
		if(detener==aleatorio)
		{
			break;
		}
		console.log(i);
	}
	alert("fin");

	

}//FIN DE LA FUNCIÓN