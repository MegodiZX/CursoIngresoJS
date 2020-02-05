/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var resultado;
	//variables no pueden empezar con numeros, no pueden tener espacio//

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseint(PrimerNumero)
	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseint(segundoNumero)

	resultado = primerNumero + segundoNumero;

	

	alert ("La suma es " + resultado);
	
	//todo tiene logica y orden//

	//patrones de diseño, aprender a utilizarlo//

	//se puede mostrar un mensaje de 3 maneras, alert, ID, consola (Console.log y hay 2 mas .))//

	//parseInt("2"); lo devuelve nuevo=parseInt("2");//
	//sobreescribe la memoria (la variable) PrimerNumero=parseint(primerNumero)//

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero=document.getElementById('numeroUno').value;
	segundoNumero=document.getElementById('numeroDos').value;

	resultado = primerNumero - segundoNumero;

	console.log (resultado);
	//sources es el codigo que se ejecuta f12 sacar consola//
	//agregar un breack point y apretar f11 para debugear//

	
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero=document.getElementById('numeroUno').value;
	segundoNumero=document.getElementById('numeroDos').value;

	resultado = primerNumero * segundoNumero;

	console.log (resultado);

}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero=document.getElementById('numeroUno').value;
	segundoNumero=document.getElementById('numeroDos').value;

	resultado = primerNumero % segundoNumero;

	console.log (resultado);

}

