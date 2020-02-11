/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var PrimerN;
	var SegundoN;
	var resultado;

	PrimerN=document.getElementById('numeroUno').value;
	PrimerN=parseInt(PrimerN);
	SegundoN=document.getElementById('numeroDos').value;
	SegundoN=parseInt(SegundoN);

	resultado= PrimerN+SegundoN;
	alert ("La suma es "+resultado);
}

