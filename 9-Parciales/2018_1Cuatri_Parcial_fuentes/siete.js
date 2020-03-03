function mostrar()
{
	var nota;
	var notaMasBaja;
	var notaVarones;
	var sexo;
	var sexoDeNotaBaja;
	var bandera;
	bandera=0

	nota=prompt("Ingrese nota");
	nota=parseInt(nota);

	while(isNaN(nota)||nota<10||nota>0)
	{
		bandera++;
		nota=prompt("Ingrese nota");
	}

	sexo=prompt("Ingrese sexo");
	sexo=parsefloat(sexo)

	while(!isNaN(sexo)||sexo!="f"||sexo!="m")
	{
		sexo=prompt("Ingrese sexo");
	}

	if(bandera=1)
	{
		notaMasBaja=nota
		sexoDeNotaBaja=sexo
	}

	if(sexo="m"&&nota>6)
	{
		notaVarones=Varones+1;
	}
}
