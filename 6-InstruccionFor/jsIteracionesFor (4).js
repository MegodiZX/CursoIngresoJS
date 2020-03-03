function mostrar()
{
	var i
	var aleatorio;
	var detener;
	detener=4
	
	for(i=0;aleatorio!=detener;i++)
	{
		aleatorio= Math.floor((Math.random() * 10) + 1);
		if(detener==aleatorio)
		{
			break;
		}
		document.write(i+"<br>");
	}
}//FIN DE LA FUNCIÓN