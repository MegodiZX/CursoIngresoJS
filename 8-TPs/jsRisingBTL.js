/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad;
	var sexo;
	var estadoCivil;
	var sueldo;
	var legajo;
	var nacionalidad;

	edad=prompt("Ingrese edad");
	sexo=prompt("Ingrese sexo");
	estadoCivil=prompt("Ingrese Estado civil");
	sueldo=prompt("Ingrese sueldo bruto");
	legajo=prompt("Ingrese legajo");
	nacionalidad=prompt("Ingrese nacionalidad");

	while(isNaN(edad)||edad<18||edad>90)
	{
		edad=prompt("Ingrese edad");
	}
	while(sexo!="F"&&sexo!="M")
	{
		sexo=prompt("Ingrese sexo");
	}
	while(isNaN(estadoCivil)||estadoCivil<1||estadoCivil>4)
	{
		estadoCivil=prompt("Ingrese Estado civil");
	}
	while(isNaN(sueldo)||sueldo<8000)
	{
		sueldo=prompt("Ingrese sueldo bruto");
	}
	while(isNaN(legajo)||legajo<1000||legajo>9999)
	{
		legajo=prompt("Ingrese legajo");
	}
	while(nacionalidad!="A"&&nacionalidad!="E"&&nacionalidad!="N")
	{
		nacionalidad=prompt("Ingrese nacionalidad");
	}
	legajo=parseInt(legajo, 10);
	switch(estadoCivil)
	{
		case"1":
		{
			estadoCivil="Soltero/a";
		}break;
		case"2":
		{
			estadoCivil="Casado/a";
		}break;
		case"3":
		{
			estadoCivil="Divorciado/a";
		}break;
		case"4":
		{
			estadoCivil="Viudo/a";
		}break;
	}
	switch(nacionalidad)
	{
		case"A":
		{
			nacionalidad="Argentino/a";
		}break;
		case"E":
		{
			nacionalidad="Extranjero/a";
		}break;
		case"N":
		{
			nacionalidad="Nacionalizado/a";
		}break;
	}
	document.getElementById('Edad').value="Edad: "+edad;
	document.getElementById('Sexo').value="Sexo: "+sexo;
	document.getElementById('EstadoCivil').value="Estado Civil: "+estadoCivil;
	document.getElementById('Sueldo').value="sueldo: "+sueldo;
	document.getElementById('Legajo').value="legajo: "+legajo;
	document.getElementById('Nacionalidad').value="Nacionalidad: "+nacionalidad;
}