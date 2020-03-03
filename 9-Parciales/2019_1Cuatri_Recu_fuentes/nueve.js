function mostrar()
{
	var nombre;
	var sexo;
	var notaDeFinal;
	var repuesta;

	repuesta="si"

	while(repuesta=="si")
		{
			do
			{
				nombre=prompt("Ingrese nombre");
			}
			while(!isNaN(nombre));

			do
			{
				sexo=prompt("Ingrese sexo");
			}
			while(!isNaN(sexo)||sexo!="f"||sexo!="m");
			

			do
			{
				notaDeFinal=prompt("Ingrese");
				notaDeFinal=parseInt(notaDeFinal);
			}
			while(isNaN(notaDeFinal)||notaDeFinal>10||notaDeFinal<1);
			

		}
}
