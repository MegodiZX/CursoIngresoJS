function mostrar()
{
	var i; //i (intecacion) repreenta el contador
	//for (codigo;logica;codigo)
	for(i=0;i<10;i++)
	{
		console.log("for: "+i);
	}
	/*otra forma de hacerlo:
	contador=0;
	for(;;)//(punto1;punto2;punto3) punto1 se ejecuta una sola vez
	{
		console.log("for: "+contador); //console.log()= console.log.log("for ")
		contador++;
		if (contador==10)
		{
			break;
		}
	}

	contador=0;

	while()
	{
		console.log(contador);//del 0 al 9
		contador=contador+1; //contador++;
		console.log(contador)//1 al 10
	}
	do
	{
		console.log(contador);//del 0 al 9
		cantador=contador+1; //contador++;
		console.log(contador)//1 al 10
	}while(contador>10);
	//do while siempre con punto y coma, se ejecuta minimo una vez siempre.
	//ahorra lineas de codigo
	*/
}