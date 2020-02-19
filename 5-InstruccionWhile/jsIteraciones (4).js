function mostrar()
{
	var numero;
	numero = prompt("ingrese un número entre 0 y 9.");

	//while(numero>0 && numero<9) //mal
	//while(!(numero>0 && numero<9)) //funciona pero usa mas microprocesador al tener que negar los signos
	while(numero<0 || numero>9) // muy bien
	{
		numero = prompt("ingrese un número entre 0 y 9.");
	}
	document.getElementById('Numero').value="Usted ingreso "+numero;
	//pensar el while como: mientras algo no se cumpla ejecuto el bucle


}//FIN DE LA FUNCIÓN